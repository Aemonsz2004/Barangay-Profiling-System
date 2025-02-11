<?php

namespace Database\Factories;

use App\Models\Resident; // Make sure this matches
use Illuminate\Database\Eloquent\Factories\Factory;

class ResidentFactory extends Factory
{
    protected $model = Resident::class; // Ensure this is correct

    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->optional()->firstName,
            'last_name' => $this->faker->lastName,
            'suffix' => $this->faker->optional()->suffix,
            'birthdate' => $this->faker->date('Y-m-d', now()->subYears(30)),
            'gender' => $this->faker->randomElement(['Male', 'Female']),
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'education_level' => $this->faker->randomElement(['Primary', 'Secondary', 'Tertiary']),
            'occupation' => $this->faker->jobTitle,
            'contact_number' => $this->faker->unique()->numerify('09#########'),
            'address' => $this->faker->address,
        ];
    }
}
