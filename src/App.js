import React, { Component } from "react";
import "./App.scss";
import Editor from "./components/Editor";
import Layout from "./components/Layout";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Editor />
        <Layout />
      </div>
    );
  }
}

export default App;
