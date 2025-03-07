<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CommunityEngagement>
 */
class CommunityEngagementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'resident_id'   => $this->faker->numberBetween(1, 1000),
            'activity_type' => $this->faker->randomElement(['Survey', 'Workshop', 'Meeting', 'Feedback', 'Volunteer']),
            'description'   => $this->faker->sentence,
            'event_date'    => $this->faker->dateTimeBetween('-1 year', 'now')->format('Y-m-d'),
        ];
    }
}
