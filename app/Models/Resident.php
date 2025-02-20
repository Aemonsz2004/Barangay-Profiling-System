<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Resident extends Model
{
    use HasFactory;
    
    protected $fillable = [
        // "user_id",
        // 'status',

        'first_name', 'middle_name', 'last_name', 'suffix',
        'email_address',
        'birthdate', 'gender', 'civil_status', 'education_level',
        'occupation', 'contact_number', 'address', 'registration_year',
        'religion','philhealth_id','sss','pagibig_id', 'voter_status' , 'voter_id', 'household_id',
    ];

    protected $casts = [
        'birthdate' => 'date',
        'registration_year' => 'integer',
    ];

    public function getAgeAttribute() {
        return $this->birthdate ? Carbon::parse($this->birthdate)->age : null;
    }

    //taga isa ka user, naay isa ka resident
    public function user() {
        return $this->belongsTo(User::class);
    }
}
