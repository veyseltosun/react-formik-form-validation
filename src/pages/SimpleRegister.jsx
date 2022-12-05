import React from 'react';
import {useFormik} from "formik";


function SimpleRegister() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            userName:"",
        }
    })
  return (
    <div>SimpleRegister</div>
  )
}

export default SimpleRegister