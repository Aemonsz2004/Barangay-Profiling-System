<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    /** @use HasFactory<\Database\Factories\HouseholdFactory> */
    use HasFactory;

    protected $fillable = ['household_name'];

    public function residents() {
        return $this->hasMany(Resident::class);
    }
}
