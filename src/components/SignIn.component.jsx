import React from 'react'
import './signIn.styles.scss'

//component
import FormInput from './Forminput.component';
import CustomButton from './CustomButton.component';

class SignIn extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} lable='email' handleChange={this.handleChange} required />
                    <FormInput name='password' type='password' value={this.state.password} lable='password' handleChange={this.handleChange}  required />
                    
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;