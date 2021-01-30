import {Switch, Route} from 'react-router-dom'
//Components 
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shopPage/ShopPage'
import Header from './components/Header.component'


function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
} 

export default App;
