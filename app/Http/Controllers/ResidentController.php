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
                'title' => $engagement->title,
                'activity_type' => $engagement->activity_type,
                'description' => $engagement->description,
                'event_date'    => $engagement->event_date ? Carbon::parse($engagement->event_date)->format('Y-m-d') : null,
                'time' => $engagement->time ? Carbon::parse($engagement->time)->format('g:i A') : null,
                'created_at' => $engagement->created_at,
                'updated_at' => $engagement->updated_at,
            ];
        });

        $calendarEvents = $communityEngagements->map(function ($engagement) {
            return [
                'id'    => $engagement['id'],
                'date'  => $engagement['event_date'], // expects a string like "YYYY-MM-DD"
                'title' => $engagement['title'],
                'time'  => $engagement['time'], // expects time in "H:i" format
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

            'employmentRateChange' => (function () use ($residents) {
                $years = $residents->pluck('registration_year')->unique()->sort()->values();
                if ($years->count() < 2) {
                    return 0;
                }
                $latestYear = $years->last();
                $previousYear = $years->slice(-2, 1)->first();
                $currentResidents = $residents->filter(fn($r) => $r['registration_year'] == $latestYear);
                $previousResidents = $residents->filter(fn($r) => $r['registration_year'] == $previousYear);
                $currentRate = $currentResidents->count() 
                    ? round((($currentResidents->count() - $currentResidents->where('occupation', 'Unemployed')->count()) / $currentResidents->count()) * 100, 1)
                    : 0;
                $previousRate = $previousResidents->count()
                    ? round((($previousResidents->count() - $previousResidents->where('occupation', 'Unemployed')->count()) / $previousResidents->count()) * 100, 1)
                    : 0;
                return $previousRate > 0 ? round((($currentRate - $previousRate) / $previousRate) * 100, 1) : 0;
            })(),
            
            'businesses' => $businesses,
            'getBusinessPopulationData' => $this->getBusinessPopulationData($businesses),
            
                
                'communityEngagements' => $communityEngagements,
                'calendarEvents' => $calendarEvents,
        ]);
    }


    // get data to all models and pass it to the AllData component
public function allData()
    {
        $communityEngagements = CommunityEngagement::all()->map(function ($engagement) {
            return [
            'id' => $engagement->id,
            'resident_id' => $engagement->resident_id,
            'title' => $engagement->title,
            'activity_type' => $engagement->activity_type,
            'description' => $engagement->description,
            'event_date' => $engagement->event_date ? Carbon::parse($engagement->event_date)->format('Y-m-d') : null,
            'time' => $engagement->time ? Carbon::parse($engagement->time)->format('g:i A') : null,
            'created_at' => $engagement->created_at,
            'updated_at' => $engagement->updated_at,
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
        return Inertia::render('Admin/ResidentHousehold/AllData', [
            'title' => 'All Data',
            'residents' => $residents,
            'businesses' => $businesses,
            'communityEngagements' => $communityEngagements,
            'social_services' => $social_services,
        ]);
    }

// pass data to the demographic profile
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
            'title' => 'Demographic Profile',
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

    // pass data to the economic activities
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
                'permit_issue_date' => $business->permit_issue_date,
                'permit_expiry_date' => $business->permit_expiry_date,
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
            
            'businessesData' => $this->getBusinessData($businesses),
            'businesses' => $businesses,
            'getBusinessPopulationData' => $this->getBusinessPopulationData($businesses),
        
        ]);
    }

    
    //pass data to social activities
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
        
        $serviceTypes = ['Healthcare', 'Education', 'Social Welfare'];

        $serviceTypeData = collect($serviceTypes)->map(function ($type) use ($social_services) {
            return [
            'name' => $type,
            'value' => $social_services->where('service_type', $type)->count(),
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
            'educationData' => $this->getEducationData($residents),
            'serviceTypeData' => $serviceTypeData,
            'socialServicesPopulationData' => $this->getSocialServicesPopulationData(),
        ]);
    }


    //function to get social services population data
    private function getSocialServicesPopulationData()
    {
        // Group social services by creation year
        return SocialService::selectRaw('YEAR(created_at) as year, COUNT(*) as count')
            ->groupBy('year')
            ->orderBy('year')
            ->get()
            ->map(function ($item) {
                return [
                    'year' => $item->year,
                    'population' => $item->count,
                    'growth' => $this->calculateSocialServicesGrowthRate($item->year),
                ];
            });
    }

    //function to calculate social services growth rate
    private function calculateSocialServicesGrowthRate($year)
    {
        $current = SocialService::whereYear('created_at', $year)->count();
        $previous = SocialService::whereYear('created_at', $year - 1)->count();
        
        return $previous > 0 ? round((($current - $previous) / $previous) * 100, 1) : 0;
    }





    // Business-related functions
    private function getBusinessData($businesses)
    {
        $businessTypes = ['Retail', 'Service', 'Manufacturing', 'Food', 'Technology'];
        
        return collect($businessTypes)->map(function ($type) use ($businesses) {
            return [
                'name'  => $type,
                'value' => $businesses->where('business_type', $type)->count(),
            ];
        });
    }

        // Business Population Data
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


        // Business Growth Rate
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


    // Get Growth Rate
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

        // Get Age Group
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

    // Get Age Groups Order
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

    //get employee data
    private function getEmployedData($residents)
    {
        $total = $residents->count();
        if ($total === 0) {
            return 0;
        }

        $unemployedCount = $residents->where('occupation', 'Unemployed')->count();
        return round((($total - $unemployedCount) / $total) * 100, 1);
    }

    //get overall growth rate
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

    public function destroy($id)
    {
        $resident = Resident::findOrFail($id);
        $resident->delete();
        return redirect()->route('resident')->with('success', 'Resident deleted successfully!');
    }

    public function restore($id)
    {
        $resident = Resident::withTrashed()->findOrFail($id);
        $resident->restore();
        return redirect()->route('deleted-datas')->with('success', 'Resident deleted successfully!');
    }

    /**
     * Display a listing of soft-deleted residents.
     */
    public function showDeleted()
    {
        $deletedResidents = Resident::onlyTrashed()->get()->map(function ($resident) {
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
                'deleted_at' => $resident->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        return Inertia::render('Admin/Trash/Residents', [
            'title' => 'Deleted Residents',
            'residents' => $deletedResidents,
        ]);
    }
}
