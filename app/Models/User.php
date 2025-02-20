<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];

    // ✅ One-to-One Relationship: A User has one Resident profile

    public function pendingResident()
    {
        return $this->hasOne(PendingResident::class);
    }
        public function resident()
    {
        return $this->hasOne(Resident::class);
    }
}
