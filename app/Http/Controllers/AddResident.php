<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use Illuminate\Http\Request;

class AddResident extends Controller
{
    //
    public function addResident(Request $request) {
        $request ->validate([
            
        ]);

        Resident::create([
            
        ]);
    }
}
