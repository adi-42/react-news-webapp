import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 10
  }
  setProgress = (newProgress)=>{
    this.setState({progress:newProgress})
  }
  render() { 
    return (
      <div className='App'>
        <Router>
        <LoadingBar
        color='white'
        height='1px'
        progress={this.state.progress}
        />
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="1" pageSize={12} country="in" category="General"/>}/>
          <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="2" pageSize={12} country="in" category="Business"/>}/>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="3" pageSize={12} country="in" category="Technology"/>}/>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="4" pageSize={12} country="in" category="Sports"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="5" pageSize={12} country="in" category="Entertainment"/>}/>
          <Route exact path="/world" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="6" pageSize={12} country="" category="General"/>}/>
          <Route exact path="/about" element={<About setProgress={this.setProgress}/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

