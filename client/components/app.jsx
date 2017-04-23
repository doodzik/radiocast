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

import styled from 'styled-components'

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
`

const StyledLink = styled(Link)`
  padding: 25px;
`

const BasicExample = () => (
  <Router>
    <div>
      <Nav>
          <StyledLink to="/">Radiocast</StyledLink>
          <StyledLink to="/subscriptions">Subscriptions</StyledLink>
          <StyledLink to="/sign_in">Sign In/Up</StyledLink>
      </Nav>

      <Route exact path="/" component={Radiocast}/>
      <Route path="/subscriptions" component={Subscriptions}/>
      <Route path="/search" component={Search}/>
      <Route path="/sign_in" component={SignIn}/>
    </div>
  </Router>
)
export default BasicExample
