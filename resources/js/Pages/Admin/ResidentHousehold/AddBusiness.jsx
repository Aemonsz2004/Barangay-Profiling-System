import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import { useForm } from '@inertiajs/react'

const AddBusiness = ({ title }) => {
    const { data, setData, post, processing, errors } = useForm({
        business_name: '',
        business_address: '',
        business_type: '',
        owner_name: '',
        contact_number: '',
        email: '',
        resident_id: '' // optional, if you want to associate a resident
    });

const handleSubmit = (e) => {
e.preventDefault();
post('/residents-and-households/register-business'); // update the URL to match your routes
console.log(data);
}

return (
<ResidentLayout title={title}>
    <div className="w-full p-4">
    <h2 className="text-lg mb-4">Register Business</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
        <label>Business Name</label>
        <input
            type="text"
            value={data.business_name}
            onChange={(e) => setData('business_name', e.target.value)}
            className={`w-full p-2 border rounded ${errors.business_name ? 'border-red-500' : 'border-gray-300'}`}
            
        />
        {errors.business_name && <p className="text-red-500 text-xs">{errors.business_name}</p>}
        </div>

        <div>
        <label>Business Address</label>
        <textarea
            value={data.business_address}
            onChange={(e) => setData('business_address', e.target.value)}
            className={`w-full p-2 border rounded ${errors.business_address ? 'border-red-500' : 'border-gray-300'}`}
        
        />
        {errors.business_address && <p className="text-red-500 text-xs">{errors.business_address}</p>}
        </div>

        <div>
        <label>Business Type</label>
        <select
            value={data.business_type}
            onChange={(e) => setData('business_type', e.target.value)}
            className={`w-full p-2 border rounded ${errors.business_type ? 'border-red-500' : 'border-gray-300'}`}
            
        >
            <option value="">Select business type</option>
            <option value="Retail">Retail</option>
            <option value="Service">Service</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
        </select>
        {errors.business_type && <p className="text-red-500 text-xs">{errors.business_type}</p>}
        </div>

        <div>
        <label>Owner Name</label>
        <input
            type="text"
            value={data.owner_name}
            onChange={(e) => setData('owner_name', e.target.value)}
            className={`w-full p-2 border rounded ${errors.owner_name ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.owner_name && <p className="text-red-500 text-xs">{errors.owner_name}</p>}
        </div>

        <div>
        <label>Contact Number</label>
        <input
            type="text"
            value={data.contact_number}
            onChange={(e) => setData('contact_number', e.target.value)}
            className={`w-full p-2 border rounded ${errors.contact_number ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.contact_number && <p className="text-red-500 text-xs">{errors.contact_number}</p>}
        </div>

        <div>
        <label>Email</label>
        <input
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div className="flex justify-end">
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
