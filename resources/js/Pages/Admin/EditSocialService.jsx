import ResidentLayout from '@/Layouts/ResidentLayout'
import React, { useEffect, useRef, useState } from 'react'
import { router, useForm } from '@inertiajs/react'

const EditSocialService = ({ title, socialService }) => {
    const { data, setData, patch, processing, errors } = useForm({
        service_type: socialService.service_type || 'Healthcare',
        name: socialService.name || '',
        description: socialService.description || '',
        contact: socialService.contact || '',
    });

    const fieldRefs = {
        service_type: useRef(null),
        name: useRef(null),
        description: useRef(null),
        contact: useRef(null),
    };

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        Object.keys(fieldRefs).forEach((fieldName) => {
            const fieldRef = fieldRefs[fieldName].current;
            if (fieldRef && fieldRef.value !== socialService[fieldName]) {
                fieldRef.classList.add('ring-2', 'ring-blue-500');
            } else {
                fieldRef.classList.remove('ring-2', 'ring-blue-500');
            }
        });
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/social-services/${socialService.id}/update`);
    };

    const handleDelete = (e) => {

        console.log(socialService.id);
        e.preventDefault();
        if (confirm("Are you sure you want to delete this social service?")) {
            router.delete(`/residents-and-households/social-service/${socialService.id}`);
            }
    };

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center p-3">
                    <h2 className="text-lg">Social Service Details</h2>
                    <button
                        className="p-2 px-5 rounded-full border bg-blue-500 text-white"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {!isEditing ? 'Edit' : 'Cancel'}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label>Service Type</label>
                            <select
                                className={`bg-white border ${
                                    errors.service_type ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                ref={fieldRefs.service_type}
                                value={data.service_type}
                                onChange={(e) => setData('service_type', e.target.value)}
                                disabled={!isEditing}
                            >
                                <option>Healthcare</option>
                                <option>Education</option>
                                <option>Social Welfare</option>
                            </select>
                            {errors.service_type && (
                                <p className="text-red-500 text-xs mt-1">{errors.service_type}</p>
                            )}
                        </div>

                        <div>
                            <label>Service Name</label>
                            <input
                                className={`bg-white border ${
                                    errors.name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                ref={fieldRefs.name}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Description</label>
                            <textarea
                                className={`bg-white border ${
                                    errors.description ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                ref={fieldRefs.description}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                disabled={!isEditing}
                                rows={4}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                            )}
                        </div>

                        <div>
                            <label>Contact Information</label>
                            <input
                                className={`bg-white border ${
                                    errors.contact ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                ref={fieldRefs.contact}
                                value={data.contact}
                                onChange={(e) => setData('contact', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.contact && (
                                <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                            )}
                        </div>
                    </div>
                    <div className='flex justify-between'>
                            <button
                                onClick={handleDelete}
                                disabled={isEditing }
                                className={`bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ${isEditing ? 'opacity-0' : ''}`}
                            >
                                Remove
                            </button>
                        {isEditing && (
                            <button
                                type="submit"
                                className="bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Update Business
                            </button>
                        )}
                        </div>
                </form>
            </div>
        </ResidentLayout>
    );
};

export default EditSocialService;