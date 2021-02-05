import React from 'react'
import {Switch, Route} from 'react-router-dom'
//Components 
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/Header.component'
import SignInandSignUpPage from './pages/Signin-SignUp/SignIn-SignUp'
import {auth} from './Firebase/Firebase.util'


class  App extends React.Component {
  constructor(){
    super()
      this.state = {
        currentUser: null
      }
    
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
          return (
          <div>
          <Header currentUser={this.state.currentUser}/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SignInandSignUpPage}/>
            </Switch>
          </div>
      );
    }
} 

export default App;
