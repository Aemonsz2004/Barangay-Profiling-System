<?php

namespace App\Http\Controllers;

use App\Models\PendingResident;
use App\Http\Requests\StorePendingResidentRequest;
use App\Http\Requests\UpdatePendingResidentRequest;
use Inertia\Inertia;

class PendingResidentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        return Inertia::render('Admin/ResidentHousehold/PendingResident', [
            'pendingResidents' => PendingResident::where('status', 'pending')->get(),
            'title' => 'Pending Residents',
        ]);
    }

    public function approve(StorePendingResidentRequest $id) {
        $resident = PendingResident::findOrFail($id);
        $resident->update(['status' => 'approved']);

        return redirect()->route('admin.pending-residents')->with('success','Resident approved successfully');
    }

    public function reject(StorePendingResidentRequest $id) {
        $resident = PendingResident::findOrFail($id);
        $resident->update(['status'=> 'rejected']);
        return redirect()->route('admin.pending-residents')->with('success', 'Resident rejected successfully');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */


        public function store(StorePendingResidentRequest $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'suffix' => 'nullable|string|max:10',
            'gender' => 'required|in:Male,Female,Other',
            'birthdate' => 'required|date',
            'civil_status' => 'required|string|max:50',
            'religion' => 'nullable|string|max:100',
            'education_level' => 'nullable|string|max:100',
            'occupation' => 'nullable|string|max:100',
            'contact_number' => 'nullable|string|max:15',
            'email_address' => 'nullable|email|max:255',
            'address' => 'required|string|max:255',
            'household_id' => 'required|integer',
            'voter_id' => 'nullable|string|max:50',
            'voter_status' => 'nullable|string|max:50',
            'sss' => 'nullable|string|max:20',
            'philhealth_id' => 'nullable|string|max:20',
            'pagibig_id' => 'nullable|string|max:20',
            'registration_year' => 'required|integer',
        ]);

        // Store the registration request as "pending"
        PendingResident::create(array_merge($validated, ['status' => 'pending']));

        return redirect()->route('user-profile')->with('success', 'Registration request sent successfully');
    }


    /**
     * Display the specified resource.
     */
    public function show(PendingResident $pendingResident)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PendingResident $pendingResident)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePendingResidentRequest $request, PendingResident $pendingResident)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PendingResident $pendingResident)
    {
        //
    }
}
