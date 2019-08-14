import React from 'react'
import About from '../components/About'
import Comment from '../components/Comment'
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Router>
        <div>
          <ul className="nav">
            <li><Link to="/">Comment</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={Comment} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    </div>
    
   
  )
}

