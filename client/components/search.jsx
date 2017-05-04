import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import QueryResults from './SubscriptionList.jsx'
import { fetchQuery } from '../reducers/queryResult.js'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {results: [], query: ""};

    this.handleChange = this.handleChange.bind(this)
    this.submitQuery  = this.submitQuery.bind(this)
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  submitQuery (event) {
    let term = this.state.query
    this.props.onTodoClick(term)
    console.log(term)
  }

  render() {
    let { results } = this.props
    console.log("props", results)

    return(
      <div>
        <h2>Add Subscription</h2>
        <input type="text" placeholder="query" value={this.state.query} onChange={this.handleChange} />
        <input type="button" onClick={this.submitQuery} value="Search" />
        <QueryResults results={results} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.queryResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (term) => {
      dispatch(fetchQuery(term))
    }
  }
}

const QQueryResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default QQueryResults
