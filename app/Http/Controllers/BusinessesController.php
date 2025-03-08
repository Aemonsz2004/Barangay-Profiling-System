<?php

namespace App\Http\Controllers;

use App\Models\Businesses;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class BusinessesController extends Controller
{
    public function index()
    {
        


            $businesses = Businesses::all()->map(function ($business) {
                return [
                    'id' => $business->id,
                    'business_name' => $business->business_name,
                    'business_address' => $business->business_address,
                    'business_type' => $business->business_type,
                    'owner_name' => $business->owner_name,
                    'contact_number' => $business->contact_number,
                    'email' => $business->email,
                    'business_permit_number' => $business->business_permit_number,
                    'permit_issue_date' => optional($business->permit_issue_date)->format('Y-m-d'),
                    'permit_expiry_date' => optional($business->permit_expiry_date)->format('Y-m-d'),
                    'business_status' => $business->business_status,
                    'registration_year' => $business->registration_year,
                    'resident_id' => $business->resident_id,
                ];
            });


            

        return Inertia::render('Admin/Dashboard', [
            'businesses' => $businesses,
            
            'getBusinessPopulationData' => $this->getBusinessPopulationData($businesses),
        
        ]);
    }


    function getBusinessPopulationData($businesses)
    {
        return $businesses->groupBy(function ($item) {
            return Carbon::parse($item['registration_year'])->year;
        })
        ->map(function ($group, $year) {
            return [
                'year' => $year,
                'population' => $group->count(),
                'growth' => $this->calculateGrowthRate($year),
            ];
        })
        ->sortBy('year')
        ->values();
    }

    private function calculateGrowthRate($year)
    {
        $current = Businesses::whereYear('registration_year', $year)->count();
        $previous = Businesses::whereYear('registration_year', $year - 1)->count();

        return $previous > 0 ? round((($current - $previous) / $previous) * 100, 1) : 0;
    }





    public function registerBusiness(Request $request)
{
    // Validate only the fields present in the migration (remove business_permit_number from validation)
    $validatedData = $request->validate([
        'business_name'          => 'required|string|max:255',
        'business_address'       => 'required|string',
        'business_type'          => 'required|string|max:100',
        'owner_name'             => 'required|string|max:255',
        'contact_number'         => 'nullable|string|max:15',
        'email'                  => 'nullable|email|max:255',
    ]);

    // Automatically generate permit number, issue/expiry dates, and registration year
    $currentDate = Carbon::now();
    $permitIssueDate = $currentDate->format('Y-m-d');
    $permitExpiryDate = $currentDate->copy()->addYear()->format('Y-m-d');
    $registrationYear = $currentDate->year;
    $permitNumber = $this->generateUniquePermitNumber();

    // Merge automatic fields with validated data
    $data = array_merge($validatedData, [
        'business_permit_number' => $permitNumber,
        'permit_issue_date'      => $permitIssueDate,
        'permit_expiry_date'     => $permitExpiryDate,
        'registration_year'      => $registrationYear,
        'business_status'        => 'Active', // default value as defined in migration
    ]);

    Businesses::create($data);

    return response()->json(['message' => 'Business registered successfully']);
}

    public function destroy(Businesses $business)
    {
        $business->delete();
        return redirect()->route('residents-and-households')->with('success', 'Resident deleted successfully!');
    }


    private function generateUniquePermitNumber()
{
    do {

        $length = random_int(9, 12);
        $number = '';
        for ($i = 0; $i < $length; $i++) {
            $number .= random_int(0, 9);
        }
    } while (Businesses::where('business_permit_number', $number)->exists());

    return $number;
}

public function edit($id)
{
    $business = Businesses::findOrFail($id);
    return Inertia::render('Admin/EditBusiness', [
        'title' => 'Edit Business',
        'business' => $business,
    ]);
}

public function update(Request $request, $id)
{
    $business = Businesses::findOrFail($id);

    $validatedData = $request->validate([
        'business_name' => 'required|string|max:255',
        'business_address' => 'required|string',
        'business_type' => 'required|string|max:100',
        'owner_name' => 'required|string|max:255',
        'contact_number' => 'nullable|string|max:15',
        'email' => 'nullable|email|max:255',
        'business_status' => 'required|string|in:Active,Inactive,Pending',
        'registration_year' => 'required|integer|min:1900|max:' . date('Y'),
    ]);

    $business->update($validatedData);

    return redirect()->route('edit-business', ['id' => $id])->with('success', 'Business updated successfully.');
}

    /**
     * Display a listing of soft-deleted businesses.
     */
    public function showDeleted()
    {
        $deletedBusinesses = Businesses::onlyTrashed()->get()->map(function ($business) {
            return [
                'id' => $business->id,
                'business_name' => $business->business_name,
                'business_address' => $business->business_address,
                'business_type' => $business->business_type,
                'owner_name' => $business->owner_name,
                'contact_number' => $business->contact_number,
                'email' => $business->email,
                'business_permit_number' => $business->business_permit_number,
                'permit_issue_date' => optional($business->permit_issue_date)->format('Y-m-d'),
                'permit_expiry_date' => optional($business->permit_expiry_date)->format('Y-m-d'),
                'business_status' => $business->business_status,
                'registration_year' => $business->registration_year,
                'resident_id' => $business->resident_id,
                'deleted_at' => $business->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        return Inertia::render('Admin/Trash/Businesses', [
            'title' => 'Deleted Businesses',
            'businesses' => $deletedBusinesses,
        ]);
    }
}


