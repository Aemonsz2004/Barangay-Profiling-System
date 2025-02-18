<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{




    //REGISTER FUNCTION

    public function register(Request $request) {
        $request ->validate([
            'name'=> 'required|string|max:255',
            "email"=> "required|email|unique:users",
            "password"=> 'required|string|min:6',
        ]);

        User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
        ]);
        return redirect('/login')->with('success','Registration successful! Please log in.');
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
            return redirect('user-dashboard');
        }

        return back()->withErrors('error','Inavlid login credentials');
    }
}
