<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SocialService>
 */
class SocialServicesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'service_type' => $this->faker->randomElement(['Healthcare', 'Education', 'Social Welfare']),
            'name' => $this->faker->company,
            'description' => $this->faker->paragraph,
            'contact' => $this->faker->phoneNumber,
        ];
    }
}
