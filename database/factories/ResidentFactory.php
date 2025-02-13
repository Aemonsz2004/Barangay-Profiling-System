<?php

namespace Database\Factories;

use App\Models\Resident; // Make sure this matches
use Illuminate\Database\Eloquent\Factories\Factory;

class ResidentFactory extends Factory
{
    protected $model = Resident::class; // Ensure this is correct

    public function definition()
    {

        $educationLevels = ['Primary','Lower_Secondary','Upper_Secondary','College','Vocational', 'No_Education'];
        $occupations = ['IT', 'Agriculture', 'Business', 'Government', 'Unemployed'];
        $genders = ['Male', 'Female', 'LGBTQ+'];
        $suffix = ['Jr.','Sr.','II','III', null];

        return [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->optional()->firstName,
            'last_name' => $this->faker->lastName,
            'suffix' => $this->faker->randomElement($suffix),
            'birthdate' => $this->faker->dateTimeBetween('-81 years', '-18 years')->format('Y-m-d'),
            'gender' => $this->faker->randomElement($genders),
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'education_level' => $this->faker->randomElement($educationLevels),
            'occupation' => $this->faker->randomElement($occupations),
            'contact_number' => $this->faker->unique()->numerify('09#########'),
            'address' => $this->faker->address,
            'registration_year' => $this->faker->numberBetween(2000, date('Y')),
        ];
    }
}
