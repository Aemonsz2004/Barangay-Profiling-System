<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use App\Http\Requests\StoreResidentsRequest;
use App\Http\Requests\UpdateResidentsRequest;
use Inertia\Inertia;

class ResidentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $residents = Resident::all()->map(function($resident){

            return [
                'id' => $resident->id,
                'full_name' => $resident->first_name . '' . ($resident-> middle_name ? $resident->middle_name . '' : '' ) . $resident->last_name . ($resident->suffix ? ' ' . $resident->suffix : ''),
                'age' => $resident->age,
                'birthdate' => $resident->birthdate->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
            ];
        });

        return Inertia::render('Dashboard', [
            'residents' => $residents
        ]);

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
    public function store(StoreResidentsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Resident $residents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        //
        $resident = Resident::findOrFail( $id );

        return Inertia::render('EditResident',[
            'title' => 'Edit Resident',
            'resident' => $resident
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResidentsRequest $request, Resident $residents)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resident $residents)
    {
        //
    }
}
