import { useState } from 'react';

const useFormState = (initialData) => {
    const [data, setData] = useState(initialData);

    const isValueChanged = (fieldName) => {
        return initialData[fieldName] !== data[fieldName];
    };

    const handleChange = (fieldName) => (e) => {
        setData((prev) => ({ ...prev, [fieldName]: e.target.value }));
    };

    return { data, handleChange, isValueChanged };
};

export default useFormState;