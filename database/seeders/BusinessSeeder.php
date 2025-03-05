<?php

namespace Database\Seeders;

use App\Models\Businesses;
use Illuminate\Database\Seeder;

class BusinessSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Businesses::factory()->count(50)->create();
    }
}
