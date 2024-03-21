import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className='border mb-5 pl-3 ml-8 shadow-lg rounded-xl p-2 '
        placeholder='first name'
      />
      </div>

      <div>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        className='border mb-5 pl-3 ml-9 shadow-lg rounded-xl p-2 '
        placeholder='last name'
      />
      </div>

      <div>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className='border mb-5 pl-3 ml-3 shadow-lg rounded-xl p-2 '
        placeholder='@gmail.com'
      />
      </div>


      <button type="submit" className='border bg-green-50 w-1/2 hover:bg-green-200 hover:scale-90 rounded-lg shadow-md'>Submit</button>
    </form>
  );
};

export default SignupForm;