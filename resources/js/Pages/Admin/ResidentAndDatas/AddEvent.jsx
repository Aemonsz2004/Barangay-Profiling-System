import React from 'react';
import { useForm } from '@inertiajs/react';
import ResidentLayout from '@/Layouts/ResidentLayout';

const AddEvent = ({ title }) => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        activity_type: '',
        description: '',
        event_date: '',
        time: '',
        resident_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/residents-and-datas/community-engagement'); // Updated URL
    };

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label>Title</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.title ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                            )}
                        </div>

                        <div>
                            <label>Activity Type</label>
                            <select
                                className={`bg-white border ${
                                    errors.activity_type ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.activity_type}
                                onChange={(e) => setData('activity_type', e.target.value)}
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

                        <div>
                            <label>Event Date</label>
                            <input
                                type="date"
                                className={`bg-white border ${
                                    errors.event_date ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.event_date}
                                onChange={(e) => setData('event_date', e.target.value)}
                            />
                            {errors.event_date && (
                                <p className="text-red-500 text-xs mt-1">{errors.event_date}</p>
                            )}
                        </div>

                        <div>
                            <label>Time</label>
                            <input
                                type="time"
                                className={`bg-white border ${
                                    errors.time ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.time}
                                onChange={(e) => setData('time', e.target.value)}
                            />
                            {errors.time && (
                                <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                            )}
                        </div>

                        <div>
                            <label>Linked Resident</label>
                            <select
                                className={`bg-white border ${
                                    errors.resident_id ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.resident_id}
                                onChange={(e) => setData('resident_id', e.target.value)}
                            >
                                <option value="">None</option>
                                {/* Add options for residents here */}
                            </select>
                            {errors.resident_id && (
                                <p className="text-red-500 text-xs mt-1">{errors.resident_id}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Description</label>
                            <textarea
                                className={`bg-white border ${
                                    errors.description ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                rows={3}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className='flex justify-end'>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            disabled={processing}
                        >
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
        </ResidentLayout>
    );
};

export default AddEvent;