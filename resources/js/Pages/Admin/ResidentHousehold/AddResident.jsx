import ResidentLayout from '@/Layouts/ResidentLayout'
import React from 'react'
import { useForm } from '@inertiajs/react'


const AddResident = ({
  title,
}) => {

  const { data, setData, post, processing, errors } = useForm({
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
          terms: false,
      });

const handleSubmit = (e) => {
  e.preventDefault();
  
  post('/residents-and-households/add-resident');
}


  return (
    <ResidentLayout
    title={title}
    >

<div className=' w-full'>

<h2 className='p-3 text-md' >Resident Profile</h2>

<form className='' onSubmit={handleSubmit}>

{/* column flex for all rectangles */}
  <div className='flex flex-col mr-10 gap-5'>


    
    
    {/* first */}
<div className='flex items-center justify-center'>


  <div className='border p-2 rounded-2xl mr-5'>
      <div className='rounded-full bg-gray-200 aspect-square w-[180px]  flex items-center justify-center '>
          <img className='object-cover' src='' alt='iamge'></img>
      </div>
  </div>



  {/* first container */}
    <div className='flex gap-5 flex-wrap items-center border w-full p-3 rounded-2xl'>

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
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
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
              <option>LGBTQ+</option>
            </select>
            {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
        </div>
      </div>
    </div>
    
</div>

{/* Second container */}
<div className='flex gap-5 w-full'>
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

  <div className='border rounded-2xl p-3'>
    <div className='flex flex-col gap-5 flex-wrap items-start '>
          
          <h1>Identification Details</h1>
    
          <div className='flex  gap-5 flex-wrap items-center'>
            <div>
              <label>Voter Status</label>
              <select
                  className={`bg-white border ${
                      errors.voter_status ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
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
                      errors.name ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                  type="name"
                  id="name"
                  value={data.name}
                  placeholder='name'
                  onChange={(e) => setData('name', e.target.value)}
                  autoComplete="name"
                  required
              />
              {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
          </div>

          <div>
              <label>Philhealth ID</label>
              <input
                  className={`bg-white border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                  type="name"
                  id="name"
                  value={data.name}
                  placeholder='name'
                  onChange={(e) => setData('name', e.target.value)}
                  autoComplete="name"
                  required
              />
              {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
          </div>

          <div>
              <label>Pag-IBIG ID</label>
              <input
                  className={`bg-white border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                  type="name"
                  id="name"
                  value={data.name}
                  placeholder='name'
                  onChange={(e) => setData('name', e.target.value)}
                  autoComplete="name"
                  required
              />
              {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
          </div>

          <div>
              <label>Email Address</label>
              <input
                  className={`bg-white border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                  } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                  type="name"
                  id="name"
                  value={data.name}
                  placeholder='name'
                  onChange={(e) => setData('name', e.target.value)}
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

</div>


    {/* Third contianer */}
      <div className='border rounded-2xl p-2'>
        <div className='flex flex-col gap-5 flex-wrap items-start '>
            
            <h1>Other Information</h1>
      
            <div className='flex  gap-5 flex-wrap items-center'>
              <div>
                <label>Civil Status</label>
                <input
                    className={`bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="name"
                    id="name"
                    value={data.name}
                    placeholder='name'
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>
      
      
            <div>
                <label>Religion</label>
                <input
                    className={`bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="name"
                    id="name"
                    value={data.name}
                    placeholder='name'
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>
      
            <div>
                <label>Education Level</label>
                <input
                    className={`bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="name"
                    id="name"
                    value={data.name}
                    placeholder='name'
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label>Occupation</label>
                <input
                    className={`bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="name"
                    id="name"
                    value={data.name}
                    placeholder='name'
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label>Household ID</label>
                <input
                    className={`bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="name"
                    id="name"
                    value={data.name}
                    placeholder='name'
                    onChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
            </div>

            <div>
                <label>Registration Year</label>
                <input
                    className={`bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 `}
                    type="name"
                    id="name"
                    value={data.name}
                    placeholder='name'
                    onChange={(e) => setData('name', e.target.value)}
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
    </div>
  </form>
</div>

    
    
    </ResidentLayout>
  )
}

export default AddResident