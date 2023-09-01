import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar navbar-brand" to="/" style={{fontStyle:'italic', fontWeight:'normal', fontSize:'x-large'}}><strong>QuickBuzz</strong></Link>
          <div className="navbar collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">India</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/world">World</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{marginInlineStart:'400px'}}>&lt;About/&gt;</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" id="search-form">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="query"/>
              <button className="btn btn-outline-success search" type="submit">Go!</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default NavBar