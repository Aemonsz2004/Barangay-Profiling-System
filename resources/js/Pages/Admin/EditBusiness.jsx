import ResidentLayout from '@/Layouts/ResidentLayout'
import React, { useState}  from 'react'
import { router, useForm } from '@inertiajs/react'

const EditBusiness = ({ title, business, residents }) => {
    const { data, setData, patch, processing, errors } = useForm({
        business_name: business.business_name || '',
        business_address: business.business_address || '',
        business_type: business.business_type || 'Retail',
        owner_name: business.owner_name || '',
        contact_number: business.contact_number || '',
        email: business.email || '',
        business_permit_number: business.business_permit_number || '',
        permit_issue_date: business.permit_issue_date?.split('T')[0] || '',
        permit_expiry_date: business.permit_expiry_date?.split('T')[0] || '',
        business_status: business.business_status || 'Active',
        registration_year: business.registration_year || new Date().getFullYear(),
        resident_id: business.resident_id || '',
    });



    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(`/residents-and-households/update-business/${business.id}`);
    };

    const handleDelete = (e) => {

        console.log(business.id);
        e.preventDefault();
        if (confirm("Are you sure you want to delete this business?")) {
            router.delete(`/residents-and-households/delete-business/${business.id}`);
            }
    };

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <div className="w-full flex justify-between items-center p-3">
                    <h2 className="text-lg">Business Details</h2>
                    <button
                        className="p-2 px-5 rounded-full border bg-blue-500 text-white"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {!isEditing ? 'Edit' : 'Cancel'}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Business Name */}
                        <div>
                            <label>Business Name</label>
                            <input
                                className={`bg-white border ${
                                    errors.business_name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.business_name}
                                onChange={(e) => setData('business_name', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.business_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_name}</p>
                            )}
                        </div>

                        {/* Business Type */}
                        <div>
                            <label>Business Type</label>
                            <select
                                className={`bg-white border ${
                                    errors.business_type ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.business_type}
                                onChange={(e) => setData('business_type', e.target.value)}
                                disabled={!isEditing}
                            >
                                <option>Retail</option>
                                <option>Food</option>
                                <option>Services</option>
                                <option>Manufacturing</option>
                            </select>
                            {errors.business_type && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_type}</p>
                            )}
                        </div>

                        {/* Business Address */}
                        <div className="col-span-2">
                            <label>Business Address</label>
                            <textarea
                                className={`bg-white border ${
                                    errors.business_address ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.business_address}
                                onChange={(e) => setData('business_address', e.target.value)}
                                disabled={!isEditing}
                                rows={3}
                            />
                            {errors.business_address && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_address}</p>
                            )}
                        </div>

                        {/* Permit Details */}
                        <div>
                            <label>Permit Number</label>
                            <input
                                className={`bg-white border ${
                                    errors.business_permit_number ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.business_permit_number}
                                onChange={(e) => setData('business_permit_number', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.business_permit_number && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_permit_number}</p>
                            )}
                        </div>

                        <div>
                            <label>Issue Date</label>
                            <input
                                type="date"
                                className={`bg-white border ${
                                    errors.permit_issue_date ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.permit_issue_date}
                                onChange={(e) => setData('permit_issue_date', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.permit_issue_date && (
                                <p className="text-red-500 text-xs mt-1">{errors.permit_issue_date}</p>
                            )}
                        </div>

                        <div>
                            <label>Expiry Date</label>
                            <input
                                type="date"
                                className={`bg-white border ${
                                    errors.permit_expiry_date ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.permit_expiry_date}
                                onChange={(e) => setData('permit_expiry_date', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.permit_expiry_date && (
                                <p className="text-red-500 text-xs mt-1">{errors.permit_expiry_date}</p>
                            )}
                        </div>

                        {/* Status and Registration Year */}
                        <div>
                            <label>Business Status</label>
                            <select
                                className={`bg-white border ${
                                    errors.business_status ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.business_status}
                                onChange={(e) => setData('business_status', e.target.value)}
                                disabled={!isEditing}
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Pending</option>
                            </select>
                            {errors.business_status && (
                                <p className="text-red-500 text-xs mt-1">{errors.business_status}</p>
                            )}
                        </div>

                        <div>
                            <label>Registration Year</label>
                            <input
                                type="number"
                                min="1900"
                                max={new Date().getFullYear()}
                                className={`bg-white border ${
                                    errors.registration_year ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.registration_year}
                                onChange={(e) => setData('registration_year', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.registration_year && (
                                <p className="text-red-500 text-xs mt-1">{errors.registration_year}</p>
                            )}
                        </div>

                        {/* Owner Information */}
                        <div>
                            <label>Owner Name</label>
                            <input
                                className={`bg-white border ${
                                    errors.owner_name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                                    !isEditing ? 'opacity-50' : ''
                                }`}
                                value={data.owner_name}
                                onChange={(e) => setData('owner_name', e.target.value)}
                                disabled={!isEditing}
                            />
                            {errors.owner_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.owner_name}</p>
                            )}
                        </div>

                        <div>
                        <label>Contact Number</label>
                        <input
                            type="text"
                            placeholder='09xxxxxxxxx'
                            value={data.contact_number}
                            onChange={(e) => setData('contact_number', e.target.value)}
                            className={`w-full p-2 border rounded ${errors.contact_number ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.contact_number && <p className="text-red-500 text-xs">{errors.contact_number}</p>}
                        </div>

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
                                onClick={handleSubmit}
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

export default EditBusiness;