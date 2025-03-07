<?php

namespace App\Http\Controllers;

use App\Models\Businesses;
use App\Models\CommunityEngagement;
use App\Models\SocialService;
use App\Models\Resident;
use App\Http\Requests\StoreResidentsRequest;
use App\Http\Requests\UpdateResidentsRequest;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ResidentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $communityEngagements = CommunityEngagement::all()->map(function ($engagement) {
            return [
                'id' => $engagement->id,
                'resident_id' => $engagement->resident_id,
                'activity_type' => $engagement->activity_type,
                'description' => $engagement->description,
                'event_date' => optional($engagement->event_date)->format('Y-m-d'),
            ];
        });


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

        $residents = Resident::all()->map(function ($resident) {
            return [
                'id' => $resident->id,
                'full_name' => trim("{$resident->first_name} {$resident->middle_name} {$resident->last_name} {$resident->suffix}"),
                'age' => Carbon::parse($resident->birthdate)->age,
                'birthdate' => optional($resident->birthdate)->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
                'registration_year' => $resident->registration_year,
            ];
        });



        return Inertia::render('Admin/Dashboard', [
            'residents' => $residents,

            'title' => 'Home',
            'populationData' => $this->getPopulationData($residents),
            'ageDistributionData' => $this->getAgeDistributionData($residents),
            'genderData' => $this->getGenderData($residents),
            'educationData' => $this->getEducationData($residents),
            'employmentData' => $this->getOccupationData($residents),
            'employmentRate' => $this->getEmployedData($residents),
            'overallGrowthRate' => $this->getOverallGrowthRate($residents),

            'businesses' => $businesses,
            'getBusinessPopulationData' => $this->getBusinessPopulationData($businesses),
            
                    // Pass community engagements here
                'communityEngagements' => $communityEngagements,
        ]);

    }



public function resident()
    {


        $residents = Resident::all()->map(function ($resident) {
            return [
                'id' => $resident->id,
                'full_name' => trim("{$resident->first_name} {$resident->middle_name} {$resident->last_name} {$resident->suffix}"),
                'age' => Carbon::parse($resident->birthdate)->age,
                'birthdate' => optional($resident->birthdate)->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
                'registration_year' => $resident->registration_year,
            ];
        });

        return Inertia::render('Admin/ResidentHousehold/Resident', [
            'residents' => $residents,
            'title' => 'Home',
            'populationData' => $this->getPopulationData($residents),
            'ageDistributionData' => $this->getAgeDistributionData($residents),
            'genderData' => $this->getGenderData($residents),
            'educationData' => $this->getEducationData($residents),
            'employmentData' => $this->getOccupationData($residents),
            'employmentRate' => $this->getEmployedData($residents),
            'overallGrowthRate' => $this->getOverallGrowthRate($residents),
        ]);

    }


    public function DemoGraphicProfile()
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

        $residents = Resident::all()->map(function ($resident) {
            return [
                'id' => $resident->id,
                'full_name' => trim("{$resident->first_name} {$resident->middle_name} {$resident->last_name} {$resident->suffix}"),
                'age' => Carbon::parse($resident->birthdate)->age,
                'birthdate' => optional($resident->birthdate)->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
                'registration_year' => $resident->registration_year,
            ];
        });

        return Inertia::render('Admin/DemographicProfile', [
            'residents' => $residents,
            'title' => 'Home',
            'populationData' => $this->getPopulationData($residents),
            'ageDistributionData' => $this->getAgeDistributionData($residents),
            'genderData' => $this->getGenderData($residents),
            'educationData' => $this->getEducationData($residents),
            'occupationData' => $this->getOccupationData($residents),
            'employmentRate' => $this->getEmployedData($residents),
            'overallGrowthRate' => $this->getOverallGrowthRate($residents),

            

            'businesses' => $businesses,
            'getBusinessPopulationData' => $this->getBusinessPopulationData($businesses),
        
        ]);

    }

    public function EconomicActivities()
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

        $residents = Resident::all()->map(function ($resident) {
            return [
                'id' => $resident->id,
                'full_name' => trim("{$resident->first_name} {$resident->middle_name} {$resident->last_name} {$resident->suffix}"),
                'age' => Carbon::parse($resident->birthdate)->age,
                'birthdate' => optional($resident->birthdate)->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
                'registration_year' => $resident->registration_year,
            ];
        });

        return Inertia::render('Admin/EconomicActivities', [
            'residents' => $residents,
            'title' => 'Economic Activities',
            'populationData' => $this->getPopulationData($residents),
            'ageDistributionData' => $this->getAgeDistributionData($residents),
            'genderData' => $this->getGenderData($residents),
            'educationData' => $this->getEducationData($residents),
            'occupationData' => $this->getOccupationData($residents),
            'employmentRate' => $this->getEmployedData($residents),
            'overallGrowthRate' => $this->getOverallGrowthRate($residents),
            
            'businesses' => $businesses,
            'getBusinessPopulationData' => $this->getBusinessPopulationData($businesses),
        
        ]);
    }

    public function SocialActivities()
    {

        $social_services = SocialService::all()->map(function ($social_service) {
            return [
                'id' => $social_service->id,
                'service_type' => $social_service->service_type,
                'name' => $social_service->name,
                'description' => $social_service->description,
                'contact' => $social_service->contact,
            ];
        });

        $residents = Resident::all()->map(function ($resident) {
            return [
                'id' => $resident->id,
                'full_name' => trim("{$resident->first_name} {$resident->middle_name} {$resident->last_name} {$resident->suffix}"),
                'age' => Carbon::parse($resident->birthdate)->age,
                'birthdate' => optional($resident->birthdate)->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
                'registration_year' => $resident->registration_year,
            ];
        });

        return Inertia::render('Admin/SocialServices', [
            'residents' => $residents,
            'social_services' => $social_services,
            'title' => 'Social Services',
            'populationData' => $this->getPopulationData($residents),
            'ageDistributionData' => $this->getAgeDistributionData($residents),
            'genderData' => $this->getGenderData($residents),
            'educationData' => $this->getEducationData($residents),
            'occupationData' => $this->getOccupationData($residents),
            'employmentRate' => $this->getEmployedData($residents),
            'overallGrowthRate' => $this->getOverallGrowthRate($residents),
            
        ]);
    }

    private function getBusinessPopulationData($businesses)
    {
        return $businesses->groupBy(function ($item) {
            return Carbon::parse($item['registration_year'])->year;
        })
        ->map(function ($group, $year) {
            return [
                'year' => $year,
                'population' => $group->count(),
                'growth' => $this->calculateBusinessGrowthRate($year),
            ];
        })
        ->sortBy('year')
        ->values();
    }

    private function calculateBusinessGrowthRate($year)
    {
        $current = Businesses::whereYear('registration_year', $year)->count();
        $previous = Businesses::whereYear('registration_year', $year - 1)->count();

        return $previous > 0 ? round((($current - $previous) / $previous) * 100, 1) : 0;
    }


    // Population-related functions
    private function getPopulationData($residents)
    {
        return $residents->groupBy('registration_year')
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
        $current = Resident::whereYear('registration_year', $year)->count();
        $previous = Resident::whereYear('registration_year', $year - 1)->count();

        return $previous > 0 ? round((($current - $previous) / $previous) * 100, 1) : 0;
    }

    // Age Distribution
    private function getAgeDistributionData($residents)
    {
        return $residents->mapToGroups(function ($resident) {
            $age = Carbon::parse($resident['birthdate'])->age;
            return [$this->getAgeGroup($age) => 1];
        })
            ->mapWithKeys(fn ($group, $ageGroup) => [$ageGroup => $group->count()])
            ->sortBy(fn ($count, $ageGroup) => array_search($ageGroup, $this->getAgeGroupsOrder()))
            ->map(fn ($count, $ageGroup) => ['category' => $ageGroup, 'population' => $count])
            ->values();
    }

    private function getAgeGroup($age)
    {
        return match (true) {
            $age < 1 => 'Under 1',
            $age <= 4 => '1 to 4',
            $age <= 9 => '5 to 9',
            $age <= 14 => '10 to 14',
            $age <= 19 => '15 to 19',
            $age <= 24 => '20 to 24',
            $age <= 29 => '25 to 29',
            $age <= 34 => '30 to 34',
            $age <= 39 => '35 to 39',
            $age <= 44 => '40 to 44',
            $age <= 49 => '45 to 49',
            $age <= 54 => '50 to 54',
            $age <= 59 => '55 to 59',
            $age <= 64 => '60 to 64',
            $age <= 69 => '65 to 69',
            $age <= 74 => '70 to 74',
            $age <= 79 => '75 to 79',
            default => '80 and over',
        };
    }

    private function getAgeGroupsOrder()
    {
        return [
            'Under 1', '1 to 4', '5 to 9', '10 to 14',
            '15 to 19', '20 to 24', '25 to 29', '30 to 34',
            '35 to 39', '40 to 44', '45 to 49', '50 to 54',
            '55 to 59', '60 to 64', '65 to 69', '70 to 74',
            '75 to 79', '80 and over',
        ];
    }

    // Gender Data
    private function getGenderData($residents)
    {
        return [[
            'category' => 'Gender Ratio',
            'Male' => $residents->where('gender', 'Male')->count(),
            'Female' => $residents->where('gender', 'Female')->count(),
            'LGBTQ+' => $residents->where('gender', 'LGBTQ+')->count(),
        ]];
    }

    // Education Data
    private function getEducationData($residents)
    {
        $educationLevels = ['Primary', 'Lower Secondary', 'Upper Secondary', 'College', 'Vocational', 'No Education'];

        return collect($educationLevels)->map(fn ($level) => [
            'name' => $level,
            'value' => $residents->where('education_level', str_replace(' ', '_', $level))->count(),
        ]);
    }

    // Occupation Data
    private function getOccupationData($residents)
    {
        $occupations = ['IT', 'Agriculture', 'Business', 'Government', 'Unemployed'];
    
        return collect($occupations)->map(function ($occupation) use ($residents) {
            return [
                'name'  => $occupation,
                'value' => $residents->where('occupation', $occupation)->count(),
            ];
        });
    }

    private function getEmployedData($residents)
    {
        $total = $residents->count();
        if ($total === 0) {
            return 0;
        }

        $unemployedCount = $residents->where('occupation', 'Unemployed')->count();
        return round((($total - $unemployedCount) / $total) * 100, 1);
    }

    private function getOverallGrowthRate($residents)
    {
        $years = $residents->pluck('registration_year')->unique()->sort()->values();
        if ($years->count() < 2) {
            return 0;
        }

        $latestYear = $years->last();
        $previousYear = $years->slice(-2, 1)->first();

        $currentCount = Resident::where('registration_year', $latestYear)->count();
        $previousCount = Resident::where('registration_year', $previousYear)->count();

        return $previousCount > 0 ? round((($currentCount - $previousCount) / $previousCount) * 100, 1) : 0;
    }







    // EDIT FUNCTION

    public function edit($id)
    {
        $resident = Resident::findOrFail($id);
        return Inertia::render('Admin/EditResident', [
            'title' => 'Edit Resident',
            'resident' => $resident,
        ]);
    }







    // STORE DATA FUNCTION

    public function store(StoreResidentsRequest $request)
    {
        Resident::create($request->validated());
    }



        /////////////////////////////////////////////////////////
                // UPDATE FUNCTION

    public function updateResident(UpdateResidentsRequest $request, Resident $resident)
    {
        // Validate request (already handled by Form Request)
        $validated = $request->validated();

        // Update resident
        $resident->update($validated);

        // Redirect to a proper route with success message
        return redirect()->route('resident')->with('success', 'Resident updated successfully.');
    }




        /////////////////////////////////////////////////////////
                // DESTROY FUNCTION

    public function destroy(Resident $resident)
    {
        $resident->delete();
        return redirect()->route('Admin.Residents')->with('success', 'Resident deleted successfully!');
    }
}
