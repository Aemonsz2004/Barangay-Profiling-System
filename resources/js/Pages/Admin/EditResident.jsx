import Layout from '@/Layouts/Layout'
import React from 'react'
import { Link } from '@inertiajs/react';

const EditResident = ({
  title, resident
}) => {



  console.log("Resident data:", resident); // Debugging

  return (
    <Layout
    page_title={title}
    >

    {/* main container */}
    <main className='bg-gray-200 min-h-[100vh] p-5 rounded-2xl'>
      <h1 className='mb-5 text-2xl'>Resident</h1>

{/* container */}
      <div className='flex bg-white rounded-2xl min-h-[100%]'>

{/* sidebar */}
        <aside className='pr-20 p-5 mr-5 border-r-2'>
          <ul className='flex flex-col gap-2'>
            <Link className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Residents</Link>
            <Link className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Add Residents</Link>
            <Link className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Add Households</Link>
            <Link className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Pending Residents Approval</Link>
          </ul>
        </aside>

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
                  {resident.first_name + ' ' + (resident.middle_name ? resident.middle_name : ' ') + ' ' + resident.last_name}
                </h3>

                <div>

                  <p className='text-sm'>
                    Resident ID: {resident.id}
                  </p>
                  <p className='text-sm'>
                    Resident Description
                  </p>
                </div>

              </div>

              </div>

            <div className='border rounded-full p-2'>
              <button>Edit <span>icon</span></button>
            </div>
          </div>



        {/* second container */}
          <div className='border rounded-2xl p-2'>
          <div className='flex justify-between items-center p-2'>

            <h2 className='font-bold'>Personal Information</h2>
            <div className='border rounded-full p-2'>
              <button>Edit <span>icon</span></button>
            </div>
            
          </div>


            <div className='flex p-2'>

              <div className='mr-20 flex flex-col gap-5'>
                <div>
                  <h3 className=''>FirstName</h3>
                  <p>{resident.first_name}</p>
                </div>

                <div>
                  <h3>Middle Name</h3>
                  <p>{resident.middle_name}</p>
                </div>

                <div>
                  <h3>Suffix</h3>
                  <p>{resident.suffix ? resident.suffix : 'N/A'}</p>
                </div>

                <div>
                  <h3>Email Address(not yet added)</h3>
                  <p>email name</p>
                </div>

                <div>
                  <h3>Gender</h3>
                  <p>{resident.gender}</p>
                </div>
                
                <div>
                  <h3>Phone</h3>
                  <p>{resident.contact_number}</p>
                </div>

              </div>

              <div className='flex flex-col gap-5'>

                <div>
                  <h3>Last Name</h3>
                  <p>{resident.last_name}</p>
                </div>

                <div>
                  <h3>Birthdate</h3>
                  <p>{resident.birthdate}</p>
                </div>

                <div>
                  <h3>Civil Status</h3>
                  <p>{resident.civil_status}</p>
                </div>

                <div>
                  <h3>Education Level</h3>
                  <p>{resident.education_level}</p>
                </div>

                <div>
                  <h3>Registration Year</h3>
                  <p>{resident.registration_year}</p>
                </div>

                <div>
                  <h3>Occupation</h3>
                  <p>{resident.occupation}</p>
                </div>

              </div>

              


            </div>

          </div>


    {/* 2nd contianer */}
          <div className='border rounded-2xl p-2'>
            <div className='flex justify-between items-center p-2'>

              <h2 className='font-bold'>Address</h2>
              <div className='border rounded-full p-2'>
                <button>Edit <span>icon</span></button>
              </div>
              
            </div>


            <div className='flex p-2'>

              <div className='mr-20 flex flex-col gap-5'>
                <div>
                  <h3>Address</h3>
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
                  <h3>address</h3>
                  <p>Address</p>
                </div>

              </div>
            </div>

          </div>



        </div>
      </div>

      </div>
    </main>
    
      
    </Layout>
  )
}

export default EditResident