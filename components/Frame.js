import React, { Component } from 'react'

class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
    }
  }

  componentWillMount() {
    this.setState({url: `/static/games/${this.props.src}/index.html`})
  }

  render() {
    return (
      <iframe
        style={{outline: 'none', border: 'none'}}
        width="500"
        height="300"
        src={this.state.url}
      />
    )
  }
}

export default Frame
