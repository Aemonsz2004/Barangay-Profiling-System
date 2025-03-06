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
business_permit_number: '',

business_status: 'Active', // default status
registration_year: '',
resident_id: '' // if you want to associate a resident, otherwise leave blank
});

const handleSubmit = (e) => {
e.preventDefault();
post('/businesses/store'); // update the URL to match your routes
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
            required
        />
        {errors.business_name && <p className="text-red-500 text-xs">{errors.business_name}</p>}
        </div>

        <div>
        <label>Business Address</label>
        <textarea
            value={data.business_address}
            onChange={(e) => setData('business_address', e.target.value)}
            className={`w-full p-2 border rounded ${errors.business_address ? 'border-red-500' : 'border-gray-300'}`}
            required
        />
        {errors.business_address && <p className="text-red-500 text-xs">{errors.business_address}</p>}
        </div>

        <div>
        <label>Business Type</label>
        <input
            type="text"
            value={data.business_type}
            onChange={(e) => setData('business_type', e.target.value)}
            className={`w-full p-2 border rounded ${errors.business_type ? 'border-red-500' : 'border-gray-300'}`}
            required
        />
        {errors.business_type && <p className="text-red-500 text-xs">{errors.business_type}</p>}
        </div>

        <div>
        <label>Owner Name</label>
        <input
            type="text"
            value={data.owner_name}
            onChange={(e) => setData('owner_name', e.target.value)}
            className={`w-full p-2 border rounded ${errors.owner_name ? 'border-red-500' : 'border-gray-300'}`}
            required
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

        {/* <div>
        <label>Business Permit Number</label>
        <input
            type="text"
            value={data.business_permit_number}
            onChange={(e) => setData('business_permit_number', e.target.value)}
            className={`w-full p-2 border rounded ${errors.business_permit_number ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.business_permit_number && <p className="text-red-500 text-xs">{errors.business_permit_number}</p>}
        </div> */}

        <div className="flex gap-4">
            {/* <div className="flex-1">
                <label>Permit Issue Date</label>
                <input
                type="date"
                value={data.permit_issue_date}
                onChange={(e) => setData('permit_issue_date', e.target.value)}
                className={`w-full p-2 border rounded ${errors.permit_issue_date ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.permit_issue_date && <p className="text-red-500 text-xs">{errors.permit_issue_date}</p>}
            </div>
            <div className="flex-1">
                <label>Permit Expiry Date</label>
                <input
                type="date"
                value={data.permit_expiry_date}
                onChange={(e) => setData('permit_expiry_date', e.target.value)}
                className={`w-full p-2 border rounded ${errors.permit_expiry_date ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.permit_expiry_date && <p className="text-red-500 text-xs">{errors.permit_expiry_date}</p>}
            </div> */}
        </div>

        <div className="flex gap-4">
            {/* <div className="flex-1">
                <label>Registration Year</label>
                <input
                type="number"
                value={data.registration_year}
                onChange={(e) => setData('registration_year', e.target.value)}
                className={`w-full p-2 border rounded ${errors.registration_year ? 'border-red-500' : 'border-gray-300'}`}
                required
                />
                {errors.registration_year && <p className="text-red-500 text-xs">{errors.registration_year}</p>}
            </div> */}
            <div className="flex-1">
                <label>Resident ID (optional)</label>
                <input
                type="text"
                value={data.resident_id}
                onChange={(e) => setData('resident_id', e.target.value)}
                className={`w-full p-2 border rounded ${errors.resident_id ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.resident_id && <p className="text-red-500 text-xs">{errors.resident_id}</p>}
            </div>
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
