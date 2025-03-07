<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityEngagement extends Model
{
    /** @use HasFactory<\Database\Factories\CommunityEngagementFactory> */
    use HasFactory;

    protected $fillable = [
        'resident_id',
        'activity_type',
        'description',
        'event_date'
    ];
}
