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
<div className='flex '>
  <div className='border p-2 rounded-2xl mr-5'>
      <div className='rounded-full bg-gray-200 aspect-square w-[180px]  flex items-center justify-center '>
          <img className='object-cover' src='' alt='iamge'></img>
      </div>
  </div>
    <div className='flex justify-between items-center border w-full p-3 rounded-2xl'>




        <div className='flex flex-col justify-center gap-2'>

          <div>
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


    {/* second container */}
    <div className='border rounded-2xl p-2'>
    <div className='flex justify-between items-center p-2'>

      <h2 className='font-bold'>Personal Information</h2>
      <div className='border rounded-full p-2'>
        <button>Edit <span>lapis</span></button>
      </div>
      
    </div>


      <div className='flex p-2'>

        <div className='mr-10 flex flex-col gap-5'>
          <div>
            <h3>FirstName</h3>
            <p>Name</p>
          </div>

          <div>
            <h3>Email Address</h3>
            <p>aemoan@gmai.com</p>
          </div>

          <div>
            <h3>Bio</h3>
            <p>asdmasd</p>
          </div>

        </div>

        <div className='flex flex-col gap-5'>

          <div>
            <h3>Last Name</h3>
            <p>last name nako</p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>0912313123</p>
          </div>

        </div>
      </div>

    </div>


    {/* 2nd contianer */}
    <div className='border rounded-2xl p-2'>
      <div className='flex justify-between items-center p-2'>

        <h2 className='font-bold'>Address</h2>
        <div className='border rounded-full p-2'>
          <button>Edit <span>lapis</span></button>
        </div>
        
      </div>


      <div className='flex p-2'>

        <div className='mr-10 flex flex-col gap-5'>
          <div>
            <h3>FirstName</h3>
            <p>Name</p>
          </div>

          <div>
            <h3>Email Address</h3>
            <p>aemoan@gmai.com</p>
          </div>

          <div>
            <h3>Bio</h3>
            <p>asdmasd</p>
          </div>

        </div>

        <div className='flex flex-col gap-5'>

          <div>
            <h3>Last Name</h3>
            <p>last name nako</p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>0912313123</p>
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