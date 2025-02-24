<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    //
    protected $fillable =[
        'business_name', 'industry_type', 'employee_count', 'established_date',
        'status'
    ];

}
