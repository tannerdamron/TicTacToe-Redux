/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import Board from './Board';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

export default (connect()(App));
