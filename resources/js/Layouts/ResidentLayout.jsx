import React from 'react'
import { Link, usePage } from '@inertiajs/react'
import Layout from './Layout'

const ResidentLayout = ({ children, className, title }) => {
  // Get current URL of the page
  const { url } = usePage();

  return (
    <Layout page_title={'Residents & Households'}
    className={'min-h-screen h-full'}>
      {/* Main container (Fixed Background) */}
      <main className="bg-gray-200 min-h-screen h-full w-full p-5 rounded-2xl">

        <h1 className="mb-5  text-2xl">{title}</h1>

        {/* Flex container */}
        <div className="flex bg-white rounded-2xl min-h-full">
          
          {/* Sidebar (Fixed Width, Non-Scrollable) */}
          <aside className="w-[250px] min-w-[250px] max-w-[250px] p-5 mr-5 border-r-2 sticky top-0 h-screen overflow-hidden">
            <ul className="flex flex-col gap-2">
              <Link href="/residents-and-households/resident" className={`${url === ('/residents-and-households/resident') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700 p-2 rounded-lg`}>
                All Data
              </Link>
              <Link href={route('register-resident')} className={`${url === ('/residents-and-households/register-resident') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700 p-2 rounded-lg`}>
                Register Resident
              </Link>
              <Link href={route('register-business')} className={`${url === ('/residents-and-households/register-business') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700 p-2 rounded-lg`}>
                Register Business
              </Link>
              <Link href={route('add-social-service')} className={`${url === ('/residents-and-households/add-social-service') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700 p-2 rounded-lg`}>
                Add Social Services
              </Link>
              <Link href={route('add-event')} className={`${url === ('/residents-and-households/add-community-engagement') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700 p-2 rounded-lg`}>
                Add Events
              </Link>
              <Link href={route('deleted-datas')} className={`${url === ('/residents-and-households/deleted-datas') ? 'bg-blue-500 text-white' : 'hover:bg-blue-200 hover:text-blue-700'} text-gray-700 p-2 rounded-lg`}>
                Deleted Data
              </Link>
            </ul>
          </aside>

          {/* Main Content (Scrollable) */}
          <div className={`${className} flex-1 overflow-x-auto min-h-screen`}>
            <h2 className="p-3 text-md">{title}</h2>

            <div className="flex flex-col gap-5 mr-10">
              {children}
            </div>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default ResidentLayout
