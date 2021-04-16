import React from 'react'
import { TextField, MenuItem } from '@material-ui/core';
import{useField} from 'formik'


let DatePicker = (
    {name,
    ...otherProps}
) =>{
    const [field, mata] = useField(name);

    const configDateTimePicker={
        ...field,
        ...otherProps,
        type:'date',
        variant:'outlined',
        fullWidth:true,
        InputLabelProps: {
            shrink:true,
        }
    }
    if(mata && mata.touched && mata.error){
        configDateTimePicker.error = true; //shows red
        configDateTimePicker.helperText = mata.error; // shows custom error message
    }
    return(
        <TextField
            {...configDateTimePicker}
        />
    )
}

export default DatePicker;