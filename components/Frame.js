import React, { Component } from 'react'

class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      win: null,
    }
  }

  componentWillMount() {
    this.setState({url: `/static/games/${this.props.src}/index.html`})
  }
  componentDidMount() {
    window.addEventListener('message', e => this.setState(e.data))
  }
  _setRef(i) {
    if(i !== null)
      this.iframe = i.contentWindow
  }
  render() {
    const { win } = this.state
    switch(win) {
      case true:
        return (
          <div>
            <h1> you win ! </h1>
            <button onClick={ () => this.setState({win: null})} > Replay </button>
          </div>
        )
      case false:
        return (
          <div>
            <h1> you loose ! </h1>
            <button onClick={ () => this.setState({win: null})} > Retry </button>
          </div>
        )
      default:
        return (
          <iframe
            ref={this._setRef.bind(this)}
            style={{outline: 'none', border: 'none'}}
            width="500"
            height="300"
            src={this.state.url}
          />
        )
    }
  }
}

export default Frame
