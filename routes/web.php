<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', fn() => Inertia::render('Dashboard', ['title'=>'Home']))->name('dashboard');
Route::get('/demographic-profile', fn() => Inertia::render('DemographicProfile', ['title'=>'Demographic profile']))->name('demographic-profile');
Route::get('/social-services', fn() => Inertia::render('SocialServices', ['title'=>'Social services']))->name('social-services');
Route::get('/economic-activities', fn() => Inertia::render('EconomicActivities', ['title'=>'Economic activities']))->name('economic-activities');
Route::get('/community-engagement', fn() => Inertia::render('CommunityEngagement', ['title'=>'Community Engagement']))->name('community-engagement');
Route::get('/reports-and-downloads', fn() => Inertia::render('ReportsAndDownloads', ['title'=>'Reports and Downloads']))->name('reports-and-downloads');
Route::get('/settings', fn() => Inertia::render('Settings', ['title'=>'Settings']))->name('settings');
Route::get('/login', fn() => Inertia::render('Login/Login', ['title'=>'Login']))->name('login');




require __DIR__.'/auth.php';
