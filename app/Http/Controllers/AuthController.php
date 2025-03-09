<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{



    public function index()
    {
            return Inertia::render('Login/Login');
    }

    //LOGIN FUNCTION

    public function login(Request $request) {
        $credentials =  $request ->validate([
        'email'=> 'required|email',
        'password'=> 'required',
        ]);

        if(Auth::attempt($credentials)) {

            $user = Auth::user();

            if($user->role ==='admin') {
                return redirect('/');
            }
            return Inertia::render('Login/Login');
        }

        return back()->withErrors(['error' => 'Invalid login credentials']);

    }
}
