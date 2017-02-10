import React, { Component } from 'react'

class Frame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      level: 0,
    }
  }

  componentWillMount() {
    this.setState({url: `/static/games/${this.props.src}/index.html`})
  }
  componentDidMount() {
    setInterval(() => {
      this.iframe.postMessage(this.state, window.location.href)
    }, 1000)
    window.addEventListener('message', e => {
      this.setState({level: this.state.level + 1})
    })
  }
  _setRef(i) {
    if(i !== null)
      this.iframe = i.contentWindow
  }
  render() {
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

export default Frame
