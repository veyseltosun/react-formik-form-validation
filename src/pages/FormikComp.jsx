import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const initialValues = {
    name:"",
    email:"",
    userName:"",

};

const onSubmit = (values) => {console.log("formik", values)};

const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    userName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required')
});
      
function FormikComp() {
  
         
   

    
  return (
    <div className='container'>
           <h1>Simple Form</h1>
           
           
           
           
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >

        <Form className='formStyle' >
            <label htmlFor='name' >Name</label>
            <Field type="text" 
             id="name" 
             name="name" 
             />
             <ErrorMessage name='name'/>
           

            <label htmlFor='email' >Email</label>
            <Field type="text"
             id="email"
            
             name="email"
            />
            <ErrorMessage name='email'/>
           
            <label htmlFor='userName' >User Name</label>
            <Field type="text"
             
             name="userName" 
            />
            <ErrorMessage name='userName'/>
            

            <button type='submit' className='btn-submit'>Submit</button>
        </Form>

    </Formik>
</div> 
        
  )
}

export default FormikComp;