import React from 'react';

export default class book extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidCatch() {
    console.log("componentDidCatch");
  }

  render() {
    return (
      <div>
        <h2>book</h2>
        <hr/>
      </div>
    );
  }
}
