import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const Register = () => {
    const { data, setData, post, processing, errors, setError } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user',
        terms: false,
    });

    const [customErrors, setCustomErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Reset custom errors
        setCustomErrors({});

        // Custom validation for password confirmation
        if (data.password !== data.password_confirmation) {
            setCustomErrors({ password_confirmation: 'Passwords do not match' });
            return;
        }

        // Send request to Laravel
        post('/register');
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input
                                    className={`bg-gray-50 border ${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    autoComplete="name"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    className={`bg-gray-50 border ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    placeholder="example@domain.com"
                                    onChange={(e) => setData('email', e.target.value)}
                                    autoComplete="email"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    className={`bg-gray-50 border ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    autoComplete="new-password"
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirm password
                                </label>
                                <input
                                    className={`bg-gray-50 border ${
                                        errors.password_confirmation || customErrors.password_confirmation ? 'border-red-500' : 'border-gray-300'
                                    } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    type="password"
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    autoComplete="new-password"
                                    required
                                />
                                {(errors.password_confirmation || customErrors.password_confirmation) && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password_confirmation || customErrors.password_confirmation}</p>
                                )}
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={data.terms}
                                        onChange={(e) => setData('terms', e.target.checked)}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the{' '}
                                        <a className="font-medium text-blue-600 hover:underline" href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                    {errors.terms && (
                                        <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full text-white ${
                                    processing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                                } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                            >
                                {processing ? 'Processing...' : 'Create an account'}
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{' '}
                                <Link href={route('login')} className="font-medium text-blue-600 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
