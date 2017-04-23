import React from 'react'
import fetchJsonp from 'fetch-jsonp'

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


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: []};
  }

  handleChange (event) {
    let term = event.target.value
    // if (term.length > 0) {
    //   fetchJsonp(`https://itunes.apple.com/search?term=${term}&media=podcast`)
    //   .then(req => {
    //     return req.json().then(json => this.state.setState({results: json.results}))
    //   })
    //   .catch(x => {
    //     console.log(x)
    //   })
    // }
  }

  render() {

    let results = this.state.results.map(r => {
      return(

        <li>{r.collectionName}</li>
      )
    })

    return(
      <div>
        <h2>Add Subscription</h2>
        <input type="text" placeholder="query" />
        <input type="button" onClick={this.handleChange} value="Search" />
        <List>
          <ListElement>
            <Flex justifyContent="space-between">
              <div>Name</div>
              <a href="#">add</a>
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
  }
}

export default Search
