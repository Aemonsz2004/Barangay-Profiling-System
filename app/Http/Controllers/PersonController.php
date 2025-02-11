<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $people = Person::all();
        

        //  $person = Person::first();
        //  dd(now()->diffInYears($person->birthdate));

        // dd(
        //     $people->mapToGroups(function ($person) {
        //         $age = now()->diffInYears($person->birthdate);
        //         return [ $this->getAgeGroup($age) => 1 ];
        //     })->toArray()
        // );

        // dd($this->getAgeDistributionData($people));
        // dd($people);
        
        return Inertia::render('Dashboard', [
            'title' => 'Home',
            'residents' => $people,
            'populationData' => $this->getPopulationData($people),
            'ageDistributionData' => $this->getAgeDistributionData($people),
            'genderData' => $this->getGenderData($people),
            'educationData' => $this->getEducationData($people),
            'employmentData' => $this->getOccupationData($people),
            'employmentRate' => $this->getEmployedData($people),
            'overallGrowthRate' => $this->getOverallGrowthRate($people),
        ]);
    }

                    // for population functions
    private function getPopulationData($people) {
        return $people->groupBy('registration_year')
            ->map(function ($group, $year) {
                return [
                    'year'=>$year,
                    'population' => $group->count(),
                    'growth' => $this->calculateGrowthRate($year)
                ];
            })
            ->sortBy('year')
            ->values();
    }
    private function calculateGrowthRate($year) {
        $current = Person::whereYear('registration_year', $year)->count();
        $previous = Person::whereYear('registration_year',$year - 1)->count();

        return $previous > 0 ? round((($current - $previous) / $previous) * 100, 1) : 0;
    }

    




                    // for age functions
    private function getAgeDistributionData($people) {
    return $people->mapToGroups(function ($person) {

    $age = $person->birthdate->diffInYears(now());
    return [$this->getAgeGroup($age) => 1];
        })
            ->mapWithKeys(function ($group, $ageGroup) {
                return [$ageGroup => $group->count()];
                })
                ->sortKeysUsing(function ($a, $b) {
                    $order = [
                        'Under 1', '1 to 4', '5 to 9', '10 to 14',
                        '15 to 19', '20 to 24', '25 to 29', '30 to 34',
                        '35 to 39', '40 to 44', '45 to 49', '50 to 54',
                        '55 to 59', '60 to 64', '65 to 69', '70 to 74',
                        '75 to 79', '80 and over'
                    ];
                    return array_search($a, $order) - array_search($b, $order);
                    })
                ->map(function ($count, $ageGroup) {
                    return [
                    'category' => $ageGroup,
                    'population' => $count
            ];
        })
        ->values();
    }
    // age helper
    private function getAgeGroup($age) {
        return match(true) {
            $age < 1 => 'Under 1',
            $age <= 4 => '1 to 4', // Simplified range check
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
            $age >= 80 => '80 and over',
            default => 'Unknown'
        };
    }


                // get gender data
private function getGenderData($people) {
    return [
        [
            'category' => 'Gender Ratio',
            'Male'     => $people->where('gender', 'Male')->count(),
            'Female'   => $people->where('gender', 'Female')->count(),
            'LGBTQ+'   => $people->where('gender', 'LGBTQ+')->count(),
        ]
    ];
}






    private function getEducationData($people) {
        return [
            [
                'name'  => 'Primary',
                'value' => $people->where('education_level', 'Primary')->count(),
            ],
            [
                'name'  => 'Lower Secondary',
                'value' => $people->where('education_level', 'Lower_Secondary')->count(),
            ],
            [
                'name'  => 'Upper Secondary',
                'value' => $people->where('education_level', 'Upper_Secondary')->count(),
            ],
            [
                'name'  => 'College',
                'value' => $people->where('education_level', 'College')->count(),
            ],
            [
                'name'  => 'Vocational',
                'value' => $people->where('education_level', 'Vocational')->count(),
            ],
            [
                'name'  => 'No Education',
                'value' => $people->where('education_level', 'No_Education')->count(),
            ],
        ];
    }





    private function getOccupationData($people)
    {
        return $people->groupBy('occupation')
            ->map(fn ($group, $occupation) => [
                'occupation' => $occupation,
                'count' => $group->count(),
                'percentage' => round(($group->count() / $people->count()) * 100, 2)
            ])->values();
    }
    private function getEmployedData($people) {
        $total = $people->count();
        if($total === 0) {
            return 0;
        }

        $unemployedCount = $people->where('occupation', 'Unemployed')->count();
        $employedCount = $total - $unemployedCount;
        $rate = round(($employedCount / $total) * 100, 1);
        return $rate;
    }






    private function getOverallGrowthRate ($people) {
        $years = $people->pluck('registration_year')->unique()->sort()->values();
        $numYears = $years->count();
        if($numYears < 2) {
            return 0;
        }

        $latestYear = $years[$numYears - 1 ];
        $previousYear = $years[$numYears - 2];

        $currentCount = Person::where('registration_year', $latestYear)->count();
        $previousCount = Person::where('registration_year', $previousYear)->count();

        return $previousCount > 0 ? round((($currentCount - $previousCount) / $previousCount) * 100, 1) : 0;
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Person $person)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Person $person)
    {
        //
    }
}
