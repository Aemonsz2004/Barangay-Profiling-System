<?php

namespace Database\Seeders;

use App\Models\PendingResident;
use Illuminate\Database\Seeder;

class PendingResidentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PendingResident::factory()->count(100)->create();
    }
}
