import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - DailyNews`;
  }

  async updateNews() {
    this.props.setProgress(10);
    const { ApiKey, pageSize, category, country } = this.props;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${ApiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    this.props.setProgress(35);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: true,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   this.updateNews();
  //   this.setState({ page: this.state.page - 1 });
  // };

  // handleNextClick = async () => {
  //   this.updateNews();
  //   this.setState({ page: this.state.page + 1 });
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const { ApiKey, pageSize, category, country } = this.props;

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${ApiKey}&page=${this.state.page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: true,
    });
  };

  render() {
    console.log("Data", this.state.articles);

    return !this.state.loading ? (
      <div>
        <Loading />
      </div>
    ) : (
      <>
        <div className="">
          <h1 className="text-center mb-4 mt-4">
            DailyNews - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loading />}
          >
            <div className="container">
              <div className="row mt-3">
                {this.state.articles.map((article) => {
                  return (
                    <div className="col-md-4" key={article.url}>
                      <NewsItem
                        title={
                          article.title
                            ? article.title.slice(0, 50)
                            : "No title"
                        }
                        description={
                          article.description
                            ? article.description.slice(0, 100)
                            : "No contents"
                        }
                        imageUrl={
                          article.urlToImage
                            ? article.urlToImage
                            : "https://cdn-diofd.nitrocdn.com/dncbzIxdfumCmSbHUPJuWKPehDRUBWrP/assets/static/optimized/rev-b1e46b2/wp-content/uploads/2020/04/Marketplace-Lending-News-1024x599-1-768x449.jpg"
                        }
                        newsUrl={article.url}
                        author={article.author ? article.author : "Unknown"}
                        publishedDate={
                          article.publishedAt
                            ? article.publishedAt
                            : "Unknown time"
                        }
                        source={article.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-md"
            onClick={this.handlePrevClick}
          >
            {this.state.page <= 1 ? "First" : "Prev"}
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-md"
            onClick={this.handleNextClick}
          >
            {this.state.page + 1 >
            Math.ceil(this.state.totalResults / this.props.pageSize)
              ? "Last"
              : "Next"}
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
