import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
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
        <h2>About</h2>
        <hr/>
        <Link className="nav-link" to="/book">Books</Link>
      </div>
    );
  }
}
