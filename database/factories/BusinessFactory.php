<?php

namespace Database\Factories;

use App\Models\Businesses;
use Illuminate\Database\Eloquent\Factories\Factory;

class BusinessFactory extends Factory
{
    protected $model = Businesses::class;

    public function definition(): array
    {
        return [
            'business_name' => $this->faker->company,
            'business_address' => $this->faker->address,
            'business_type' => $this->faker->randomElement(['Retail', 'Service', 'Manufacturing']),
            'owner_name' => $this->faker->name,
            'contact_number' => $this->faker->phoneNumber,
            'email' => $this->faker->email,
            'business_permit_number' => $this->faker->numerify('BP-#####'),
            'permit_issue_date' => $this->faker->date,
            'permit_expiry_date' => $this->faker->date,
            'business_status' => $this->faker->randomElement(['Active', 'Inactive', 'Pending']),
            'registration_year' => $this->faker->year,
            'resident_id' => null,
        ];
    }
}
