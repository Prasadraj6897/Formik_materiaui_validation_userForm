import React, {  } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Formik, Form} from 'formik'
import * as Yup from "yup"
import Typography from '@material-ui/core/Typography';
import TextFieldWrapper from './FormsUI/TextField/index'
import {makeStyles} from '@material-ui/core/styles'
import SelectWrapper from './FormsUI/Select/index'
import DatePicker from "./FormsUI/DatePicker/index"
import CheckBoxWrapper from "./FormsUI/Checkbox/index"
import ButtonWrapper from './FormsUI/Button/index'

import countries from './FormsUI/data/countries.json'


const useStyles = makeStyles((theme) =>({
    formWrapper: {
        marginTop : theme.spacing(5),
        marginBottom : theme.spacing(8),
    },
    grid: {
        marginTop : theme.spacing(2),
        marginBottom : theme.spacing(2),
        // marginRight: theme.spacing(2),
    },
   
}))

const INITIAL_FORM_STATE = {
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    country:'',
    arrivalDate:'',
    depatureDate:'',
    message:'',
    termsOfService:false,
}

    //Schema 
const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
        .required('Required'),
    
    lastName: Yup.string()
        .required('Required'),

    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),

    phone: Yup.number()
        .integer()
        .typeError('Please Enter a valid phone number')
        .required('Required'),

    addressLine1: Yup.string()
        .required('Required'),
    
    addressLine2: Yup.string(),
    
    city: Yup.string()
        .required('Required'),

    state: Yup.string()
        .required('Required'),

    country: Yup.string()
        .required('Required'),

    arrivalDate: Yup.date()
        .required('Required'),

    depatureDate: Yup.date()
        .required('Required'),
    
    message: Yup.string(),

    termsOfService: Yup.boolean()
        .oneOf([true], "The terms and Conditions are must accepted.")
        .required('The terms and Conditions are must accepted.')

})

let handleSubmit = (e) => {
    console.log(e)
}

let Account = () => {
    const classes = useStyles();
    
    return (
        <Grid container>
            <Grid xs={12}>
                <Container maxWidth="md">
                    <div className = {classes.formWrapper}>
                        <h5>Account</h5>
                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE
                            }}

                            validationSchema = {FORM_VALIDATION}
                            onSubmit = {handleSubmit}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} className = {classes.grid}>
                                        <Typography>
                                            Details
                                        </Typography>
                                    </Grid>
                                    <Grid xs={6} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="firstName"
                                            label="First Name"
                                        />
                                    </Grid>

                                    <Grid xs={6} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="lastName"
                                            label="Last Name"
                                        />
                                    </Grid>

                                    <Grid xs={12} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="email"
                                            label="Email"
                                        />
                                    </Grid>

                                    <Grid xs={12} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="phone"
                                            label="Phone"
                                        />
                                    </Grid>
                                    <Grid item xs={12} className = {classes.grid}>
                                        <Typography >
                                            Address
                                        </Typography>
                                    </Grid>
                                    
                                    <Grid xs={12} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="addressLine1"
                                            label="Address Line 1"
                                        />
                                    </Grid>
                                    <Grid xs={12} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="addressLine2"
                                            label="Address Line 2"
                                        />
                                    </Grid>

                                    <Grid xs={6} className = {classes.grid }>
                                        <TextFieldWrapper 
                                            name="city"
                                            label="City"
                                        />
                                    </Grid>

                                    <Grid xs={6} className = {classes.grid}>
                                        <TextFieldWrapper 
                                            name="state"
                                            label="State"
                                        />
                                    </Grid>

                                    <Grid xs={12} className = {classes.grid}>
                                        <SelectWrapper 
                                            name="country"
                                            options={countries}
                                            label='Country'
                                        />
                                    </Grid>

                                    

                                    <Grid item xs={12}>
                                        <Typography>
                                            Booking
                                        </Typography>
                                    </Grid>

                                    <Grid xs={6} className = {classes.grid}>
                                        <DatePicker 
                                            name="arrivalDate"
                                            label='Arrival Date'
                                        />
                                    </Grid>

                                    <Grid xs={6} className = {classes.grid}>
                                        <DatePicker 
                                            name="depatureDate"
                                            label='Depature Date'
                                        />
                                    </Grid>

                                    <Grid xs={12} className = {classes.grid}>
                                        < TextFieldWrapper
                                            name='message'
                                            label="Message"
                                            multiline={true}
                                            rows={4}
                                        />

                                    <Grid xs={12} className = {classes.grid}>
                                        <CheckBoxWrapper
                                            name='termsOfService'
                                            legend="Terms of Service"
                                            label="I agree"
                                            
                                            
                                        />
                                    </Grid>
                                    <Grid xs={12}>
                                        <ButtonWrapper>
                                            Submit
                                        </ButtonWrapper>
                                    </Grid>

                                    
                                    </Grid>


                                </Grid>
                            </Form> 
                        </Formik>
                    </div>
                </Container>
            </Grid>
        </Grid>
    )
}
export default Account;