<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingResident extends Model
{
    /** @use HasFactory<\Database\Factories\PendingResidentFactory> */
    use HasFactory;

    protected $fillable = [
    'first_name', 'middle_name', 'last_name', 'suffix', 'gender',
    'birthdate', 'civil_status', 'religion', 'education_level',
    'occupation', 'contact_number', 'email_address', 'address',
    'household_id', 'voter_id', 'voter_status', 'sss',
    'philhealth_id', 'pagibig_id', 'registration_year', 'status'
    ] ;
}
