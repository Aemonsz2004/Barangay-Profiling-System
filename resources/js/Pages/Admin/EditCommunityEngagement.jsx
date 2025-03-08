import ResidentLayout from '@/Layouts/ResidentLayout'
import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'

const EditCommunityEngagement = ({ title, engagement, residents }) => {
    const { data, setData, patch, processing, errors } = useForm({
        activity_type: engagement.activity_type || 'Survey',
        description: engagement.description || '',
        event_date: engagement.event_date || '',
        resident_id: engagement.resident_id || '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/community-engagements/${engagement.id}/update`);
    };

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center p-3">
                    <h2 className="text-lg">Community Engagement Details</h2>
                    <button
                        className="p-2 px-5 rounded-full border"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {!isEditing ? 'Edit' : 'Cancel'}
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Activity Type */}
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

                        {/* Event Date */}
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

                        {/* Linked Resident */}
                        <div>
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
                        </div>

                        {/* Description */}
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
                    {isEditing && (
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                disabled={processing}
                            >
                                Update Engagement
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </ResidentLayout>
    );
};

export default EditCommunityEngagement;
