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
}
