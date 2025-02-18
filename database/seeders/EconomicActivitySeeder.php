<?php

namespace Database\Seeders;

use Database\Factories\EconomicActivityFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EconomicActivitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        EconomicActivityFactory::factory()->count(200)->create();
    }
}
