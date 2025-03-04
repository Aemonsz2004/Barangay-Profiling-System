<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business as BusinessModel;
use Inertia\Inertia;
use Carbon\Carbon;

class Business extends Controller
{
    public function index(){
        // Get all businesses with pagination
        $allBusinesses = BusinessModel::latest()->paginate(10);
        
        // Get business counts by industry
        $businesses = BusinessModel::selectRaw('industry, COUNT(*) as count')->groupBy('industry')->get();
        
        // Get current year and last year
        $currentYear = Carbon::now()->year;
        $lastYear = $currentYear - 1;
        
        // Count businesses registered this year
        $currentYearCount = BusinessModel::whereYear('created_at', $currentYear)->count();
        
        // Count businesses registered last year
        $lastYearCount = BusinessModel::whereYear('created_at', $lastYear)->count();
        
        // Calculate percentage change
        $percentageChange = $lastYearCount > 0 
            ? round((($currentYearCount - $lastYearCount) / $lastYearCount) * 100, 2) 
            : 0;

        return Inertia::render('Admin/Dashboard', [
            'businessStats' => $businesses,
            'allBusinesses' => $allBusinesses,
            'yearComparison' => [
                'currentYear' => $currentYearCount,
                'lastYear' => $lastYearCount,
                'percentageChange' => $percentageChange
            ]
        ]);
    }
}
