import React from 'react'

const InputField = ({
    label,
    type = 'text',
    value,
    defaultValue,
    onChange,
    isEditing,
    error,
    isChanged,
}) => {


    return (


        <div>
            <label>{label}</label>
            <input
                className={`bg-white border ${
                    error ? 'border-red-500' : 'border-gray-300'
                } text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    !isEditing ? 'border-opacity-25' : ''
                } ${
                    isChanged ? 'ring-2 ring-blue-500' : '' // Blue border if value changed
                }`}
                type={type}
                value={value}
                placeholder={defaultValue}
                onChange={onChange}
                disabled={!isEditing}
                required
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        
    )
}

export default InputField