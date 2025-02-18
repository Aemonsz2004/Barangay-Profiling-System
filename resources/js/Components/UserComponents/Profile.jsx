import React from 'react'

const Profile = () => {
  return (
    <div className=' w-full bg-white rounded-xl p-5 '>

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


  <div className='grid grid-cols-3 gap-10 p-2'>

    <div className=' flex flex-col gap-5'>
      <div>
        <h3>First Name</h3>
        <p>Name</p>
      </div>

      <div>
        <h3>Middle Name</h3>
        <p>name</p>
      </div>

      <div>
        <h3>Birth Date</h3>
        <p>birthdate</p>
      </div>

      <div>
        <h3>Gender</h3>
        <p>gender</p>
      </div>

      <div>
        <h3>Civil Status</h3>
        <p>single</p>
      </div>

      <div>
        <h3>Education Level</h3>
        <p>primary</p>
      </div>

    </div>

    <div className='flex flex-col gap-5 '>

      <div>
        <h3>Occupation</h3>
        <p>data</p>
      </div>


      <div>
        <h3>Religion</h3>
        <p>data</p>
      </div>

      <div>
        <h3>Philhealth ID</h3>
        <p>id</p>
      </div>

      <div>
        <h3>SSS</h3>
        <p>data</p>
      </div>

      <div>
        <h3>Pagibig ID</h3>
        <p>id</p>
      </div>

      <div>
        <h3>Voter Status</h3>
        <p>status</p>
      </div>

    </div>

    <div>

      <div>
        <h3>Household ID</h3>
        <p>id</p>
      </div>

    </div>

  </div>
</div>


{/* 2nd contianer */}
<div className='border flex flex-col rounded-2xl p-2'>

  <div className='flex justify-between items-center p-2'>

    <h2 className='font-bold'>Address</h2>
    <div className='border rounded-full p-2'>
      <button>Edit <span>lapis</span></button>
    </div>
    
  </div>


      <div className='p-2 grid grid-cols-3 gap-10'>

        <div className=' flex flex-col gap-5'>

          <div>
            <h3>Address</h3>
            <p>address</p>
          </div>

          <div>
            <h3>Email Address</h3>
            <p>aemoan@gmai.com</p>
          </div>

          <div>
            <h3>Contact Number</h3>
            <p>number</p>
          </div>

        </div>
        
    {/* 2nd and 3rd columns */}
        <div></div>
        <div></div>

      </div>


    </div>

  </div>
</div>
  )
}

export default Profile