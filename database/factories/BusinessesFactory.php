<?php

namespace Database\Factories;

use App\Models\Businesses;
use Illuminate\Database\Eloquent\Factories\Factory;

class BusinessesFactory extends Factory
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
            'email' => $this->faker->safeEmail,
            'business_permit_number' => $this->faker->uuid,
            'permit_issue_date' => $issue_date = $this->faker->date('Y-m-d'),
            'permit_expiry_date' => (new \DateTime($issue_date))->modify('+1 year')->format('Y-m-d'),
            'business_status' => $this->faker->randomElement(['Active', 'Inactive']),
            'registration_year' => $this->faker->year,
            'resident_id' => $this->faker->numberBetween(1, 100),
        ];
    }
}
