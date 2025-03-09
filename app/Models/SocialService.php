<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SocialService extends Model
{
    /** @use HasFactory<\Database\Factories\SocialServicesFactory> */
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'service_type',
        'name',
        'description',
        'contact'
    ];
}
