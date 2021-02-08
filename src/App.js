import React from 'react'
import {Switch, Route} from 'react-router-dom'
//Components 
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/Header.component'
import SignInandSignUpPage from './pages/Signin-SignUp/SignIn-SignUp'
import {auth, createUserProfileDocument} from './Firebase/Firebase.util'


class  App extends React.Component {
  constructor(){
    super()
      this.state = {
        currentUser: null
      }
    
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.setState);
        })
      }
      this.setState({currentUser: userAuth})
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
