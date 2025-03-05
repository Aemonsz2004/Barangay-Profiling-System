<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PendingResidentFactory extends Factory
{
    public function definition(): array
    {
        $educationLevels = ['Primary', 'Lower_Secondary', 'Upper_Secondary', 'College', 'Vocational', 'No_Education'];
        $occupations = ['IT', 'Agriculture', 'Business', 'Government', 'Unemployed'];
        $genders = ['Male', 'Female', 'LGBTQ+'];
        $suffix = ['Jr.', 'Sr.', 'II', 'III', 'N/A'];
        $religions = ['Roman Catholic', 'Iglesia ni Cristo', 'Muslim', 'Buddhist', 'Others'];
        $voterStatuses = ['Registered', 'Unregistered'];

        return [
            'user_id' => $this->faker->numberBetween(1, 1000),
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->optional()->firstName,
            'last_name' => $this->faker->lastName,
            'suffix' => $this->faker->randomElement($suffix),
            'education_level' => $this->faker->randomElement($educationLevels),
            'gender' => $this->faker->randomElement($genders),
            'religion' => $this->faker->randomElement($religions),
            'voter_status' => $this->faker->randomElement($voterStatuses),
            'birthdate' => $this->faker->date(),
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'occupation' => $this->faker->randomElement($occupations),
            'contact_number' => $this->faker->phoneNumber,
            'email_address' => $this->faker->safeEmail,
            'address' => $this->faker->address,
            'household_id' => $this->faker->numberBetween(1, 100),
            'voter_id' => $this->faker->optional()->uuid,
            'sss' => $this->faker->optional()->uuid,
            'philhealth_id' => $this->faker->optional()->uuid,
            'pagibig_id' => $this->faker->optional()->uuid,
            'registration_year' => $this->faker->year,
            'status' => 'pending',
        ];
    }
}