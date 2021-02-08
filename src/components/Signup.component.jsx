import React from 'react'
import './signup.styles.scss'

import FormInput from './Forminput.component'

import CustomButton from './CustomButton.component'

import {auth, createUserProfileDocument} from '../Firebase/Firebase.util'

class Signup extends React.Component{
    constructor(){
        super()

        this.state = {
            displayname:'',
            email:'',
            password:'',
            confirmpassword:''
            
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayname, email, password, confirmpassword} = this.state;

        if(password !== confirmpassword){
            alert("Password Don't match!");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            
            this.setState({
                displayname:'',
                email:'',
                password:'',
                confirmpassword:''
            })
        }catch(error){
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const{displayname, email, password, confirmpassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your Email and Password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayname'
                        value={displayname}
                        onChange={this.handleChange}
                        lable='Display name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        lable='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        lable='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmpassword'
                        value={confirmpassword}
                        onChange={this.handleChange}
                        lable='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup;