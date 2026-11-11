import React from 'react'
import Button from '../../components/Button'
import SignupLogic from '../../Logic/UserLogic.js/Signup.logic'
import Input from '../../components/Input';

function Signup() {
  const { inputs, signUpUser, signingin } = SignupLogic();

  return (
    <form onSubmit={signUpUser} className='w-full'>
      {
        inputs.map((input, index) => (
          <Input {...input} show={true}/>
        ))
      }
      <Button loading={signingin} type={'submit'} text='Sign up' className='my-2' />
    </form>
  )
}

export default Signup
