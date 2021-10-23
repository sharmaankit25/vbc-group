import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  componentDidMount = () => {
    console.log('not found')
    Router.push("/");
  };

  render() {
    return <div />;
  }
}
