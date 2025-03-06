import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import { useForm } from '@inertiajs/react'

const AddSocialServices = ({ title }) => {
    const { data, setData, post, processing, errors } = useForm({
        service_type: 'Healthcare', // default, can be changed by user
        name: '',
        description: '',
        contact: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/social-services/store'); // update the URL to match your routes
        console.log(data);
    }

    return (
        <ResidentLayout title={title}>
            <div className="w-full p-4">
                <h2 className="text-lg mb-4">Register Social Service</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label>Service Type</label>
                        <select
                            value={data.service_type}
                            onChange={(e) => setData('service_type', e.target.value)}
                            className={`w-full p-2 border rounded ${errors.service_type ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        >
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="Social Welfare">Social Welfare</option>
                        </select>
                        {errors.service_type && <p className="text-red-500 text-xs">{errors.service_type}</p>}
                    </div>

                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                            required
                        />
                        {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                    </div>

                    <div>
                        <label>Contact</label>
                        <input
                            type="text"
                            value={data.contact}
                            onChange={(e) => setData('contact', e.target.value)}
                            className={`w-full p-2 border rounded ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            disabled={processing}
                        >
                            Register Service
                        </button>
                    </div>
                </form>
            </div>
        </ResidentLayout>
    );
};

export default AddSocialServices;
