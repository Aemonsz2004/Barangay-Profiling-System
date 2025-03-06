<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialService extends Model
{
    /** @use HasFactory<\Database\Factories\SocialServicesFactory> */
    use HasFactory;

    protected $fillable = [
        'service_type',
        'name',
        'description',
        'contact'
    ];

    
}
