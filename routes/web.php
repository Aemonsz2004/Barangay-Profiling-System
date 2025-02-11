<?php

use App\Http\Controllers\PersonController;
use App\Http\Controllers\ResidentController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', [ResidentController::class, 'index'])->name('dashboard');
Route::get('/demographic-profile', fn() => Inertia::render('DemographicProfile',  ['title'=>'Demographic profile']))->name('demographic-profile');
Route::get('/social-services', fn() => Inertia::render('SocialServices', ['title'=>'Social services']))->name('social-services');
Route::get('/economic-activities', fn() => Inertia::render('EconomicActivities', ['title'=>'Economic activities']))->name('economic-activities');
Route::get('/community-engagement', fn() => Inertia::render('CommunityEngagement', ['title'=>'Community Engagement']))->name('community-engagement');


Route::get('/residents-and-households', fn() => Inertia::render('ResidentsAndHouseholds', ['title'=>'Residents and Households']))->name('residents-and-households');
Route::get('/resident/{id}/edit', [ResidentController::class, 'edit'])->name('resident.edit');



Route::get('/reports-and-downloads', fn() => Inertia::render('ReportsAndDownloads', ['title'=>'Reports and Downloads']))->name('reports-and-downloads');
Route::get('/settings', fn() => Inertia::render('Settings', ['title'=>'Settings']))->name('settings');
Route::get('/login', fn() => Inertia::render('Login/Login', ['title'=>'Login']))->name('login');




require __DIR__.'/auth.php';
