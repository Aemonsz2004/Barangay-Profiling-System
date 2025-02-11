<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Person>
 */
class PersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $educationLevels = ['Primary','Lower_Secondary','Upper_Secondary','College','Vocational', 'No_Education'];
        $occupations = ['IT', 'Agriculture', 'Business', 'Government', 'Unemployed'];
        $genders = ['Male', 'Female', 'LGBTQ+'];
        return [
            //
            'birthdate' => $this->faker->dateTimeBetween('-81 years', '-18 years')->format('Y-m-d'),
            'gender' => $this->faker->randomElement($genders),
            'education_level' => $this->faker->randomElement($educationLevels),
            'occupation' => $this->faker->randomElement($occupations),
            'registration_year' => $this->faker->numberBetween(2000, date('Y')),

        ];
    }
}
