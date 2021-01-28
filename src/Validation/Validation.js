import React from 'react';


const validation = ( props ) => {
    let validationMessage = "Text too short";
    if( props.inputlength <= 5){
        validationMessage = "Text too short";

    }
    else{
        validationMessage = "Text too long";
    }
    return (
        <div>
            <p>Length of string : {props.inputlength}</p>
            <p>{validationMessage}</p>


        </div> 
    )
};

export default validation;