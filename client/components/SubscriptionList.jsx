import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { addSubscription, removeSubscription } from '../reducers/subscriptions.js'

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

const SubscriptionList = ({ results, remove, add }) => {
  var Results
  if (results.length > 0) {
    Results = results.map((result, index) => {
      const addOrRemove = (result.subscribed) ? <a href="#" onClick={remove.bind(null, result)} >remove</a> : <a href="#" onClick={add.bind(null, result)} >add</a>
      return(
        <ListElement key={index}>
          <Flex justifyContent="space-between">
          <div>{result.title}</div>
          {addOrRemove}
          </Flex>
          <img src={result.arteworkUrl} />
        </ListElement>
      )
    })
  }
  else {
    Results = (<ListElement key="0">
      empty
    </ListElement>)

  }

  return (
    <List>{Results}</List>
  )
}

// SubscriptionList.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

const mapDispatchToProps = (dispatch) => {
  return {
    add: (obj) => {
      dispatch(addSubscription(obj))
    },
    remove: (obj) => {
      dispatch(removeSubscription(obj))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SubscriptionList)

