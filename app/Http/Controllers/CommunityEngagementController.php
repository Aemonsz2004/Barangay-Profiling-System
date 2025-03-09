<?php

namespace App\Http\Controllers;

use App\Models\CommunityEngagement;
use App\Models\Resident;
use App\Http\Requests\UpdateCommunityEngagementRequest;
use Carbon\Carbon;
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
            'title' => 'required|string|max:255',
            'activity_type' => 'required|in:Survey,Workshop,Meeting,Feedback,Volunteer',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
            'time' => 'nullable|date_format:H:i',
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
        $formattedEngagement = [
            'id' => $communityEngagement->id,
            'resident_id' => $communityEngagement->resident_id,
            'title' => $communityEngagement->title,
            'activity_type' => $communityEngagement->activity_type,
            'description' => $communityEngagement->description,
            'event_date'    => $communityEngagement->event_date ? Carbon::parse($communityEngagement->event_date)->format('Y-m-d') : null,
            'time' => $communityEngagement->time ? Carbon::parse($communityEngagement->time)->format('H:i') : null,
            'created_at' => $communityEngagement->created_at,
            'updated_at' => $communityEngagement->updated_at,
        ];
        
        return Inertia::render('Admin/EditCommunityEngagement', [
            'title' => 'Edit Community Engagement',
            'communityEngagements' => $formattedEngagement,
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
    public function destroy($id)
    {
        //
        $communityEngagement = CommunityEngagement::findOrFail($id);
        $communityEngagement->delete();
        return redirect()->route('residents-and-households')->with('success', 'Community Engagement deleted successfully!');
    }

    public function restore($id)
    {
        //
        $communityEngagement = CommunityEngagement::withTrashed()->findOrFail($id);
        $communityEngagement->restore();
        return redirect()->route('residents-and-households')->with('success', 'Community Engagement deleted successfully!');
    }
    

    /**
     * Display a listing of soft-deleted community engagements.
     */
    public function showDeleted()
    {
        $deletedCommunityEngagements = CommunityEngagement::onlyTrashed()->get()->map(function ($engagement) {
            return [
                'id' => $engagement->id,
                'resident_id' => $engagement->resident_id,
                'title' => $engagement->title,
                'activity_type' => $engagement->activity_type,
                'description' => $engagement->description,
                'event_date' => optional($engagement->event_date)->format('Y-m-d'),
                'time' => optional($engagement->time)->format('H:i'),
                'deleted_at' => $engagement->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        return Inertia::render('Admin/Trash/CommunityEngagements', [
            'title' => 'Deleted Community Engagements',
            'community_engagements' => $deletedCommunityEngagements,
        ]);
    }
}
