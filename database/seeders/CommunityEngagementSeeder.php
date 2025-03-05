<?php

namespace Database\Seeders;

use App\Models\CommunityEngagement;
use Illuminate\Database\Seeder;

class CommunityEngagementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CommunityEngagement::factory()->count(100)->create();
    }
}
