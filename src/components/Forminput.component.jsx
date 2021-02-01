import React from 'react'

import './forminput.styles.scss'

const FormInput =({hadleChange, lable, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={hadleChange} {...otherProps}/>
        {lable ? 
        (<label
            className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{lable}</label>)
            : null
        }
    
    </div>
)
export default FormInput;