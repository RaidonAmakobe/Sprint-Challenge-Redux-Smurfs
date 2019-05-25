import React, { Component } from 'react';
import './App.css';
import Form from "./Form";
import Smurf from "./Smurf";
import { getRequest } from "../actions";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getRequest()
    console.log(this.props.smurfs);
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form />
        {this.props.gettingSmurfs ? (
          <h1>Smurfs?</h1>
        ) : (
          <Smurf smurf = {this.props.smurfs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    gettingSmurfs: state.gettingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getRequest }
)(App);
