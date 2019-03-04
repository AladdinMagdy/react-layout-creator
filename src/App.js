import React, { Component } from "react";
import "./App.scss";
import { scaleDown as Menu } from "react-burger-menu";
import Editor from "./components/Editor";
import Layout from "./components/Layout";
class App extends Component {
  state = {
    menuOpend: false
  };
  menuClick() {
    this.setState({
      menuOpend: !this.state.menuOpend
    });
  }
  render() {
    return (
      <div className="App" id="App">
        <Menu pageWrapId={"Layout"} outerContainerId={"App"}>
          <Editor style={{ color: "blue" }} />
          {/* <a href="#" className="menu-item">
            hello
          </a> */}
        </Menu>
        <Layout
          isMenuOpend={this.state.menuOpend}
          menuClicked={this.menuClick.bind(this)}
          style={{ color: "blue" }}
        />
      </div>
    );
  }
}

export default App;
