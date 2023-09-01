import React, { Component } from 'react'
import Spinner from './Spinner'

export default class About extends Component {
  constructor(){
    super();
    this.state = {
      loading:true
    }
  }
  async componentDidMount() {
    this.showLoadingBar();
  }
  async showLoadingBar(){
    this.props.setProgress(40);
    setTimeout(() => {
      this.setState({loading:false});
      this.props.setProgress(100);
    }, 1000);
  }
  render() {
    return (
      <div>
      {this.state.loading?<Spinner/>:(
      <div className="container my-4" style={{marginInlineStart:'420px'}}>
        <div className="card" style={{width: '30rem'}}>
          <div className="card-header">
            <strong>Summary</strong>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">This is a news application built using ReactJS. <br/>Functionalities include fetching stories from different categories using the NewsAPI, loading progress indicators, infinite scroll, and a search function to display top stories with keywords. React loading-bar and infinite-scroll npm packages have been used to improve UX. <br/>The Weather and Stock trends display can be added using their API's.</li>
            <li className="list-group-item"><a href="https://github.com/adi-42" target="_blank" rel="noreferrer" className="btn btn-danger">View Source Code</a></li>
          </ul>
        </div>
    </div>)}
    </div>
    )
  }
}
