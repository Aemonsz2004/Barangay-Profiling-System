<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Businesses extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'business_name', 'business_address', 'business_type', 'owner_name',
        'contact_number', 'email', 'business_permit_number', 'permit_issue_date',
        'permit_expiry_date', 'business_status', 'registration_year', 'resident_id'
    ];

    protected $dates = ['deleted_at'];
}
