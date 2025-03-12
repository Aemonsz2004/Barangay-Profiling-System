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

    public function addSocialService()
    {
        // Validate the request data
        $validatedData = request()->validate([
            'service_type' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'contact' => 'nullable|string|size:11|regex:/^09\d+$/',
        ]);

        // Create the social service record
        SocialService::create($validatedData);

        // Redirect to resident route with a success message
        return redirect()->route('resident')->with('success', 'Social Service added successfully.');
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
    public function update( $id)
    {
        $socialService = SocialService::findOrFail($id);

        $validatedData = request()->validate([
            'service_type' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'contact' => 'nullable|string|size:11|regex:/^09\d+$/',
        ]);

        $socialService->update($validatedData);

        return redirect()->route('resident', ['id' => $id])->with('success', 'Social Service updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($socialServices)
    {
        //
        $socialServices = SocialService::findOrFail($socialServices);
        $socialServices->delete();
        return redirect()->route('resident')->with('success', 'Social Service deleted successfully!');
    }

    public function restore(SocialService $socialServices)
    {
        //
        $socialServices->restore();
        return redirect()->route('deleted-datas')->with('success', 'Social Service deleted successfully!');
    }

    /**
     * Display a listing of soft-deleted social services.
     */
    public function showDeleted()
    {
        $deletedSocialServices = SocialService::onlyTrashed()->get()->map(function ($service) {
            return [
                'id' => $service->id,
                'service_type' => $service->service_type,
                'name' => $service->name,
                'description' => $service->description,
                'contact' => $service->contact,
                'deleted_at' => $service->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        return Inertia::render('Admin/Trash/SocialServices', [
            'title' => 'Deleted Social Services',
            'social_services' => $deletedSocialServices,
        ]);
    }
}
