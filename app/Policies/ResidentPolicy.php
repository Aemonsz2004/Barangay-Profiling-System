<?php

namespace App\Policies;

use App\Models\Resident;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class ResidentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Resident $residents): bool
    {
        return false;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Resident $resident): bool
    {
        // Admins can update any resident
        if ($user->role === 'admin') {
            return true;
        }
    
        // Optional: Allow users to update their own records (if applicable)
        if ($user->id === $resident->user_id) {
            return true;
        }
    
        // Deny by default
        return false;
    }
    

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Resident $residents): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Resident $residents): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Resident $residents): bool
    {
        return false;
    }
}
