import UserLayout from '@/Layouts/UserLayout/UserLayout'
import React from 'react'
import RegisterBarangayProfile from '@/Components/UserComponents/RegiserBarangayProfile'



const UserBarangayRegister = ({
    title,
    user
}) => {





    return (
        <UserLayout
        page_title={title}>

    <div className='bg-white rounded-2xl p-3'>


        {user.pendingResident ? (
            <p>Your resident profile is pending approval.</p>
        ) : user.resident ? (
            <p>You already have an approved resident profile.</p>
        ) : (
    
            <div className='bg-white rounded-2xl p-3'>
                <RegisterBarangayProfile
                title={'Register Barangay Profile'}
                buttonName={'Register'}
                post_route_name={'/residents'}
                >

                </RegisterBarangayProfile>
            </div>
        )}
        
    </div>
    
        </UserLayout>
    )
}

export default UserBarangayRegister