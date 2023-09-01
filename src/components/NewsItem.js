import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, newsUrl, date} = this.props; 
    return (
    <div className="card my-3">
        <img src={imageUrl?imageUrl:"https://png.pngtree.com/template/20220505/ourmid/pngtree-breaking-news-logo-flat-vector-banner-image_1335485.jpg"} className="card-img-top" alt=""/>
        <div className="card-body" style={{backgroundColor:'#ffbbbb'}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <div className="d-flex justify-content-between">
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-danger">View Full Story</a>
              <p className='card-text' style={{marginInlineEnd:'15px'}}><small className='text-muted'>{new Date(date).toDateString()}</small></p>
            </div>
            
        </div>
    </div>
    )
  }
}

export default NewsItem