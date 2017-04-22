import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Radiocast from './radiocast.jsx'
import Subscriptions from './subscriptions.jsx'
import SignIn from './sign-in.jsx'
import Search from './search.jsx'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Radiocast</Link></li>
        <li><Link to="/subscriptions">Subscriptions</Link></li>
        <li><Link to="/sign_in">Sign In/Up</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Radiocast}/>
      <Route path="/subscriptions" component={Subscriptions}/>
      <Route path="/search" component={Search}/>
      <Route path="/sign_in" component={SignIn}/>
    </div>
  </Router>
)
export default BasicExample
