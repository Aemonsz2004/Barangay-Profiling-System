<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEconomicActivitiesRequest;
use App\Models\Businesses;
use App\Models\EconomicActivity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class EconomicActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        //
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


    private function generateUniquePermitNumber()
{
    do {
        // Generate a random length between 9 and 12
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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEconomicActivitiesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(EconomicActivity $economicActivities)
    {
        //
    }

    /**
     * Display a listing of soft-deleted economic activities.
     */
    public function showDeleted()
    {
        $deletedEconomicActivities = EconomicActivity::onlyTrashed()->get()->map(function ($activity) {
            return [
                'id' => $activity->id,
                'business_name' => $activity->business_name,
                'business_type' => $activity->business_type,
                'owner_name' => $activity->owner_name,
                'address' => $activity->address,
                'contact_number' => $activity->contact_number,
                'email_address' => $activity->email_address,
                'business_permit' => $activity->business_permit,
                'number_of_employees' => $activity->number_of_employees,
                'gross_annual_income' => $activity->gross_annual_income,
                'date_established' => optional($activity->date_established)->format('Y-m-d'),
                'description' => $activity->description,
                'deleted_at' => $activity->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        return Inertia::render('Admin/Trash/EconomicActivities', [
            'title' => 'Deleted Economic Activities',
            'economic_activities' => $deletedEconomicActivities,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EconomicActivity $economicActivities)
    {
        //
        $economicActivities->delete();
        return redirect()->route('residents-and-households')->with('success', 'Resident deleted successfully!');
    }
}
