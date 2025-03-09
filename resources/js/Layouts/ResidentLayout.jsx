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
          <main className='bg-gray-200 min-h-[100vh]  w-full p-5 rounded-2xl'>
            <h1 className='mb-5 text-2xl'>{title}</h1>
      
            {/* container */}
            <div className='flex bg-white overflow-y-hidden rounded-2xl min-h-[100%]'>
      
              {/* sidebar */}
              <aside className='pr-10 p-5 mr-5 border-r-2'>
                <ul className='flex flex-col gap-2'>
                  <Link href='/residents-and-households/resident' className={`${url === ('/residents-and-households/resident') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700  p-2 rounded-lg`}>All Data</Link>
                  <Link href={route('register-resident')} className={`${url === ('/residents-and-households/register-resident') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700  p-2 rounded-lg`}>Register Resident</Link>
                  <Link href={route('register-business')} className={`${url === ('/residents-and-households/register-business') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700  p-2 rounded-lg`}>Register Business</Link>
                  <Link href={route('add-social-service')} className={`${url === ('/residents-and-households/add-social-service') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700  p-2 rounded-lg`}>Add Social Services</Link>
                  <Link href={route('add-event')} className={`${url === ('/residents-and-households/community-engagement') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700  p-2 rounded-lg`}>Add Events</Link>
                  <Link href={route('deleted-datas')} className={`${url === ('/residents-and-households/deleted-datas') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700  p-2 rounded-lg`}>Deleted Datas</Link>

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