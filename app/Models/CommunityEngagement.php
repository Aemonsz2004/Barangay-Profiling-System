<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityEngagement extends Model
{
    /** @use HasFactory<\Database\Factories\CommunityEngagementFactory> */
    use HasFactory;

    protected $fillable = [
        'event_name', 'description', 'event_date', 'participation_level'
    ];
}
