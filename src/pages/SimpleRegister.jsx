import React from 'react';
import {useFormik} from "formik";


function SimpleRegister() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            userName:"",
        },
        onSubmit:values => {console.log("formik", values)},
        validate:values=>{
            let errors = {}
            if (!values.name) {
                errors.name = "Required. Please fill area."
            }
            if (!values.email) {
                errors.email = "Required. Please fill area."
            }
            else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)){
                errors.email= "Invalid email address"
            }
            if (!values.userName) {
                errors.userName = "Required. Please fill user name."
            }
            return errors
        }
         
    })

    
  return (
    <div className='container'>

        <h1>Simple Form</h1>
        <form className='formStyle' onSubmit={formik.handleSubmit}>
            <label htmlFor='name' >Name</label>
            <input type="text" id="name" name="name" 
            onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
            {formik.touched.name && formik.errors.name?<div>{formik.errors.name}</div>: null}

            <label htmlFor='email' >Email</label>
            <input type="text" id="email" name="email" onBlur={formik.handleBlur}
            onChange={formik.handleChange} value={formik.values.email}></input>
            {formik.errors.email?<div>{formik.errors.email}</div>:null}
            <label htmlFor='userName' >User Name</label>
            <input type="text" id="userName" name="userName" onBlur={formik.handleBlur}
            onChange={formik.handleChange} value={formik.values.userName}></input>
            {formik.errors.userName ? <div>{formik.errors.userName}</div>:null}

            <button type='submit' className='btn-submit'>Submit</button>
        </form>

    </div>
  )
}

export default SimpleRegister