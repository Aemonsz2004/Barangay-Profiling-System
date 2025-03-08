<?php

use App\Http\Controllers\AddResidentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessesController;
use App\Http\Controllers\CommunityEngagementController;
use App\Http\Controllers\ResidentController;
use App\Http\Controllers\SocialServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




// login route register route
Route::get('/login', fn() => Inertia::render('Login/Login', ['title'=>'Login']))->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth'])->group(function () {

    ///////////////////////////////////////
    // ADMIN ROUTES
    Route::middleware(['role:admin'])->group(function () {
        // admin routes
        Route::get('/', [ResidentController::class, 'index'])->name('dashboard');
        Route::get('/demographic-profile', [ResidentController::class, 'DemographicProfile'])->name('demographic-profile');
        Route::get('/social-services', [ResidentController::class, 'SocialActivities'])->name('social-services');
        Route::get('/economic-activities', [ResidentController::class, 'EconomicActivities'])->name('economic-activities');
        Route::get('/community-engagement', fn() => Inertia::render('Admin/CommunityEngagement', ['title'=>'Community Engagement']))->name('community-engagement');



        //residents and household ( ADMIN )
        Route::prefix('residents-and-households')->group(function () {
            Route::get('/', fn() => Inertia::render('Admin/ResidentsAndHouseholds', ['title'=>'Residents and Households']))->name('residents-and-households');
            Route::get('/resident', [ResidentController::class, 'resident'])->name('resident');

            Route::get('/register-resident', fn()=> Inertia::render('Admin/ResidentHousehold/AddResident', ['title'=>'Add Resident']))->name('register-resident');
            Route::post('/register-resident', [AddResidentController::class,'addResident'])->name('add-resident');

            Route::get('/register-business', fn()=>Inertia::render('Admin/ResidentHousehold/AddBusiness',  ['title'=> 'Register Business']))->name('register-business');
            Route::post('/register-business', [BusinessesController::class, 'registerBusiness'])->name('register-business');
            
            Route::get('/add-social-service', [SocialServiceController::class, 'getSocialService'])->name('add-social-service');
            Route::post('/add-social-service', [SocialServiceController::class, 'addSocialService'])->name('add-social-service');

            Route::get('/community-engagement', fn() => Inertia::render('Admin/ResidentHousehold/AddEvent', ['title'=>'Add Event']))->name('add-event');
            Route::post('/community-engagement', [CommunityEngagementController::class, 'store'])->name('add-event');


            Route::get('/resident/{id}/edit', [ResidentController::class, 'edit'])->name('resident-edit');
            Route::patch('residents-and-households/{resident}/update-resident', [ResidentController::class,'updateResident'])->name('update-resident');
            Route::delete('/resident/{resident}', [ResidentController::class, 'destroy'])->name('delete-resident');

            Route::get('/edit-business/{id}', [BusinessesController::class, 'edit'])->name('edit-business');
            Route::patch('/edit-business/{id}', [BusinessesController::class, 'update'])->name('update-business');
            Route::delete('/business/{id}', [BusinessesController::class, 'destroy'])->name('delete-business');

            Route::get('/edit-social-service/{id}', [SocialServiceController::class, 'edit'])->name('edit-social-service');
            Route::patch('/edit-social-service/{id}', [SocialServiceController::class, 'update'])->name('update-social-service');
            Route::delete('/social-service/{id}', [SocialServiceController::class, 'destroy'])->name('delete-social-service');

            Route::get('/edit-community-engagement/{id}', [CommunityEngagementController::class, 'edit'])->name('edit-community-engagement');
            Route::patch('/edit-community-engagement/{id}', [CommunityEngagementController::class, 'update'])->name('update-community-engagement');
            Route::delete('/community-engagement/{id}', [CommunityEngagementController::class, 'destroy'])->name('delete-community-engagement');

        });

        Route::get('/residents-and-households/add-household', fn()=> Inertia::render('Admin/ResidentHousehold/AddHousehold', ['title'=>'Add Household']))->name('add-household');
        Route::get('/reports-and-downloads', fn() => Inertia::render('Admin/ReportsAndDownloads', ['title'=>'Reports and Downloads']))->name('reports-and-downloads');
    });
});


require __DIR__.'/auth.php';
