import React from 'react';


const Checkbox = ({label, value, name, onChange}) => {
    return (
        <label className='checkmark'>
            <input name={name} type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    )
};

export default Checkbox;