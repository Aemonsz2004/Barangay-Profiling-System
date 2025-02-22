<?php

namespace App\Providers;

use App\Models\Resident;
use App\Policies\ResidentPolicy;
use Illuminate\Auth\Access\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    protected $policies = [
        Resident::class => ResidentPolicy::class,
    ];




    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {


        Vite::prefetch(concurrency: 3);


    }
}
