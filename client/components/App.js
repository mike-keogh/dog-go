import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import WalkRequest from './WalkRequest'
import Register from './Register'
import WalkerForm from './WalkerForm'
import OwnerForm from './OwnerForm'
import DogForm from './DogForm'
import ReceiveWalk from './ReceiveWalk'
import Accounts from './Accounts'
import Map from './Map'

const App = () => {
  return (
    <div className="container">
      <div className="logo"></div>
      <h1 className="title">Dog-Go</h1>
    <Navbar />
      <div className='quote'>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path="/accounts" component={Accounts} />
            <Route exact path='/Map' component={Map} />
            <Route exact path='/walkrequest' component={WalkRequest} />
            <Route exact path='/register/walker' component={WalkerForm} />
            <Route exact path='/register/owner' component={OwnerForm} />
            <Route exact path= '/register/dog' component={DogForm} />
            <Route exact path='/gowalking' component={ReceiveWalk} />
          </div>
        </Router>
      </div>
      <div className="footer">By Mike Keogh, Annah Gerletti, Anthony Martin <br/> and Tom Revill.</div>
    </div>
  )
}
// <Route exact path='/register' component={Register} />

export default App
