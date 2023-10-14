import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Footer.css';

function Footer (){
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
    <div className='footer'>
    <h1>Contact Form</h1>
    <br />
    <form onSubmit={formik.handleSubmit} id='contact-form'>
      
      <input
      placeholder='First Name'
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className='error'>{formik.errors.firstName}</div>
      ) : null}

    
      <input
      placeholder='Last Name'
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className='error'>{formik.errors.lastName}</div>
      ) : null}

      
      <input
      placeholder='Email'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='error'>{formik.errors.email}</div>
      ) : null}
        <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </>
  );
};
export default Footer;