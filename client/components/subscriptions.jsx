import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import QueryResults from './SubscriptionList.jsx'

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

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { results } = this.props
    return (
      <div>
      <Flex justifyContent="space-between">
      <h2>Subscriptions </h2>
      <h2><Link to="/search">Add</Link></h2>
      </Flex>
      <List>
      <QueryResults results={results} />
      </List>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    results: state.subscriptions
  }
}

export default connect(
  mapStateToProps,
)(Subscriptions)

