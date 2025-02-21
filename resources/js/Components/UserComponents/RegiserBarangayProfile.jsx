import React from 'react'
import { router, useForm } from '@inertiajs/react'


const RegisterBarangayProfile= ({ title, post_route_name, buttonName }) => {
const { data, setData, post, processing, errors } = useForm({
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
    post(router.post(post_route_name), data);
}

return (



<div className=' w-full bg-white rounded-2xl p-3' >

<h2 className='p-3 text-md' >Resident Profile</h2>

<form onSubmit={handleSubmit}>

{/* column flex for all rectangles */}
    <div className='flex flex-col mr-10 gap-5'>


    
    
    {/* first */}
<div className='flex items-center justify-center'>


    <div className='border p-2 rounded-3xl mr-5'>
        <div className='rounded-2xl bg-gray-200 aspect-square w-[205px]  flex items-center justify-center '>
            <img className='object-cover' src='' alt='image'></img>
        </div>
    </div>



    {/* first container */}
    <div className=' flex min-h-[223px] flex-col  gap-5 flex-wrap  border w-full p-3 rounded-2xl'>

        <h1>Basic Information</h1>

        <div className='flex gap-5 flex-wrap items-center'>
            <div>
            <label>First Name</label>
            <input
                className={`bg-white border ${
                    errors.first_name ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                type="text"
                id="first_name"
                value={data.first_name}
                placeholder='first name'
                onChange={(e) => setData('first_name', e.target.value)}
                autoComplete="first_name"
                required
            />
            {errors.first_name && (
                <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
            )}
        </div>


        <div>
            <label>Middle Name</label>
            <input
                className={`bg-white border ${
                    errors.middle_name ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                type="text"
                id="name"
                value={data.middle_name}
                placeholder='midde name'
                onChange={(e) => setData('middle_name', e.target.value)}
                autoComplete="middle_nmae"
                required
            />
            {errors.middle_name && (
                <p className="text-red-500 text-xs mt-1">{errors.middle_name}</p>
            )}
        </div>


        <div>
            <label>Last Name</label>
            <input
                className={`bg-white border ${
                    errors.last_name ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                type="text"
                id="last_name"
                value={data.last_name}
                placeholder='last name'
                onChange={(e) => setData('last_name', e.target.value)}
                autoComplete="last_name"
                required
            />
            {errors.last_name && (
                <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
            )}
        </div>


        <div>
            <label>Suffix </label>
            <input
                className={`bg-white border  a ${
                    errors.suffix ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                type="text"
                id="suffix"
                value={data.suffix}
                placeholder='suffix'
                onChange={(e) => setData('suffix', e.target.value)}
                autoComplete="suffix"
                required
            />
            {errors.suffix && (
                <p className="text-red-500 text-xs mt-1">{errors.suffix}</p>
            )}
        </div>

        <div>
            <label>Birthdate</label>
            <input
                className={`bg-white border ${
                    errors.birthdate ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                type="date"
                id="name"
                value={data.birthdate}
                placeholder='birthdate'
                onChange={(e) => setData('birthdate', e.target.value)}
                autoComplete="birthdate"
                required
            />
            {errors.birthdate && (
                <p className="text-red-500 text-xs mt-1">{errors.birthdate}</p>
            )}
        </div>

        <div>
            <label>Gender</label>
            <select
                className={`bg-white border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[90px] p-2.5 `}
                type="text"
                id="name"
                value={data.gender}
                placeholder='gender'
                onChange={(e) => setData('gender', e.target.value)}
                autoComplete="gender"
                required
            >
                <option>Male</option>
                <option>Female</option>
                <option >LGBTQ+</option>
            </select>
            {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
        </div>
        </div>
    </div>
    
</div>

{/* Second container */}
<div className='flex gap-5'>
    <div className='flex flex-col gap-5 flex-wrap items-start border w-[425px] p-3 rounded-2xl'>
            
        <h1>Contact Information</h1>

        <div className='flex flex-col gap-5 flex-wrap items-center'>
        <div>
            <label>Addess</label>
            <input
                className={`bg-white border ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[400px] p-2.5 `}
                type="text"
                id="address"
                value={data.address}
                placeholder='address'
                onChange={(e) => setData('address', e.target.value)}
                autoComplete="address"
                required
            />
            {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
            )}
        </div>


        <div>
            <label>Contact Number</label>
            <input
                className={`bg-white border ${
                    errors.contact_number ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[400px] p-2.5 `}
                type="text"
                id="contact_number"
                value={data.contact_number}
                placeholder='09XX-XXXX-XXX'
                onChange={(e) => setData('contact_number', e.target.value)}
                autoComplete="contact_number"
                required
            />
            {errors.contact_number && (
                <p className="text-red-500 text-xs mt-1">{errors.contact_number}</p>
            )}
        </div>

        <div>
            <label>Email Address</label>
            <input
                className={`bg-white border ${
                    errors.email_address ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[400px] p-2.5 `}
                type="text"
                id="email_address"
                value={data.email_address}
                placeholder='example@domain.com'
                onChange={(e) => setData('email_address', e.target.value)}
                autoComplete="email_address"
                required
            />
            {errors.email_address && (
                <p className="text-red-500 text-xs mt-1">{errors.email_address  }</p>
            )}
        </div>
    </div>
    </div>

    <div className='border flex-grow rounded-2xl p-3'>
    <div className='flex flex-col gap-5 flex-wrap items-start '>
            
            <h1>Identification Details</h1>
    
            <div className='flex gap-5 flex-wrap items-center'>
            <div>
                <label>Voter Status</label>
                <select
                    className={`bg-white border ${
                        errors.voter_status ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[125px] p-2.5 `}
                    type="text"
                    id="voter_status"
                    value={data.voter_status}
                    placeholder='voter status'
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="voter_status"
                    required
                >
                <option>Registered</option>
                <option>Unregistered</option>
                </select>
                {errors.voter_status && (
                    <p className="text-red-500 text-xs mt-1">{errors.voter_status}</p>
                )}
            </div>
    
    
            <div>
                <label>Voter ID</label>
                <input
                    className={`bg-white border ${
                        errors.voter_id ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="voter_id"
                    value={data.voter_id}
                    placeholder='XXXXXXXXXXX'
                    onChange={(e) => setData('voter_id', e.target.value)}
                    autoComplete="name"
                    disabled={data.voter_status === 'Unregistered'}
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>
    
            <div>
                <label>SSS Number</label>
                <input
                    className={`bg-white border ${
                        errors.sss ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="sss"
                    value={data.sss}
                    placeholder='XXXXXXXXXXX'
                    onChange={(e) => setData('sss', e.target.value)}
                    autoComplete="sss"
                    required
                />
                {errors.sss && (
                    <p className="text-red-500 text-xs mt-1">{errors.sss}</p>
                )}
            </div>

            <div>
                <label>Philhealth ID</label>
                <input
                    className={`bg-white border ${
                        errors.philhealth_id ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="philhealth_id"
                    value={data.philhealth_id}
                    placeholder='XXXXXXXXXXX'
                    onChange={(e) => setData('philhealth_id', e.target.value)}
                    autoComplete="philhealth_id"
                    required
                />
                {errors.philhealth_id && (
                    <p className="text-red-500 text-xs mt-1">{errors.philhealth_id}</p>
                )}
            </div>

            <div>
                <label>Pag-IBIG ID</label>
                <input
                    className={`bg-white border ${
                        errors.pagibig_id ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="pagibig_id"
                    value={data.pagibig_id}
                    placeholder='XXXXXXXXXXX'
                    onChange={(e) => setData('pagibig_id', e.target.value)}
                    autoComplete="pagibig_id"
                    required
                />
                {errors.pagibig_id && (
                    <p className="text-red-500 text-xs mt-1">{errors.pagibig_id}</p>
                )}
            </div>
        </div>
        </div>
    </div>

</div>


    {/* Third contianer */}
        <div className='border rounded-2xl p-3'>
        <div className='flex flex-col gap-5 flex-wrap items-start '>
            
            <h1>Other Information</h1>
        
            <div className='flex  gap-5 flex-wrap items-center'>
                <div>
                <label>Civil Status</label>
                <select
                    className={`bg-white border ${
                        errors.civil_status ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[100px] p-2.5 `}
                    type="text"
                    id="civil_status"
                    value={data.civil_status}
                    placeholder='civil status'
                    onChange={(e) => setData('civil_status', e.target.value)}
                    autoComplete="civil_status"
                    required
                >
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                </select>
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>
        
        
            <div>
                <label>Religion</label>
                <input
                    className={`bg-white border ${
                        errors.religion ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="religion"
                    value={data.religion}
                    placeholder='religion'
                    onChange={(e) => setData('religion', e.target.value)}
                    autoComplete="religion"
                    required
                />
                {errors.religion && (
                    <p className="text-red-500 text-xs mt-1">{errors.religion}</p>
                )}
            </div>
        
            <div>
                <label>Education Level</label>
                <input
                    className={`bg-white border ${
                        errors.education_level ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="education_level"
                    value={data.education_level}
                    placeholder='education level'
                    onChange={(e) => setData('education_level', e.target.value)}
                    autoComplete="education_level"
                    required
                />
                {errors.education_level && (
                    <p className="text-red-500 text-xs mt-1">{errors.education_level}</p>
                )}
            </div>

            <div>
                <label>Occupation</label>
                <input
                    className={`bg-white border ${
                        errors.occupation ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="occupation"
                    value={data.occupation}
                    placeholder='occupation'
                    onChange={(e) => setData('occupation', e.target.value)}
                    autoComplete="occupation"
                    required
                />
                {errors.occupation && (
                    <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>
                )}
            </div>

            <div>
                <label>Household ID</label>
                <input
                    className={`bg-white border ${
                        errors.household_id ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="text"
                    id="household_id"
                    value={data.household_id}
                    placeholder='household id'
                    onChange={(e) => setData('household_id', e.target.value)}
                    autoComplete="household_id"
                    required
                />
                {errors.household_id && (
                    <p className="text-red-500 text-xs mt-1">{errors.household_id}</p>
                )}
            </div>

            <div>
                <label>Registration Year</label>
                <input
                    className={`bg-white border ${
                        errors.registration_year ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="date"
                    id="registration_year"
                    value={data.registration_year}
                    placeholder='registration year'
                    onChange={(e) => {
                        // const selectedDate = e.target.value;
                        // const year = selectedDate ? new Date(selectedDate).getFullYear() : '';
                        setData('registration_year', e.target.value);
                    }}
                    autoComplete="name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>
            </div>
        </div>
        </div>

        <div className='flex justify-end  '>
        <button type='submit' className='hover:bg-blue-300 bg-blue-500 w-[100px] text-white  h-[50px] p-2 m-5 rounded-full'>{buttonName}</button>
    </div>

    </div>
    </form>
</div>
);
};

export default RegisterBarangayProfile;