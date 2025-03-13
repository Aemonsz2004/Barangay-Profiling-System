import { useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';

const Login = () => {
const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
email: '',
password: '',
remember: false,
});

// Clear errors when the user types into email or password
useEffect(() => {
if (data.email || data.password) {
    clearErrors();
}
}, [data.email, data.password]);

const handleSubmit = (e) => {
e.preventDefault();

post('/login', {
    onError: (serverErrors) => {
    // If specific field errors are not provided, but a global error exists, set it.
    if (!serverErrors.email && !serverErrors.password && serverErrors.error) {
        setError('error', serverErrors.error);
    }
    },
});
};

return (
<section className="bg-gray-200 dark:bg-gray-900"
        style={{ backgroundImage: "url('/images/new_bg.jpg')"  }}>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-center mb-12 text-gray-900 md:text-2xl dark:text-white">
            Admin Login
        </h1>

        {/* Global error message */}
        {errors.error && (
            <p className="text-red-500 text-center text-sm mb-4">{errors.error}</p>
        )}

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <input
                type="email"
                id="email"
                value={data.email}
                placeholder="name@company.com"
                onChange={(e) => setData('email', e.target.value)}
                autoComplete="email"
                className={`bg-gray-50 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
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
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className={`bg-gray-50 border mb-10 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            </div>
            <button
            type="submit"
            disabled={processing}
            className={`w-full text-white ${
                processing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
            {processing ? 'Processing...' : 'Sign in'}
            </button>
        </form>
        </div>
    </div>
    </div>
</section>
);
};

export default Login;
