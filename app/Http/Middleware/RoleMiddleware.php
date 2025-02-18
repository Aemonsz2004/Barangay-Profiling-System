<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, string $role): Response
    {
        $user = Auth::user();

        if (!Auth::check()) {
            return redirect('/login');
        }

        // If the user is not logged in or doesn't have the required role, return 403
        if (!$user || $user->role !== $role) {
            abort(403, 'Unauthorized');
        }

        return $next($request);
    }
}

