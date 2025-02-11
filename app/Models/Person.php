<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    /** @use HasFactory<\Database\Factories\PersonFactory> */
    use HasFactory;

    protected $fillable = [
        'birthdate',
        'registration_year',
        'education_level',
        'occupation',
        'gender',
    ];
    
    protected $casts = [
        'birthdate' => 'date',
        'registration_year' => 'integer',
    ];
}
