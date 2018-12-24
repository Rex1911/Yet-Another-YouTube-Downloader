import React, { Component } from "react";
import Header from "./Components/Header";
import Cockpit from "./Components/Cockpit";
import Result from "./Components/Result";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./index.css";

class App extends Component {
  state = {
    showResult: 0,
    cockpit: {
      value: "dummy"
    }
  };

  handleChange = event => {
    this.setState({ cockpit: { value: event.target.value } });
    console.log("Onchange called");
  };

  handleSearch = event => {
    this.setState({ showResult: 1 });
    setTimeout(() => {
      this.setState({ showResult: 2 });
    }, 1000);
  };

  render() {
    let result = null;

    if (this.state.showResult === 1) {
      result = <CircularProgress style={{ marginTop: 50 }} />;
    } else if (this.state.showResult === 2) {
      result = <Result />;
    }

    return (
      <div className="App">
        <Header />
        <Cockpit
          val={this.state.cockpit.value}
          change={this.handleChange}
          click={this.handleSearch}
        />
        {result}
      </div>
    );
  }
}

export default App;
