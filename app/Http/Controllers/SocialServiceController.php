<?php

namespace App\Http\Controllers;

use App\Models\SocialService;
use App\Http\Requests\StoreSocialServicesRequest;
use App\Http\Requests\UpdateSocialServicesRequest;
use Inertia\Inertia;

class SocialServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
    }
    public function getSocialService() {
        return Inertia::render('Admin/SocialServicesForm/AddSocialServices', [
            'title' => 'Add Social Service',
        ]);
    }

    public function addSocialService(StoreSocialServicesRequest $request)
    {
        // The request is already validated based on the rules in StoreSocialServicesRequest
        $validatedData = $request->validated();

        // Create the social service record
        SocialService::create($validatedData);

        // Redirect back with a success message
        return redirect()->back()->with('success', 'Social Service added successfully.');
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
    public function store(StoreSocialServicesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SocialService $socialServices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $socialService = SocialService::findOrFail($id);
        return Inertia::render('Admin/EditSocialService', [
            'title' => 'Edit Social Service',
            'socialService' => $socialService,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSocialServicesRequest $request, $id)
    {
        $socialService = SocialService::findOrFail($id);

        $validatedData = $request->validated();

        $socialService->update($validatedData);

        return redirect()->route('edit-social-service', ['id' => $id])->with('success', 'Social Service updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SocialService $socialServices)
    {
        //
    }
}
