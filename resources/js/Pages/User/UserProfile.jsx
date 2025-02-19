import Profile from '@/Components/UserComponents/Profile'
import UserLayout from '@/Layouts/UserLayout/UserLayout'
import React, {useState} from 'react'


const UserProfile = () => {

  const [showForm, setShowForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)


  
  return (
    <UserLayout>

<div className='w-full min-h-[100%] bg-white flex items-center justify-center rounded-2xl'>

  {!showForm && !isSubmitted ? (
    <button onClick={() => {setShowForm(true)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
    Register Barangay Profile
    </button>
  ) : null}


      {showForm && <Profile
                    title={'User Profile'}
                    route_name={'pending-resident.store'}
                    
    />
}

</div>




    </UserLayout>
  )
}

export default UserProfile


