import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from 'views/Home'
import About from 'views/About'
import Book from 'views/Book'

const Router = () => (
  <BrowserRouter>
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/book' exact component={Book}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
