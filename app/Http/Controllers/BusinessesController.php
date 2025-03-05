<?php

namespace App\Http\Controllers;

use App\Models\Businesses;
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
}
