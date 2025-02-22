<?php

namespace Database\Factories;

use App\Models\Household;
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
        $suffix = ['Jr.','Sr.','II','III', 'N/A'];
        $religion = ['Roman Catholic', 'Iglesia ni Cristo', 'Muslim', 'Protestant', 'Buddhist', 'Others'];
        $voterStatus = ['Registered', 'Unregistered'];

        return [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->optional()->middleName->defaultValue('N/A'),
            'last_name' => $this->faker->lastName,
            'suffix' => $this->faker->randomElement($suffix),
            'email_address' => $this->faker->unique()->safeEmail,
            'birthdate' => $this->faker->dateTimeBetween('-81 years', '-18 years')->format('Y-m-d'),
            'gender' => $this->faker->randomElement($genders),
            'civil_status' => $this->faker->randomElement(['Single', 'Married', 'Divorced', 'Widowed']),
            'education_level' => $this->faker->randomElement($educationLevels),
            'occupation' => $this->faker->randomElement($occupations),
            'contact_number' => $this->faker->unique()->numerify('09#########'),
            'address' => $this->faker->address,
            'registration_year' => $this->faker->numberBetween(2000, date('Y')),

                // NEW FACTORY
            'religion' => $this->faker->randomElement($religion),
            'philhealth_id' => $this->faker->unique()->numerify('###########'),
            'sss'=> $this->faker->unique()->numerify('###########'),
            'pagibig_id' => $this->faker->unique()->numerify('###########'),
            'voter_status' => $this->faker->randomElement($voterStatus),
            'voter_id' => $voterStatus === 'Unregistered' ? null : $this->faker->unique()->numerify('###########'),
            // need voters id
            
            'household_id' => $this->faker->numberBetween(1, 1000),
        ];
    }
}

