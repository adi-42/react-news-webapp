import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
 
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'General'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: true,
            totalResults : 0
        }
        document.title = `QuickBuzz - ${this.props.category==='General'?'Home':this.props.category}`;
    }
    async componentDidMount() {
        this.updateNews();
    }
    async updateNews() {
        this.props.setProgress(10); 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(40); 
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100); 
    }
    fetchMoreData = () => {
        this.setState({page: this.state.page + 1, loading:true}, async function(){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading : false
            });
        });
        
    };
    // async search(){
    //     //unfinished function
    //     document.getElementById('search-form').addEventListener('submit', function(event){
    //     event.preventDefault(); // Prevent the form from submitting
    //     const name = document.getElementById('query').value;
    //     console.log(name);
    //     });
    // }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{margin: '10px', fontWeight:400}}>Latest Stories from {this.props.category}</h2>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner/>}>
                     <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 80) : ""} desc={element.description ? element.description.slice(0, 160) : " "} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News