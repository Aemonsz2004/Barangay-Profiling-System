<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ResidentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




// use middlewares for universal data sharing




// login route register route
Route::get('/login', fn() => Inertia::render('Login/Login', ['title'=>'Login']))->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register']);
Route::get('/register', fn()=> Inertia::render('Login/Register', ['title'=>'Register']))->name('register');







Route::middleware(['auth', 'role:admin'])->group(function () {
    // admin routes
    Route::get('/', [ResidentController::class, 'index'])->name('dashboard');
    Route::get('/demographic-profile', fn() => Inertia::render('Admin/DemographicProfile',  ['title'=>'Demographic profile']))->name('demographic-profile');
    Route::get('/social-services', fn() => Inertia::render('Admin/SocialServices', ['title'=>'Social services']))->name('social-services');
    Route::get('/economic-activities', fn() => Inertia::render('Admin/EconomicActivities', ['title'=>'Economic activities']))->name('economic-activities');
    Route::get('/community-engagement', fn() => Inertia::render('Admin/CommunityEngagement', ['title'=>'Community Engagement']))->name('community-engagement');


    //residents and household ( ADMIN )
    Route::get('/residents-and-households', fn() => Inertia::render('Admin/ResidentsAndHouseholds', ['title'=>'Residents and Households']))->name('residents-and-households');
        Route::get('/resident/{id}/edit', [ResidentController::class, 'edit'])->name('resident.edit');
        
        Route::get('/residents-and-households/resident', fn()=> Inertia::render('Admin/ResidentHousehold/Resident', ['title'=>'Residents']))->name('resident');
        Route::get('/residents-and-households/add-resident', fn()=> Inertia::render('Admin/ResidentHousehold/AddResident', ['title'=>'Add Resident']))->name('add-resident');
        Route::get('/residents-and-households/add-household', fn()=> Inertia::render('Admin/ResidentHousehold/AddHousehold', ['title'=>'Add Household']))->name('add-household');
        Route::get('/residents-and-households/pending-resident-approval', fn()=> Inertia::render('Admin/ResidentHousehold/PendingResident', ['title'=>'Pending Resident']))->name('pending-resident');
        Route::get('/residents-and-households/pending-business-approval', fn()=> Inertia::render('Admin/ResidentHousehold/PendingBusiness', ['title'=>'Pending Business']))->name('pending-business');


    Route::get('/reports-and-downloads', fn() => Inertia::render('Admin/ReportsAndDownloads', ['title'=>'Reports and Downloads']))->name('reports-and-downloads');
    Route::get('/settings', fn() => Inertia::render('Admin/Settings', ['title'=>'Settings']))->name('settings');
});





//USER ROUTES

Route::middleware(['auth', 'role:user'])->group(function () {

    Route::get('/user-dashboard', fn()=> Inertia::render('User/UserDashboard', ['title'=> 'User Dashboard']))->name('user-dashboard');
    Route::get('user-profile', fn()=> Inertia::render('User/UserProfile', ['title'=> 'User Profile']))->name('user-profile');
    Route::get('user-setting', fn()=> Inertia::render('User/UserSetting', ['title'=> 'User Setting']))->name('user-setting');


});







require __DIR__.'/auth.php';
