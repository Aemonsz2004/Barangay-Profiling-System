import ResidentLayout from '@/Layouts/ResidentLayout'
import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'

const AddResident = ({
    title,
}) => {

    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        gender: 'Male',
        birthdate: '',
        civil_status: 'Single',
        religion: 'Roman Catholic',
        education_level: 'No_education',
        occupation: 'Unemployed',
        contact_number: '',
        email_address: '',
        address: '',
        data_id: null, // Changed from household_id
        voter_id: 'N/A',
        voter_status: '',
        sss: 'N/A',
        philhealth_id: 'N/A',
        pagibig_id: 'N/A',
        registration_year: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/residents-and-datas/register-resident'); // Updated URL
        console.log(data)
    }

    return (
        <ResidentLayout title={title}>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="p-5 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                            <label>First Name</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.first_name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                            />
                            {errors.first_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Middle Name</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.middle_name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.middle_name}
                                onChange={(e) => setData('middle_name', e.target.value)}
                            />
                            {errors.middle_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.middle_name}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.last_name ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                            />
                            {errors.last_name && (
                                <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Suffix</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.suffix ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.suffix}
                                onChange={(e) => setData('suffix', e.target.value)}
                            />
                            {errors.suffix && (
                                <p className="text-red-500 text-xs mt-1">{errors.suffix}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Gender</label>
                            <select
                                className={`bg-white border ${
                                    errors.gender ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.gender}
                                onChange={(e) => setData('gender', e.target.value)}
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Birthdate</label>
                            <input
                                type="date"
                                className={`bg-white border ${
                                    errors.birthdate ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.birthdate}
                                onChange={(e) => setData('birthdate', e.target.value)}
                            />
                            {errors.birthdate && (
                                <p className="text-red-500 text-xs mt-1">{errors.birthdate}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Civil Status</label>
                            <select
                                className={`bg-white border ${
                                    errors.civil_status ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.civil_status}
                                onChange={(e) => setData('civil_status', e.target.value)}
                            >
                                <option>Single</option>
                                <option>Married</option>
                                <option>Widowed</option>
                                <option>Divorced</option>
                            </select>
                            {errors.civil_status && (
                                <p className="text-red-500 text-xs mt-1">{errors.civil_status}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Religion</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.religion ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.religion}
                                onChange={(e) => setData('religion', e.target.value)}
                            />
                            {errors.religion && (
                                <p className="text-red-500 text-xs mt-1">{errors.religion}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Education Level</label>
                            <select
                                className={`bg-white border ${
                                    errors.education_level ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.education_level}
                                onChange={(e) => setData('education_level', e.target.value)}
                            >
                                <option>No Education</option>
                                <option>Primary Education</option>
                                <option>Secondary Education</option>
                                <option>Tertiary Education</option>
                            </select>
                            {errors.education_level && (
                                <p className="text-red-500 text-xs mt-1">{errors.education_level}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Occupation</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.occupation ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.occupation}
                                onChange={(e) => setData('occupation', e.target.value)}
                            />
                            {errors.occupation && (
                                <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Contact Number</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.contact_number ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.contact_number}
                                onChange={(e) => setData('contact_number', e.target.value)}
                            />
                            {errors.contact_number && (
                                <p className="text-red-500 text-xs mt-1">{errors.contact_number}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Email Address</label>
                            <input
                                type="email"
                                className={`bg-white border ${
                                    errors.email_address ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.email_address}
                                onChange={(e) => setData('email_address', e.target.value)}
                            />
                            {errors.email_address && (
                                <p className="text-red-500 text-xs mt-1">{errors.email_address}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Address</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.address ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.address}
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            {errors.address && (
                                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                            )}
                        </div>

                        <div>
                            <label>Data ID</label>
                            <input
                                className={`bg-white border ${
                                    errors.data_id ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                                id="data_id"
                                value={data.data_id}
                                placeholder='data id'
                                onChange={(e) => setData('data_id', e.target.value)}
                                autoComplete="data_id"
                                required
                            />
                            {errors.data_id && (
                                <p className="text-red-500 text-xs mt-1">{errors.data_id}</p>
                            )}
                        </div>

                        <div className="col-span-2">
                            <label>Voter ID</label>
                            <input
                                type="text"
                                className={`bg-white border ${
                                    errors.voter_id ? 'border-red-500' : 'border-gray-300'
                                } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                                value={data.voter_id}
                                onChange={(e) => setData('voter_id', e.target.value)}
                            />
                            {errors.voter_id && (
                                <p className="text-red-500 text-xs mt-1">{errors.voter_id}</p>
                            )}
                        </div>
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            disabled={processing}
                        >
                            {processing ? 'Processing...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </ResidentLayout>
    )
}

export default AddResident