import React, {useState} from 'react'
import '../../css/app.css';
import population_image from '../../../public/images/user.png'
import { Link } from '@inertiajs/react'

const Navbar = ({page_title}) => {

  // dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }
  const handleItemClick = () => {
    setIsDropdownVisible(false);
  }

  return (

    <div className='mb-10'>

      <nav className=" border-gray-200 ">
        <div className=" flex  bg-grey-200 z-10 items-center justify-between mr-10 pr-4">
              {/* <img src="../../../public/images/user.png" className="h-8" alt="Logo" /> */}
              <div className='flex flex-col '>
              <h3 className='text-sm'>Dashboard / {page_title}</h3>
              <span className=" block text-sm font-semibold  dark:text-black">{page_title}</span>

              </div>
      
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button> */}

          <div>

            <button className='pointer-events-none'>
              <img className='h-[50px] w-auto ' src={population_image} />
            </button>
            
            {isDropdownVisible && (
              <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1">
                <div className="py-1" role="none">
                  {/* <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" --> */}
                  <Link href={route('settings')}
                      onClick={handleItemClick}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0">
                      
                    Account settings
                  </Link>

                  <Link href={route('login')}
                      onClick={handleItemClick}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0">
                      
                    Logout
                  </Link>

                </div>
            </div>
            )}

          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar