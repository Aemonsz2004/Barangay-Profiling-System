import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import { useForm } from '@inertiajs/react'

const AddBusiness = ({ title }) => {
    const { data, setData, post, processing, errors } = useForm({
        business_name: '',
        business_type: '',
        description: '',
        start_date: '',
        owner_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/residents-and-datas/register-business'); // Updated URL
        console.log(data);
    }

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label>Business Name</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.business_name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.business_name}
                                onChange={(e) => setData('business_name', e.target.value)}
                            />
                            {errors.business_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_name}</p>
                            )}
                        </div>

                        <div>
                            <label>Business Type</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.business_type ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.business_type}
                                onChange={(e) => setData('business_type', e.target.value)}
                            />
                            {errors.business_type && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_type}</p>
                            )}
                        </div>

                        <div>
                            <label>Start Date</label>
                            <input
                                type="date"
                                className={`bg-white border ${
                                    errors.start_date ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.start_date}
                                onChange={(e) => setData('start_date', e.target.value)}
                            />
                            {errors.start_date && (
                                <p className="text-red-500 text-xs mt-1">{errors.start_date}</p>
                            )}
                        </div>

                        <div>
                            <label>Owner</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.owner_id ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.owner_id}
                                onChange={(e) => setData('owner_id', e.target.value)}
                            />
                            {errors.owner_id && (
                                <p className="text-red-500 text-xs mt-1">{errors.owner_id}</p>
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
                            Register Business
                        </button>
                    </div>
                </form>
            </div>
        </ResidentLayout>
    );
};

export default AddBusiness;