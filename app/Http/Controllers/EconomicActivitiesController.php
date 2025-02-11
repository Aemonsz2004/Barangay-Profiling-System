<?php

namespace App\Http\Controllers;

use App\Models\EconomicActivities;
use App\Http\Requests\StoreEconomicActivitiesRequest;
use App\Http\Requests\UpdateEconomicActivitiesRequest;
use App\Models\EconomicActivity;

class EconomicActivitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreEconomicActivitiesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(EconomicActivity $economicActivities)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EconomicActivity $economicActivities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEconomicActivitiesRequest $request, EconomicActivity $economicActivities)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EconomicActivity $economicActivities)
    {
        //
    }
}
