<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EconomicActivity extends Model
{
    /** @use HasFactory<\Database\Factories\EconomicActivitiesFactory> */
    use HasFactory;
    protected $fillable = [
        'business_name', 'industry_type', 'num_employees', 'established_date'
    ];
}
