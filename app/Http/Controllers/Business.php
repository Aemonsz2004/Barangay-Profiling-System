<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business as BusinessModel;
use Inertia\Inertia;

class Business extends Controller
{
    public function index(){
        $businesses = BusinessModel::selectRaw('industry, COUNT(*) as count')->groupBy('industry')->get();
        

        return Inertia::render('/', [
            'businessStats' => $businesses
        ]);
        }
    }


