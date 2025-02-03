<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome');
// });

Route::inertia('/','Dashboard', ['name' => 'nigga'] );

Route::get('/login', function() {
    return Inertia::render('Login/Login');
});

require __DIR__.'/auth.php';
