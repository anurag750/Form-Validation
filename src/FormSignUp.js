import React from "react";

const FormSignUp = () => {
  return (
    <div className='form-content-right'>
      <form className='form'>
        <h1>Get started with us today! By fill out the details below</h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter username'
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='text'
            name='email'
            className='form-input'
            placeholder='Enter email'
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='text'
            name='password'
            className='form-input'
            placeholder='Enter password'
          />
        </div>
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm Password
          </label>
          <input
            id='password2'
            type='text'
            name='password'
            className='form-input'
            placeholder='Enter Confirm Password'
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
