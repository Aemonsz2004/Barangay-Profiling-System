import React from 'react'
import { router, useForm } from '@inertiajs/react'

const Profile = ({ title, route_name }) => {
  const { data: formData, setData, post, processing, errors } = useForm({
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    gender: '',
    birthdate: '',
    civil_status: '',
    religion: '',
    education_level: '',
    occupation: '',
    contact_number: '',
    email_address: '',
    address: '',
    household_id: null,
    voter_id: '',
    voter_status: '',
    sss: '',
    philhealth_id: '',
    pagibig_id: '',
    registration_year: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(route(route_name), formData);
  };

  return (
    <div className='bg-white rounded-2xl p-5'>
      <h2 className='p-3 text-md'>{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>

          {/* First Section */}
          <div className='flex items-center'>
            <div className='border p-2 rounded-2xl mr-5'>
              <div className='rounded-2xl bg-gray-200 aspect-square w-[205px] flex items-center justify-center'>
                <img className='object-cover' src='' alt='Profile' />
              </div>
            </div>

            {/* Basic Information */}
            <div className='flex flex-wrap gap-5 border w-full p-3 rounded-2xl'>
              <h1>Basic Information</h1>
              
              <div>
                <label>First Name</label>
                <input
                  className={`bg-white border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-full`}
                  type="text"
                  value={formData.first_name}
                  onChange={(e) => setData('first_name', e.target.value)}
                  required
                />
                {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
              </div>

              <div>
                <label>Middle Name</label>
                <input
                  className={`bg-white border ${errors.middle_name ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-full`}
                  type="text"
                  value={formData.middle_name}
                  onChange={(e) => setData('middle_name', e.target.value)}
                />
                {errors.middle_name && <p className="text-red-500 text-xs mt-1">{errors.middle_name}</p>}
              </div>

              <div>
                <label>Gender</label>
                <select
                  className={`bg-white border ${errors.gender ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-[90px]`}
                  value={formData.gender}
                  onChange={(e) => setData('gender', e.target.value)}
                  required
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>LGBTQ+</option>
                </select>
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className='flex gap-5'>
            <div className='border w-[425px] p-3 rounded-2xl'>
              <h1>Contact Information</h1>
              
              <div>
                <label>Address</label>
                <input
                  className={`bg-white border ${errors.address ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-[400px]`}
                  type="text"
                  value={formData.address}
                  onChange={(e) => setData('address', e.target.value)}
                  required
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div>
                <label>Contact Number</label>
                <input
                  className={`bg-white border ${errors.contact_number ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-[400px]`}
                  type="text"
                  value={formData.contact_number}
                  onChange={(e) => setData('contact_number', e.target.value)}
                  required
                />
                {errors.contact_number && <p className="text-red-500 text-xs mt-1">{errors.contact_number}</p>}
              </div>
            </div>
          </div>

          {/* Identification Details */}
          <div className='border rounded-2xl p-3'>
            <h1>Identification Details</h1>

            <div>
              <label>Voter Status</label>
              <select
                className={`bg-white border ${errors.voter_status ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-[125px]`}
                value={formData.voter_status}
                onChange={(e) => {
                  setData('voter_status', e.target.value);
                  if (e.target.value === 'Unregistered') {
                    setData('voter_id', ''); // Clear voter ID when unregistered
                  }
                }}
                required
              >
                <option>Registered</option>
                <option>Unregistered</option>
              </select>
              {errors.voter_status && <p className="text-red-500 text-xs mt-1">{errors.voter_status}</p>}
            </div>

            <div>
              <label>Voter ID</label>
              <input
                className={`bg-white border ${errors.voter_id ? 'border-red-500' : 'border-gray-300'} text-sm rounded-lg p-2.5 w-full`}
                type="text"
                value={formData.voter_id}
                onChange={(e) => setData('voter_id', e.target.value)}
                disabled={formData.voter_status === 'Unregistered'}
                required
              />
              {errors.voter_id && <p className="text-red-500 text-xs mt-1">{errors.voter_id}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-3"
            disabled={processing}
          >
            {processing ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
