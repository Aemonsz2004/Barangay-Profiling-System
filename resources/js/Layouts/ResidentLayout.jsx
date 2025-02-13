import React from 'react'
import { Link, usePage } from '@inertiajs/react'
import Layout from './Layout'





const ResidentLayout = ({
  children,
  className,
  title,
  
}) => {


  // get currrent url of the page
  const {url} = usePage();

  return (

    <Layout
    page_title={'Residents & Households'}
    >
          {/* main container */}
          <main className='bg-gray-200 min-h-[100vh] p-5 rounded-2xl'>
            <h1 className='mb-5 text-2xl'>{title}</h1>
      
      {/* container */}
            <div className='flex bg-white rounded-2xl min-h-[100%]'>
      
      {/* sidebar */}
              <aside className='pr-20 p-5 mr-5 border-r-2'>
                <ul className='flex flex-col gap-2'>
                  <Link href={'resident'} className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Residents</Link>
                  <Link href={route('add-resident')} className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Add Residents</Link>
                  <Link href={route('add-household')} className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Add Households</Link>
                  <Link href={route('pending-resident')} className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Pending Residents Approval</Link>
                  <Link href={route('pending-business')} className='text-gray-700 hover:bg-blue-200 hover:text-blue-700 p-2 rounded-full'>Pending Business Approval</Link>
                </ul>
              </aside>

              <div className={`${className} w-full`}>
                <h2 className='p-3 text-md' >{title}</h2>

                <div className='flex flex-col mr-10 gap-5'>
                  {children}
                </div>

              </div>

      
            </div>
          </main>
    </Layout>
    

  )
}

export default ResidentLayout