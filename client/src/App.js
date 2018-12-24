import React, { Component } from "react";
import Header from "./Components/Header";
import Cockpit from "./Components/Cockpit";
import Result from "./Components/Result";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./index.css";

class App extends Component {
  state = {
    showResult: 0,  // 0-Hide   1-Loading Data   2-Data is ready  3-Error
    value: null,
    title: null,
    author:null,
    img: null,
    availableQuality:[],
    selectedQuality: null,
    url: null
  };

  handleChange = event => {
    this.setState({value: event.target.value });
  };

  handleSearch = event => {
    this.setState({ showResult: 1 });
    let data = {
      videoUrl: this.state.value
    }
    fetch("/api/getinfo", {
      method:"POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      if(response.err) {
        this.setState({showResult: 3})
      } else {;
        this.setState({
          title: response.title,
          author: response.author.name,
          img: response.thumbnail_url,
          url: response.video_url,
          availableQuality: response.formats.filter(format => format.quality),
          selectedQuality: response.formats[0].url,
          showResult: 2
        })
      }
    })
    .catch(err => {
      this.setState({showResult: 3})
    })
  };

  handleQualityChange = event => {
    this.setState({
      selectedQuality: event.target.value
    })
  };

  handleDownloadClick = () => window.location = this.state.selectedQuality;

  render() {
    let result = null;
    let error = false;
    if (this.state.showResult === 1) {
      result = <CircularProgress style={{ marginTop: 50 }} />;
    } else if (this.state.showResult === 2) {
      let {title,author,img,url,availableQuality,selectedQuality} = this.state;
      result = <Result title = {title} author={author} img={img} url={url} availableQuality={availableQuality} selectedQuality={selectedQuality} change={this.handleQualityChange} click={this.handleDownloadClick}/>;
    } else if(this.state.showResult === 3) {
      error = true;
    }

    return (
      <div className="App">
        <Header />
        <Cockpit
          val={this.state.value}
          change={this.handleChange}
          click={this.handleSearch}
          error={error}
        />
        {result}
      </div>
    );
  }
}

export default App;
