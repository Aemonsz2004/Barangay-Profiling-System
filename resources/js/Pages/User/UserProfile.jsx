import Profile from '@/Components/UserComponents/RegiserBarangayProfile'
import UserLayout from '@/Layouts/UserLayout/UserLayout'
import React, {useState} from 'react'

import { Link } from '@inertiajs/react'

const UserProfile = ({

}) => {


  
  return (

    <UserLayout>
      
      <Link href={route('register-barangay-profile')}>
        Register barangay profile
      </Link>
      
      <Profile>
      </Profile>
      
    </UserLayout>
  )
}

export default UserProfile


