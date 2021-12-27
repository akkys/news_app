import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NavigationBar from "./components/NavigationBar";
import News from "./components/News";

export default class App extends Component {
  pageSize = 15;
  ApiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div className="app">
        <Router>
          <NavigationBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path=""
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  ApiKey={this.ApiKey}
                  country="in"
                  category="entertainment"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
