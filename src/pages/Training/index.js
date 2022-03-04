import React, { useState } from 'react';
import { useLocation } from 'react-router';

const Training = () => {
    const location = useLocation();
    const {codigo} = location.state || '';
    
    console.log(codigo.codigo);

    return (
        <div>
            <p>Ola</p>
            <div>{codigo.codigo}</div>
        </div>
    );
}

export default Training;