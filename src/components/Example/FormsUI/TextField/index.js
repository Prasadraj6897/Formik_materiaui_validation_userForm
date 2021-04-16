import React, {  } from 'react'
import TextField from '@material-ui/core/TextField';
import{useField} from 'formik'

const TextFieldWrapper = ({name, ...otherProps}) =>{

    const [field, mata] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant: 'outlined'
    }
    if(mata && mata.touched && mata.error){
        configTextfield.error = true; //shows red
        configTextfield.helperText = mata.error; // shows custom error message
    }

    return(
        <TextField {...configTextfield}/>
    )
}

export default TextFieldWrapper;