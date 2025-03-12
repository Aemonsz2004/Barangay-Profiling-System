import React from 'react';
import { useForm } from '@inertiajs/react';
import ResidentLayout from '@/Layouts/ResidentLayout';

const AddEvent = ({ title }) => {
const { data, setData, post, processing, errors } = useForm({
    activity_type: '',
    title: '',
    description: '',
    event_date: '',
    time: '',
});

const handleSubmit = (e) => {
    e.preventDefault();
    post('/residents-and-households/add-community-engagement');
};

return (
    <ResidentLayout title={title}>
        <h2 className="text-lg mb-4">Share Your Community Input</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label>Activity Type</label>
                <select
                        value={data.activity_type}
                        onChange={(e) => setData('activity_type', e.target.value)}
                        className={`bg-white border ${
                            errors.activity_type ? 'border-red-500' : 'border-gray-300'
                        } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                >
                        <option value="" hidden disabled>Select activity type</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Survey">Survey</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Volunteer">Volunteer</option>
                </select>
                {errors.activity_type && <p className="text-red-500 text-xs">{errors.activity_type}</p>}
                </div>

                <div>
                <label>Title</label>
                <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className={`bg-white border ${
                            errors.title ? 'border-red-500' : 'border-gray-300'
                        } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                        placeholder="Enter event title"
                />
                {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
                </div>

                <div>
                <label>Description</label>
                <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className={`bg-white border ${
                            errors.description ? 'border-red-500' : 'border-gray-300'
                        } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                        placeholder="Share details about your engagement"
                />
                {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                </div>

                <div>
                <label>Event Date (if applicable)</label>
                <input
                        type="date"
                        value={data.event_date}
                        onChange={(e) => setData('event_date', e.target.value)}
                        className={`bg-white border ${
                            errors.event_date ? 'border-red-500' : 'border-gray-300'
                        } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                />
                {errors.event_date && <p className="text-red-500 text-xs">{errors.event_date}</p>}
                </div>

                <div>
                <label>Time</label>
                <input
                        type="time"
                        value={data.time}
                        onChange={(e) => setData('time', e.target.value)}
                        className={`bg-white border ${
                            errors.time ? 'border-red-500' : 'border-gray-300'
                        } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                />
                {errors.time && <p className="text-red-500 text-xs">{errors.time}</p>}
                </div>
                
                <div className='flex justify-end'>
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={processing}

                >
                Submit
                </button>
                </div>
        </form>
    </ResidentLayout>
);
};

export default AddEvent;
