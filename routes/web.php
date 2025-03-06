<?php

use App\Http\Controllers\AddResidentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessesController;
use App\Http\Controllers\CommunityEngagementController;
use App\Http\Controllers\PendingResidentController;
use App\Http\Controllers\ResidentController;
use App\Http\Controllers\SocialServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




// use middlewares for universal data sharing






// login route register route
Route::get('/login', fn() => Inertia::render('Login/Login', ['title'=>'Login']))->name('login');
Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register']);
Route::get('/register', fn()=> Inertia::render('Login/Register', ['title'=>'Register']))->name('register');





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


        

        Route::get('/resident/{id}/edit', [ResidentController::class, 'edit'])->name('resident-edit');
        //residents and household ( ADMIN )
        
        Route::prefix('residents-and-households')->group(function () {
            Route::get('/', fn() => Inertia::render('Admin/ResidentsAndHouseholds', ['title'=>'Residents and Households']))->name('residents-and-households');
            Route::get('/pending-resident-approval', fn()=> Inertia::render('Admin/ResidentHousehold/PendingResident', ['title'=>'Pending Resident']))->name('pending-resident');
            Route::get('/resident', [ResidentController::class, 'resident'])->name('resident');
        });


        
        Route::patch('residents-and-households/{resident}/update-resident', [ResidentController::class,'updateResident'])->name('update-resident');

/////////////////////////////////////
        //add resident
        //edit
        //update
        Route::prefix('/residents-and-households')->group(function () {
            //fix this shit
            Route::get('/register-resident', fn()=> Inertia::render('Admin/ResidentHousehold/AddResident', ['title'=>'Add Resident']))->name('register-resident');
            Route::post('/register-resident', [AddResidentController::class,'addResident'])->name('add-resident');

            Route::get('/register-business', fn()=>Inertia::render('Admin/ResidentHousehold/AddBusiness',  ['title'=> 'Register Business']))->name('register-business');
            Route::post('/register-business', [BusinessesController::class, 'registerBusiness'])->name('register-business');
            
                    // NEW
            Route::get('/add-social-service', [SocialServiceController::class, 'getSocialService'])->name('add-social-service');
            Route::post('/add-social-service', [SocialServiceController::class, 'addSocialService'])->name('add-social-service');

            Route::get('/community-engagement', fn() => Inertia::render('Admin/ResidentHousehold/AddEvent', ['title'=>'Add Event']))->name('add-event');
            Route::post('/community-engagement', [CommunityEngagementController::class, 'store'])->name('add-event');

            // Add edit routes NEW
            Route::get('/edit-business/{id}', fn($id) => Inertia::render('Admin/BusinessEdit', ['id' => $id]))->name('edit-business');
            Route::get('/edit-social-service/{id}', fn($id) => Inertia::render('Admin/SocialServicesEdit', ['id' => $id]))->name('edit-social-service');
            Route::get('/edit-community-engagement/{id}', fn($id) => Inertia::render('Admin/ResidentHousehold/EditEvent', ['id' => $id]))->name('edit-community-engagement');
        });






//////////////////////////////////
    // pending resident approval
        Route::prefix('admin/pending-residents')->group(function () {
            Route::get('/', [PendingResidentController::class, 'index'])->name('admin.pending-residents');
            Route::post('{pendingResident}/approve', [PendingResidentController::class, 'approve'])->name('resident.approve');
            Route::post('{pendingResident}/reject', [PendingResidentController::class, 'reject'])->name('resident.reject');

            
        });







            Route::get('/residents-and-households/add-household', fn()=> Inertia::render('Admin/ResidentHousehold/AddHousehold', ['title'=>'Add Household']))->name('add-household');

            Route::get('/residents-and-households/pending-business-approval', fn()=> Inertia::render('Admin/ResidentHousehold/PendingBusiness', ['title'=>'Pending Business']))->name('pending-business');


        Route::get('/reports-and-downloads', fn() => Inertia::render('Admin/ReportsAndDownloads', ['title'=>'Reports and Downloads']))->name('reports-and-downloads');
        Route::get('/settings', fn() => Inertia::render('Admin/Settings', ['title'=>'Settings']))->name('settings');
    });




//////////////////////////////////
    //USER ROUTES

    Route::middleware([ 'role:user'])->group(function () {


        Route::get('/user-dashboard', fn()=> Inertia::render('User/UserDashboard', ['title'=> 'User Dashboard']))->name('user-dashboard');
        Route::get('/register-barangay-profile', fn() => Inertia::render('User/UserBarangayRegister', ['title'=> 'Register Barangay Profile']))->name('register-barangay-profile');
        Route::get('/user-profile', fn() => Inertia::render('User/UserProfile', ['title'=> 'User Profile']))->name('user-profile');
        Route::get('user-setting', fn()=> Inertia::render('User/UserSetting', ['title'=> 'User Setting']))->name('user-setting');

        Route::post('/register-barangay-profile', [PendingResidentController::class,'store'])->name('pending-resident.store');
        Route::get('/register-barangay-profile', [PendingResidentController::class, 'create'])->name('user-barangay-register');
        // i put this outside cuz its user cannot access this returns : 403 Unauthorized
    
    });
});









require __DIR__.'/auth.php';
