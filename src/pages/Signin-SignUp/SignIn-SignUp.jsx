import React from 'react'

import './signinandSignup.scss'

//component
import SignIn from '../../components/SignIn.component'
import Signup from '../../components/Signup.component'

const SignInandSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <Signup />
    </div>
)
export default SignInandSignUpPage;