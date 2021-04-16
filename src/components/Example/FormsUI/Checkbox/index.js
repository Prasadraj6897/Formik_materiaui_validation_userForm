import React from 'react'
import CheckBox from '@material-ui/core/Checkbox'
import {FormControl, FormControlLabel, FormGroup, FormLabel} from '@material-ui/core'
import {useField, useFormikContext} from "formik"

let CheckBoxWrapper = ({
    name,
    label,
    legend,
    ...OtherProps
}) => {

    const {setFieldValue} = useFormikContext();

    const [field, meta] = useField(name)

    const handleChange = event =>{
        const {checked} = event.target;
        setFieldValue(name, checked)
    }
    const configCheckBox = {
        ...field,
        onChange:handleChange,
    }

    const configformcontrol = {};

    if(meta && meta.touched && meta.error){
        configformcontrol.error = true
    }


    return(
        <FormControl {...configformcontrol}>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel 
                    control={<CheckBox  {...configCheckBox}/>}
                    label={label}
                
                /> 
            </FormGroup>
        </FormControl>
    )
}

export default CheckBoxWrapper;