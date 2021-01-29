import {Switch, Route} from 'react-router-dom'
//Components 
import Homepage from './pages/homepage/Homepage.component'
import ShopPage from './pages/shopPage/ShopPage'

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
} 

export default App;
