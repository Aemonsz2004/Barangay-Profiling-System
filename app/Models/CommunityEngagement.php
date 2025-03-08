<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CommunityEngagement extends Model
{
    /** @use HasFactory<\Database\Factories\CommunityEngagementFactory> */
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];
    
    protected $fillable = [
        'resident_id',
        'title',
        'activity_type',
        'description',
        'event_date',
        'time'
    ];

    protected $casts = [
        'event_date' => 'date:Y-m-d',
        'time'       => 'datetime:H:i', // if it's a datetime; if it's just a time string, you might need a custom accessor
    ];
}
