import React, { Component } from "react";
import "./App.scss";
import { scaleRotate as Menu } from "react-burger-menu";
import Editor from "./components/Editor";
import Layout from "./components/Layout";
class App extends Component {
  state = {
    carouselItems: 6,
    itemsUrls: [],
    pageTitle: {
      text: "click menu to edit me!",
      style: {
        backgroundColor: "#000",
        color: "#fff"
      }
    },
    ctaButtons: [
      {
        text: "Go now!",
        backgroundColor: "black",
        color: "#fff"
      }
    ]
  };
  fetchImagesData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data =>
        this.setState({
          itemsUrls: [
            ...data.splice(0, this.state.carouselItems).map(el => el.url)
          ]
        })
      );
  }
  componentDidMount() {
    this.fetchImagesData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.carouselItems !== prevState.carouselItems) {
      this.fetchImagesData();
    }
  }

  handlePreviewChange(newData) {
    this.setState({ ...newData });
  }

  addCtaButtons(param) {
    switch (param) {
      case "dec":
        const newArray = [...this.state.ctaButtons];
        newArray.pop();
        this.setState(state => {
          return {
            ctaButtons: newArray
          };
        });
        break;
      case "inc":
        const newArr = [...this.state.ctaButtons];
        newArr.push({
          text: "New button",
          backgroundColor: "",
          color: "#fff"
        });
        this.setState(state => {
          return {
            ctaButtons: newArr
          };
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { pageTitle, carouselItems, itemsUrls, ctaButtons } = this.state;
    return (
      <div className="App" id="App">
        <Menu
          menuClassName={"my-class"}
          width={""}
          pageWrapId={"Layout"}
          outerContainerId={"App"}
        >
          <Editor
            pageTitle={pageTitle}
            carouselItems={carouselItems}
            ctaButtons={ctaButtons}
            handlePreviewChange={this.handlePreviewChange.bind(this)}
            addCtaButtons={this.addCtaButtons.bind(this)}
          />
        </Menu>
        <Layout
          pageTitle={pageTitle}
          carouselItems={carouselItems}
          carouselUrls={itemsUrls}
          ctaButtons={ctaButtons}
        />
      </div>
    );
  }
}

export default App;
