import ResidentLayout from '@/Layouts/ResidentLayout'
import React, { useState } from 'react'
import { useForm, router } from '@inertiajs/react'

const EditCommunityEngagement = (
    { title, communityEngagements, residents }) => {
    // Initialize form with engagement data
    const { data, setData, patch, processing, errors } = useForm({
        title: communityEngagements.title || '',
        activity_type: communityEngagements.activity_type || '',
        description: communityEngagements.description || '',
        event_date: communityEngagements.event_date || '',
        time: communityEngagements.time || '',
        resident_id: communityEngagements.resident_id || '',
    });

    console.log('communityEngagements', communityEngagements);

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/community-engagements/${communityEngagements.id}/update`);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this community engagement?")) {
            router.delete(`/residents-and-households/community-engagement/${communityEngagements.id}`);
        }
    };

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                {/* Header with Edit/Cancel button */}
                <div className="w-full flex justify-between items-center p-3">
                    <h2 className="text-lg">Community Engagement Details</h2>
                    <button
                        className="p-2 px-5 rounded-full border bg-blue-500 text-white"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {!isEditing ? 'Edit' : 'Cancel'}
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Title field */}
                        <div className="col-span-2">
                            <label>Title</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.title ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                            )}
                        </div>

                        {/* Activity Type field */}
                        <div>
                            <label>Activity Type</label>
                            <select
                                className={`bg-white border ${
                                    errors.activity_type ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.activity_type}
                                onChange={(e) => setData('activity_type', e.target.value)}
                                disabled={!isEditing}
                            >
                                <option>Survey</option>
                                <option>Workshop</option>
                                <option>Meeting</option>
                                <option>Feedback</option>
                                <option>Volunteer</option>
                            </select>
                            {errors.activity_type && (
                                <p className="text-red-500 text-xs mt-1">{errors.activity_type}</p>
                            )}
                        </div>

                        {/* Event Date field */}
                        <div>
                            <label>Event Date</label>
                            <input
                                type="date"
                                className={`bg-white border ${
                                    errors.event_date ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.event_date}
                                onChange={(e) => setData('event_date', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.event_date && (
                                <p className="text-red-500 text-xs mt-1">{errors.event_date}</p>
                            )}
                        </div>

                        {/* Time field - Added based on database schema */}
                        <div>
                            <label>Time</label>
                            <input
                                type="time"
                                className={`bg-white border ${
                                    errors.time ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.time}
                                onChange={(e) => setData('time', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.time && (
                                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                            )}
                        </div>

                        {/* Linked Resident field */}
                        {/* <div>
                            <label>Linked Resident</label>
                            <select
                                className={`bg-white border ${
                                    errors.resident_id ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.resident_id}
                                onChange={(e) => setData('resident_id', e.target.value)}
                                disabled={!isEditing}
                            >
                                <option value="">None</option>
                                {residents.map((resident) => (
                                    <option key={resident.id} value={resident.id}>
                                        {resident.first_name} {resident.last_name}
                                    </option>
                                ))}
                            </select>
                            {errors.resident_id && (
                                <p className="text-red-500 text-xs mt-1">{errors.resident_id}</p>
                            )}
                        </div> */}

                        {/* Description field */}
                        <div className="col-span-2">
                            <label>Description</label>
                            <textarea
                                className={`bg-white border ${
                                    errors.description ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                disabled={!isEditing}
                                rows={3}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                            )}
                        </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className='flex justify-between'>
                        <button
                            onClick={handleDelete}
                            disabled={isEditing}
                            className={`bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ${isEditing ? 'opacity-0' : ''}`}
                            type="button"
                        >
                            Remove
                        </button>
                        {isEditing && (
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                disabled={processing}
                            >
                                Update
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </ResidentLayout>
    );
};

export default EditCommunityEngagement;
