<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use Illuminate\Http\Request;

class AddResidentController extends Controller
{
    //
    public function addResident(Request $request) {
        
            $request->validate([
                'first_name' => 'required|string|max:255',
                'middle_name' => 'nullable|string|max:255',
                'last_name' => 'required|string|max:255',
                'suffix' => 'nullable|string|max:10',
                'gender' => 'required|string',
                'birthdate' => 'required|date',
                'civil_status' => 'required|string|max:50',
                'religion' => 'required|string|max:100',
                'education_level' => 'required|string|max:100',
                'occupation' => 'required|string|max:100',
                'contact_number' => 'nullable|string|max:11',
                'email_address' => 'nullable|email|max:255',
                'address' => 'required|string|max:255',
                'household_id' => 'nullable|integer',
                'voter_id' => 'nullable|string|max:50',
                'voter_status' => 'nullable|string|max:50',
                'sss' => 'nullable|string|max:20',
                'philhealth_id' => 'nullable|string|max:20',
                'pagibig_id' => 'nullable|string|max:20',
                'registration_year' => 'required|integer',
            ]);

            Resident::create([
                'first_name' => $request->first_name,
                'middle_name' => $request->middle_name,
                'last_name' => $request->last_name,
                'suffix' => $request->suffix,
                'gender' => $request->gender,
                'birthdate' => $request->birthdate,
                'civil_status' => $request->civil_status,
                'religion' => $request->religion,
                'education_level' => $request->education_level,
                'occupation' => $request->occupation,
                'contact_number' => $request->contact_number,
                'email_address' => $request->email_address,
                'address' => $request->address,
                'household_id' => $request->household_id,
                'voter_id' => $request->voter_id,
                'voter_status' => $request->voter_status,
                'sss' => $request->sss,
                'philhealth_id' => $request->philhealth_id,
                'pagibig_id' => $request->pagibig_id,
                'registration_year' => $request->registration_year,
            ]);

            return redirect()->route('resident')->with('success', 'Resident added successfully');
    }
}
