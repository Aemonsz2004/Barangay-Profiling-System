import React from 'react';
import { useForm } from '@inertiajs/react';
import ResidentLayout from '@/Layouts/ResidentLayout';

const AddEvent = ({ title }) => {
const { data, setData, post, processing, errors } = useForm({
activity_type: 'Feedback',
description: '',
event_date: '',
});

const handleSubmit = (e) => {
e.preventDefault();
post('/residents-and-households/community-engagement');
};

return (
<ResidentLayout title={title}>
    <div className="p-4">
    <h2 className="text-lg mb-4">Share Your Community Input</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label>Activity Type</label>
        <select
            value={data.activity_type}
            onChange={(e) => setData('activity_type', e.target.value)}
            className="border p-2 rounded w-full"
            required
        >
            <option value="Feedback">Feedback</option>
            <option value="Survey">Survey</option>
            <option value="Workshop">Workshop</option>
            <option value="Meeting">Meeting</option>
            <option value="Volunteer">Volunteer</option>
        </select>
        {errors.activity_type && <p className="text-red-500 text-xs">{errors.activity_type}</p>}
        </div>

        <div>
        <label>Description</label>
        <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            className="border p-2 rounded w-full"
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
            className="border p-2 rounded w-full"
        />
        {errors.event_date && <p className="text-red-500 text-xs">{errors.event_date}</p>}
        </div>

        <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={processing}
        >
        Submit
        </button>
    </form>
    </div>
</ResidentLayout>
);
};

export default AddEvent;
