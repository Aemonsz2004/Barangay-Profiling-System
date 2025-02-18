import Layout from '@/Layouts/Layout'
import React from 'react'
import { Link, usePage } from '@inertiajs/react';
import ResidentLayout from '@/Layouts/ResidentLayout';





const EditResident = ({
  title, resident
}) => {

  const url = usePage();

  console.log("Resident data:", resident); // Debugging

  return (
    <ResidentLayout
    title={title}
    >



<div className=' w-full'>

<h2 className='p-3 text-md' >Resident Profile</h2>


{/* column flex for all rectangles */}
<div className='flex flex-col mr-10 gap-5'>


{/* first */}
<div className='flex justify-between items-center border w-full p-3 rounded-2xl'>
  <div className='flex '>

    <div className='rounded-full bg-gray-200 aspect-square w-[100px] mr-5 flex items-center justify-center '>
      <img className='object-cover' src='' alt='iamge'></img>
    </div>

    <div className='flex flex-col gap-2'>
      <h3 className='text-lg'>
        name
      </h3>

      <div>

        <p className='text-sm'>
          description
        </p>
        <p className='text-sm'>
          description
        </p>
      </div>

    </div>

    </div>

  <div className='border rounded-full p-2'>
    <button>Edit <span>lapis</span></button>
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
</div>
    

    </ResidentLayout>
  )
}

export default EditResident