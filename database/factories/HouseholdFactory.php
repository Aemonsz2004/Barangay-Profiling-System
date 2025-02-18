<?php

namespace Database\Factories;

use App\Models\Household;
use Illuminate\Database\Eloquent\Factories\Factory;

class HouseholdFactory extends Factory
{
    protected $model = Household::class;

    public function definition()
    {
        return [
            'household_name' => $this->faker->lastName . ' Household',
        ];
    }
}
