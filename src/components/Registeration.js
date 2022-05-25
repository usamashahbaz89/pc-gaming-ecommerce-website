import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

const Registration = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .required('Required'),
    lastName: Yup.string()
     
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
      .required('Required'),
    
    flexRadioDefault: Yup.boolean()
    .oneOf([0 , 1], 'Selecting a gender field is required')
    .required('Required'),
    
    

    
      })
    
  
  return (
    <Formik
      initialValues={{
        
        firstName: '',
        lastName: '',
        flexRadioDefault:'',
        
        
        
      }}
      validationSchema={validate}
      onSubmit={values => {
         console.log(values)
        
      }}
    >
      {formik => (
        
        
        <div className="container" style={{height:"auto", width:"70%", borderStyle:"solid", marginLeft:"200px", marginTop:"50px", borderRadius:"30px"}}>
          <div className="container" style={{width:"80%"}}>
          <h2 className="my-4 font-weight-bold .display-4" style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white", borderRadius:"20px" }}>Register In Gaming Contest and Win a Card Free</h2></div>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            

            <div style={{height:"20px"}}></div>
            
            <label><h6 style={{marginRight:"770px"}}>Gender</h6></label>
            <div class="form-check">
  <input class="form-check-input" type="radio"  id="flexRadioDefault1" name="flexRadioDefault" />
  <label class="form-check-label" for="flexRadioDefault1"  style={{marginRight:"800px"}}>
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  id="flexRadioDefault2" name="flexRadioDefault"/>
  <label class="form-check-label" for="flexRadioDefault2"  style={{marginRight:"800px"}}>
    Female
  </label>
  
  

<label for="formFileSm" class="form-label">Picture Upload</label>
<input class="form-control form-control-sm" id="formFileSm" type="file" name="Image" accept=".png" onchange="validateFileType()"/>

</div>
         <div style={{marginBottom:"20px"}}>
            <button className="btn btn-dark mt-3" type="submit" disabled={formik.isValid}>Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset" style={{marginLeft:"20px"}}>Reset</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Registration