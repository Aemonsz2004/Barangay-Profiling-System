<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Resident extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'first_name', 'middle_name', 'last_name', 'suffix',
        'birthdate', 'gender', 'civil_status', 'education_level',
        'occupation', 'contact_number', 'address',
    ];

    protected $casts = [
        'birthdate' => 'date',
    ];

    public function getAgeAttribute() {
        return $this->birthdate ? Carbon::parse($this->birthdate)->age : null;
    }
}
