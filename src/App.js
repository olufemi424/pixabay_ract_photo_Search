import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import Posts from "./components/pagination/Posts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <NavBar />
          <Search />
          <Posts />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
