import React from 'react';
import cl from "./StyledInput.module.css"
const StyledInput = (props) => {
    return (
        <div>
            <input {...props} className={cl.input}/>
        </div>
    );
};

export default StyledInput;