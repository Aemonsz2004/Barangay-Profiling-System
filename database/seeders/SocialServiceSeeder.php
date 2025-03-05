<?php

namespace Database\Seeders;

use App\Models\SocialService;
use Illuminate\Database\Seeder;

class SocialServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SocialService::factory()->count(100)->create();
    }
}
