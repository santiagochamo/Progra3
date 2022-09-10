import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Screens/Home/Home'
import About from './Screens/About/About'
import Details from './Screens/Details/Details'
import NotFound from './Screens/NotFound/NotFound'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
        <Route path='/details/:id' component={Details} />
        <Route path='' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
