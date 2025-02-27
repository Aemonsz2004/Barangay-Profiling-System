import React, { useRef, useState } from 'react'
import { useForm } from '@inertiajs/react'
import '/resources/var.css'
import ResidentLayout from '@/Layouts/ResidentLayout'

const AddBusiness = ({ title, message }) => {
    const { data, setData, post, processing, errors } = useForm({
        business_name: '',
        industry_type: '',
        employee_count: '',
        established_date: '',
        status: 'active',
    });

    const [image, setImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/residents-and-households/register-business`);
    };

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <h2 className="p-3 text-md">Business Profile</h2>
                </div>


                        <div className="flex flex-col mr-10 gap-5">
                            <div className="flex items-center justify-center">
                                <div className="border p-2 rounded-2xl mr-5">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleImageChange}
                                        ref={fileInputRef}

                                    />
                                    <div
                                        className="rounded-2xl bg-gray-200 aspect-square w-[225px] overflow-hidden flex items-center justify-center cursor-pointer"
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        {image ? (
                                            <img className="h-[225px] w-[225px]" src={image} alt="business logo" />
                                        ) : (
                                            <span className="text-gray-500">No image</span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-5 flex-wrap border w-full p-3 rounded-2xl">
                                    <div className="w-full flex justify-between items-center">
                                        <h1 className="pb-4">Basic Information</h1>

                                    </div>

                                    <form id="form" onSubmit={handleSubmit}>
                                        <div className="flex flex-wrap gap-5 items-center">
                                            <div>
                                                <label>Business Name</label>
                                                <input
                                                    className={`bg-white border text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5
                                                        ${errors.business_name ? 'border-red-500' : 'border-gray-300'}
                                                        ${!isEditing ? 'border-opacity-25' : ''}`}
                                                    type="text"
                                                    id="business_name"
                                                    value={data.business_name}
                                                    placeholder="Enter business name"
                                                    onChange={(e) => setData('business_name', e.target.value)}
                                                    autoComplete="business_name"

                                                    required
                                                />
                                                {errors.business_name && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.business_name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label>Industry Type</label>
                                                <input
                                                    className={`bg-white border text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5
                                                        ${errors.industry_type ? 'border-red-500' : 'border-gray-300'}
                                                        ${!isEditing ? 'border-opacity-25' : ''}`}
                                                    type="text"
                                                    id="industry_type"
                                                    value={data.industry_type}
                                                    placeholder="Enter industry type"
                                                    onChange={(e) => setData('industry_type', e.target.value)}
                                                    autoComplete="industry_type"

                                                    required
                                                />
                                                {errors.industry_type && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.industry_type}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label>Employee Count</label>
                                                <input
                                                    className={`bg-white border text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5
                                                        ${errors.employee_count ? 'border-red-500' : 'border-gray-300'}
                                                        ${!isEditing ? 'border-opacity-25' : ''}`}
                                                    type="number"
                                                    id="employee_count"
                                                    value={data.employee_count}
                                                    placeholder="Enter employee count"
                                                    onChange={(e) => setData('employee_count', e.target.value)}
                                                    autoComplete="employee_count"

                                                    required
                                                />
                                                {errors.employee_count && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.employee_count}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label>Established Date</label>
                                                <input
                                                    className={`bg-white border text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5
                                                        ${errors.established_date ? 'border-red-500' : 'border-gray-300'}
                                                        ${!isEditing ? 'border-opacity-25' : ''}`}
                                                    type="date"
                                                    id="established_date"
                                                    value={data.established_date}
                                                    onChange={(e) => setData('established_date', e.target.value)}
                                                    autoComplete="established_date"

                                                    required
                                                />
                                                {errors.established_date && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.established_date}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label>Status</label>
                                                <select
                                                    className={`bg-white border text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5
                                                        ${errors.status ? 'border-red-500' : 'border-gray-300'}
                                                        ${!isEditing ? 'border-opacity-25' : ''}`}
                                                    id="status"
                                                    value={data.status}
                                                    onChange={(e) => setData('status', e.target.value)}
                                                    autoComplete="status"

                                                    required
                                                >
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                                {errors.status && (
                                                    <p className="text-red-500 text-xs mt-1">{errors.status}</p>
                                                )}
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                
                            </div>

                        </div>
                        <div className='w-full flex justify-end'>
                                <button
                                type="submit"
                                className="mt-5 p-2 px-5 rounded-full border bg-blue-600 text-white"
                                disabled={processing}
                                >
                                Submit
                                </button>
                            </div>
                    

            </div>
        </ResidentLayout>
    );
}

export default AddBusiness;
