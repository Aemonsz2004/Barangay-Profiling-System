import React, {useState} from 'react'
import '../../css/app.css';
import population_image from '../../../public/images/user.png'

import { Inertia } from '@inertiajs/inertia';

const Navbar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('isLoggedIn', 'false');
  
    Inertia.post('/logout', {}, {
      onSuccess: () => {
        Inertia.visit(route('login')); // Redirect to login using the Inertia `route()` helper.
      }
    });
  }

  // dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }
  const handleItemClick = () => {
    setIsDropdownVisible(false);
  }


  // // useref 
  // const dropdownRef = useRef(null);

  // useEffect(() => {
  //   // Function to handle clicks outside of the dropdown
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsDropdownVisible(false);
  //     }
  //   };

  return (

    <div>

      <nav className="bg-[--color-light] border-gray-200 mt-4 ">
        <div className=" flex items-center justify-between mx-10 p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src="../../../public/images/user.png" className="h-8" alt="Logo" /> */}
              <span className="self-center text-2xl font-semibold  dark:text-black">Dashboard</span>
          </a>
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button> */}

          <div>
            <button
              onClick={toggleDropdown}>
              <img className='h-[50px] w-auto' src={population_image} />
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
                  <a href="#"
                      onClick={handleItemClick}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0">
                      
                    Account settings
                  </a>
                  <form
                        onSubmit={handleSubmit}
                        method="POST"
                        action="#"
                        role="none">
                    <button
                        onClick={handleItemClick}
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3">
                      Sign out
                    </button>
                  </form>

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