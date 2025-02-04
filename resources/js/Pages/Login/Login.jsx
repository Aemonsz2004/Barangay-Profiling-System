import React, { useState, useEffect } from 'react'


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

    if (!newErrors.email && !newErrors.password ) {
      alert("Admin logged in successfully.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-[url('/images/malenia.jpg')] bg-cover " >
    {/* Blurred background overlay */}
    <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>
    
    <div className='bg-white/30 rounded-lg sm:mx-auto sm:w-full sm:max-w-sm p-5 backdrop-blur-md'>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Admin Login</h2>
      </div>
    
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} noValidate>

    {/* email field */}
          <div className=''>
            <label for="email" className="block text-3xl text-gray-900">Email address</label>
            <div className="mt-2">
              <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              autocomplete="email"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            </div>
    {/* error message email */}
            <div>
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>
          </div>
    
          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>

    {/* password field */}
            <div className="mt-2">
              <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              autocomplete="current-password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
    {/* error message password */}
            <div>
              {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
            </div>
          </div>
      
    {/* submit button */}
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
    
      </div>
    </div>
  </div>
  )
}

export default Login