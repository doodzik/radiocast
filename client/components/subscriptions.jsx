import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ListElement = styled.ul`
  margin: 40px 0;
  padding: 0;
`

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
  margin: 15px 0;
`

const Subscriptions = () => (
  <div>
    <Flex justifyContent="space-between">
      <h2>Subscriptions </h2>
      <h2><Link to="/search">Add</Link></h2>
    </Flex>
    <List>
      <ListElement>
        <Flex justifyContent="space-between">
          <div>Name</div>
          <a href="#">remove</a>
        </Flex>
        <img src="https://www.smashingmagazine.com/images/music-cd-covers/3.jpg" />
      </ListElement>
      <ListElement>
        <Flex justifyContent="space-between">
          <div>Name</div>
          <a href="#">remove</a>
        </Flex>
        <img src="https://www.smashingmagazine.com/images/music-cd-covers/3.jpg" />
      </ListElement>
    </List>
  </div>
)

export default Subscriptions
