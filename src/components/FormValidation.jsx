import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be 3 characters or less')
        .required('Name is required'),

      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Password is required'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='form-wrapper'>
      <p className='heading'>Form Validation</p>
      {/* Add class name here */}
      <section>
        <input
          name='name'
          type='text'
          placeholder='Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className='input-text'
        />
        {formik.touched.name && formik.errors.name ? (
          <p className='form-errors'>{formik.errors.name}</p>
        ) : null}
      </section>

      <section>
        <input
          name='email'
          type='email'
          placeholder='Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='input-text'
        />
        {formik.touched.email && formik.errors.email ? (
          <p className='form-errors'>{formik.errors.email}</p>
        ) : null}
      </section>

      <section>
        <input
          name='password'
          type='password'
          placeholder='Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className='input-text'
        />
        {formik.touched.password && formik.errors.password ? (
          <p className='form-errors'>{formik.errors.password}</p>
        ) : null}
      </section>

      <section>
        <input
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className='input-text'
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className='form-errors'>{formik.errors.confirmPassword}</p>
        ) : null}
      </section>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormValidation;
