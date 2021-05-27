import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'

import GithubState from './context/github/GithubState'

import './App.css';

const App =()=> {
  const [alert,setAlert] = useState(null);  //obj{msg,type}


  //Set alert for empty search
  const showAlert=(msg,type)=> {
    setAlert({msg,type});
    setTimeout(()=>setAlert(null),5000);     //callback function
  }
 
    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Switch>
              <Route
                exact path='/'
                render = {
                  props=>(
                    <Fragment>
                      <Alert alert={alert}/>
                       <Search 
                        setAlert = {showAlert}
                        />
                        <Users/>
                    </Fragment>
                  )
                }
              />
              <Route
                exact path='/about' component={About}
              />
              <Route
                exact path='/user/:login' component={User}/>
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
}

export default App;
