import React, { Component } from 'react';

export default class LifeCycles extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    return {};
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <div>LifeCycles</div>;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}
