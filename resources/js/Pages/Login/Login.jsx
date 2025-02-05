import React, { useState, useEffect } from 'react'
import malenia from '../../../../public/images/malenia.jpg'
import bg_image from '../../../../public/images/bg-login.jpg'
import { Inertia } from '@inertiajs/inertia';


const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  
  const validateEmail = (email) => {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {email: '', password: ''};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address (e.g., example@domain.com). "
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    }

    setErrors(newErrors);

    if ((!newErrors.email && email === 'admin123@admin.com') && (!newErrors.password && password === '123')) {
      Inertia.visit('/')
    }
    alert("Admin logged in successfully.")
  }

  return (
    <div
    style={{ backgroundImage: `url(${bg_image})` }}
    className='h-screen w-full bg-cover bg-center'>
    <div className="backdrop-blur-md z-1 bg-cover bg-center flex items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl h-[80%] w-full">
        <div className="hidden md:block md:w-1/2 bg-cover">
          <img className='object-cover object-right w-full h-full bg-cover '
          src={malenia}>
            </img>
        </div>
        <div className="flex flex-col h-full justify-center w-full p-8 lg:w-1/2">
          <p className="mb-10 text-2xl text-gray-600 text-center">Welcome Admin!</p>

          <form
          className=''
          onSubmit={handleSubmit} noValidate>

          <div className="mt-4">
            <label for="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              autocomplete="email"
              required
            />
          </div>
          <div>
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
          </div>

            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label for="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>

              </div>
              <input
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                autocomplete="current-password"
                required
              />
                <div>
              {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                </div>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>

          <div className="mt-8">
            <button type='submit' className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Login
            </button>
          </div>

          </form>
          <a
            href="#"
            className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login