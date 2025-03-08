<?php

namespace App\Http\Controllers;

use App\Models\Resident;
use App\Models\Businesses;
use App\Models\CommunityEngagement;
use App\Models\SocialService;
use App\Models\EconomicActivity;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class TrashController extends Controller
{
    /**
     * Display the trash dashboard with counts of all deleted items.
     */
    public function index()
    {
        $counts = [
            'residents' => Resident::onlyTrashed()->count(),
            'businesses' => Businesses::onlyTrashed()->count(),
            'social_services' => SocialService::onlyTrashed()->count(),
            'community_engagements' => CommunityEngagement::onlyTrashed()->count(),
            'economic_activities' => EconomicActivity::onlyTrashed()->count(),
        ];

        return Inertia::render('Admin/Trash/Index', [
            'title' => 'Trash',
            'counts' => $counts,
        ]);
    }

    public function showTrashedItems() {
        $deletedResidents = Resident::onlyTrashed()->get()->map(function ($resident) {
            return [
                'id' => $resident->id,
                'full_name' => trim("{$resident->first_name} {$resident->middle_name} {$resident->last_name} {$resident->suffix}"),
                'age' => Carbon::parse($resident->birthdate)->age,
                'birthdate' => optional($resident->birthdate)->format('Y-m-d'),
                'gender' => $resident->gender,
                'civil_status' => $resident->civil_status,
                'education_level' => $resident->education_level,
                'occupation' => $resident->occupation,
                'registration_year' => $resident->registration_year,
                'deleted_at' => $resident->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        $deletedBusinesses = Businesses::onlyTrashed()->get()->map(function ($business) {
            return [
                'id' => $business->id,
                'business_name' => $business->business_name,
                'business_address' => $business->business_address,
                'business_type' => $business->business_type,
                'owner_name' => $business->owner_name,
                'contact_number' => $business->contact_number,
                'email' => $business->email,
                'business_permit_number' => $business->business_permit_number,
                'permit_issue_date' => optional($business->permit_issue_date)->format('Y-m-d'),
                'permit_expiry_date' => optional($business->permit_expiry_date)->format('Y-m-d'),
                'business_status' => $business->business_status,
                'registration_year' => $business->registration_year,
                'resident_id' => $business->resident_id,
                'deleted_at' => $business->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

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

        $deletedEconomicActivities = EconomicActivity::onlyTrashed()->get()->map(function ($activity) {
            return [
                'id' => $activity->id,
                'business_name' => $activity->business_name,
                'business_type' => $activity->business_type,
                'owner_name' => $activity->owner_name,
                'address' => $activity->address,
                'contact_number' => $activity->contact_number,
                'email_address' => $activity->email_address,
                'business_permit' => $activity->business_permit,
                'number_of_employees' => $activity->number_of_employees,
                'gross_annual_income' => $activity->gross_annual_income,
                'date_established' => optional($activity->date_established)->format('Y-m-d'),
                'description' => $activity->description,
                'deleted_at' => $activity->deleted_at->format('Y-m-d H:i:s'),
            ];
        });

        return Inertia::render('Admin/DeletedDatasPage', [
            'title' => 'Deleted Economic Activities',
            
            'deleted_residents' => $deletedResidents,
            'deleted_businesses' => $deletedBusinesses,
            'deleted_social_services' => $deletedSocialServices,
            'deleted_economic_activities' => $deletedEconomicActivities,
            'deleted_community_engagements' => $deletedCommunityEngagements,

        ]);
    }
}









