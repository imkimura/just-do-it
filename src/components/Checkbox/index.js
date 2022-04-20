import React from 'react';


const Checkbox = ({label, value, name, onChange}) => {
    return (
        <label>
            <input name={name} type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    )
};

export default Checkbox;