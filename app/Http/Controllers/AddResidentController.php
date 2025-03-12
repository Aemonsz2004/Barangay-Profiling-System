<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AddResidentController extends Controller
{
    //
    public function addResident(Request $request) {
        
        $validatedData = $request->validate([
                'first_name' => 'required|string|max:255',
                'middle_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'suffix' => 'nullable|string|max:10',
                'gender' => 'required|string',
                'birthdate' => 'required|date',
                'civil_status' => 'required|string|max:50',
                'religion' => 'required|string|max:100',
                'education_level' => 'required|string|max:100',
                'occupation' => 'required|string|max:100',
                'contact_number' => 'nullable|string|size:11|regex:/^09\d+$/',
                'email_address' => 'nullable|email|max:255',
                'address' => 'required|string|max:255',
                'household_id' => 'nullable|integer',
                'voter_id' => 'nullable|required_if:voter_status,Registered|string|max:50',
                'voter_status' => 'nullable|string|max:50',
                'sss' => 'nullable|string|max:20',
                'philhealth_id' => 'nullable|string|max:20',
                'pagibig_id' => 'nullable|string|max:20',
                'registration_year' => 'required|integer',

                'avatar' => 'nullable',
            ]);
            
            // Case 1: File upload
            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $extension = $file->getClientOriginalExtension();
                $filename = uniqid() . '.' . $extension;
                $path = $file->storeAs('avatars', $filename, 'public');
                $validatedData['avatar'] = $path;
            }
            // Case 2: Base64 encoded image (from camera capture)
            elseif ($request->avatar && preg_match('/^data:image\/(\w+);base64,/', $request->avatar)) {
                $data = substr($request->avatar, strpos($request->avatar, ',') + 1);
                $data = base64_decode($data);
                $extension = 'jpg'; // assuming JPEG; adjust if needed
                $filename = uniqid() . '.' . $extension;
                Storage::disk('public')->put('avatars/' . $filename, $data);
                $validatedData['avatar'] = 'avatars/' . $filename;
            }

            Resident::create($validatedData);

            return redirect()->route('resident')->with('success', 'Resident added successfully');
    }
}
