import React, { PropTypes } from 'react'
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

const SubscriptionList = ({ results }) => {
  var Results
  if (results.length > 0) {
    Results = results.map(result => {
      return(
        <ListElement>
          <Flex justifyContent="space-between">
          <div>{result.title}</div>
          <a href="#">add</a>
          </Flex>
          <img src={result.arteworkUrl} />
        </ListElement>
      )
    })
  }
  else {
    Results = (<ListElement>
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

export default SubscriptionList
