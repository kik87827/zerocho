const React = require('react');
const { Component } = React;

class WordTail extends Component {
  state = { text: 'Hello, webpack3' };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordTail;
