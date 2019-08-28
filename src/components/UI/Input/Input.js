import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    let inputClassName = ['input-element'];
    if (props.valid && props.validation && props.touch) {
        inputClassName.push('invalid');   
    }

        switch(props.elementType) {

        case ('input'): 
        inputElement = <input className={inputClassName.join(' ')} 
                              {...props.elementConfig} 
                              value= {props.value}
                              onChange = {props.changed}/>;
        break;

        case ('textarea'): 
        inputElement = <textarea className={inputClassName.join(' ')} 
                                 {...props.elementConfig} 
                                 value= {props.value}
                                 onChange = {props.changed}/>;
        break;

        case ('select'): 
        inputElement = <select className={inputClassName.join(' ')}
                               value= {props.value}
                               onChange = {props.changed}>
                                   {props.elementConfig.options.map(option => {
                                       return (
                                       <option key = {option.value}
                                               value = {option.value}>{option.displayValue}</option>
                                       )
                                   })}
                               </select>
        break;
            default: inputElement = <input  className={inputClassName.join(' ')}
                                            {...props.elementConfig}
                                            value= {props.value}
                                            onChange = {props.changed}/>;
                                                                        
                                             
                                           

    }
    
    return (
        <div className='input'>
            <label className='label'>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;