/* const React = require('react');
const { Component } = React;
 */

import React, { Component } from 'react';

function getNumbers() {
  // 숫자 4개를 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitform = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitform}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>{<li></li>}</ul>
      </>
    );
  }
}

// module.exports = NumberBaseball;
export default NumberBaseball;
