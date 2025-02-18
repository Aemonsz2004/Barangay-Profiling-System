<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EconomicActivity>
 */
class EconomicActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $gross_annual_income = ['0-100000', '100001-200000', '200001-300000', '300001-400000', '400001-500000', '500001-600000', '600001-700000', '700001-800000', '800001-900000', '900001-1000000'];
        $business_types = ['Sari-sari store', 'Internet cafe', 'Restaurant', 'Hardware store', 'Bakery', 'Salon', 'Barber shop', 'Tailoring shop', 'Laundry shop', 'Carpentry shop', 'Vulcanizing shop', 'Auto repair shop', 'Gasoline station', 'Pharmacy', 'Clinic', 'Hospital', 'School', 'Church', 'Others'];
        return [
            //
            // new 
            'business_id' => $this->faker->numberBetween(1, 1000),
            'business_name' => $this->faker->business_name,
            'business_type' => $this->faker->randomElement($business_types),
            'owner_name' => $this->faker->owner_name,
            'address' => $this->faker->address,
            'contact_number' => $this->faker->unique()->numerify('09#########'),
            'email_address' => $this->faker->unique()->email_address,
            'business_permit' => $this->faker->unique()->numerify('###########'),
            'number_of_employees' => $this->faker->numberBetween(1, 100),
            'gross_annual_income' => $this->faker->randomElement($gross_annual_income),
            'date_established' => $this->faker->dateTimeBetween('-50 years', 'now')->format('Y-m-d'),
            'description'=> $this->faker->description,
        ];
    }
}
