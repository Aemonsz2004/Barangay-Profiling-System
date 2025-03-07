<?php

namespace Database\Seeders;

use App\Models\EconomicActivity;
use Illuminate\Database\Seeder;

class EconomicActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EconomicActivity::factory()->count(200)->create();
    }
}
