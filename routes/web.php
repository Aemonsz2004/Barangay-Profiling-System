<?php

use App\Http\Controllers\AddResidentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessesController;
use App\Http\Controllers\CommunityEngagementController;
use App\Http\Controllers\ResidentController;
use App\Http\Controllers\SocialServiceController;
use App\Http\Controllers\EconomicActivityController;
use App\Http\Controllers\TrashController;
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
            Route::get('/resident', [ResidentController::class, 'allData'])->name('resident');

            Route::get('/register-resident', fn()=> Inertia::render('Admin/ResidentHousehold/AddResident', ['title'=>'Add Resident']))->name('register-resident');
            Route::post('/register-resident', [AddResidentController::class,'addResident'])->name('add-resident');

            Route::get('/register-business', fn()=>Inertia::render('Admin/ResidentHousehold/AddBusiness',  ['title'=> 'Register Business']))->name('register-business');
            Route::post('/register-business', [BusinessesController::class, 'registerBusiness'])->name('register-business');
            
            Route::get('/add-social-service', [SocialServiceController::class, 'getSocialService'])->name('add-social-service');
            Route::post('/add-social-service', [SocialServiceController::class, 'addSocialService'])->name('add-social-service');

            Route::get('/community-engagement', fn() => Inertia::render('Admin/ResidentHousehold/AddEvent', ['title'=>'Add Event']))->name('add-event');
            Route::post('/community-engagement', [CommunityEngagementController::class, 'store'])->name('add-event');

            Route::get('/edit-resident/{id}', [ResidentController::class, 'edit'])->name('edit-resident');
            Route::patch('update-resident/{resident}', [ResidentController::class,'updateResident'])->name('update-resident');
            Route::delete('/resident/{resident}', [ResidentController::class, 'destroy'])->name('delete-resident');
            Route::post('/restore-resident/{id}', [ResidentController::class, 'restore'])->name('restore-resident');

            Route::get('/edit-business/{id}', [BusinessesController::class, 'edit'])->name('edit-business');
            Route::patch('/update-business/{id}', [BusinessesController::class, 'update'])->name('update-business');
            Route::delete('/delete-business/{id}', [BusinessesController::class, 'destroy'])->name('delete-business');
            Route::post('/restore-business/{id}', [BusinessesController::class, 'restore'])->name('restore-business');

            Route::get('/edit-social-service/{id}', [SocialServiceController::class, 'edit'])->name('edit-social-service');
            Route::patch('/update-social-service/{id}', [SocialServiceController::class, 'update'])->name('update-social-service');
            Route::delete('/delete-social-service/{id}', [SocialServiceController::class, 'destroy'])->name('delete-social-service');
            Route::post('/restore-social-service/{id}', [SocialServiceController::class, 'restore'])->name('restore-social-service');

            Route::get('/edit-community-engagement/{id}', [CommunityEngagementController::class, 'edit'])->name('edit-community-engagement');
            Route::patch('/update-community-engagement/{id}', [CommunityEngagementController::class, 'update'])->name('update-community-engagement');
            Route::delete('/delete-community-engagement/{id}', [CommunityEngagementController::class, 'destroy'])->name('delete-community-engagement');
            Route::post('/restore-community-engagement/{id}', [CommunityEngagementController::class, 'restore'])->name('restore-community-engagement');
            
            // Add a route to get all trashed data
            Route::get('/deleted-datas', [TrashController::class, 'showTrashedItems'])->name('deleted-datas');
        });

        Route::get('/residents-and-households/add-household', fn()=> Inertia::render('Admin/ResidentHousehold/AddHousehold', ['title'=>'Add Household']))->name('add-household');
        Route::get('/reports-and-downloads', fn() => Inertia::render('Admin/ReportsAndDownloads', ['title'=>'Reports and Downloads']))->name('reports-and-downloads');

    });
});


require __DIR__.'/auth.php';
