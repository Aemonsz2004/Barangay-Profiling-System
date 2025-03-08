<?php

namespace App\Http\Controllers;

use App\Models\CommunityEngagement;
use App\Http\Requests\UpdateCommunityEngagementRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommunityEngagementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve all engagements (or paginate as needed)
        $engagements = CommunityEngagement::latest()->get();
        return Inertia::render('CommunityEngagement/Index', [
            'title' => 'Community Engagement',
            'engagements' => $engagements,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CommunityEngagement/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'activity_type' => 'required|in:Survey,Workshop,Meeting,Feedback,Volunteer',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
            'resident_id' => 'nullable|exists:residents,id'
        ]);
    
        CommunityEngagement::create($validated);
        
        return redirect()->route('community-engagement')
                        ->with('success', 'Your input has been submitted!');
    }

    /**
     * Display the specified resource.
     */
    public function show(CommunityEngagement $communityEngagement)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $communityEngagement = CommunityEngagement::findOrFail($id);
        return Inertia::render('Admin/EditCommunityEngagement', [
            'title' => 'Edit Community Engagement',
            'communityEngagement' => $communityEngagement,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommunityEngagementRequest $request, $id)
    {
        $communityEngagement = CommunityEngagement::findOrFail($id);

        $validatedData = $request->validated();

        $communityEngagement->update($validatedData);

        return redirect()->route('edit-community-engagement', ['id' => $id])->with('success', 'Community Engagement updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CommunityEngagement $communityEngagement)
    {
        //
    }
}
