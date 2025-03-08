<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EconomicActivity extends Model
{
    /** @use HasFactory<\Database\Factories\EconomicActivityFactory> */
    use HasFactory;
    use SoftDeletes;
    
    protected $fillable = [
        'business_name', 
        'business_type', 
        'owner_name',
        'address',
        'contact_number',
        'email_address',
        'business_permit',
        'number_of_employees',
        'gross_annual_income',
        'date_established',
        'description'
    ];
}
