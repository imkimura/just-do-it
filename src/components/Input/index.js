import React, {InputHTMLAttributes} from 'react';

import './styles.css';

const Input = ({name, label, ...rest}) => {

    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest} />
        </div>
    )
}

export default Input;