<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome');
// });

Route::inertia('/','Dashboard', ['name' => 'nigga'] );

Route::get('/login', function() {
    return Inertia::render('Login/Login');
})->name('login');

Route::post('/logout', function () {
    Auth::logout();
    return redirect()->route('login'); // This ensures the redirection happens correctly.
});



require __DIR__.'/auth.php';
