import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

class Books extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  handleSearch = () => {
    let searchText = document.getElementById('searchText').value;
    API.searchBooks(searchText)
      .then(res => {
        return this.setState({
          books: res.data.items
        });
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (

      <div class="container" >
        <div class="row">
          <input class="col" id="searchText" placeholder="search criteria"></input>
          <button className="btn btn-info col" onClick={this.handleSearch}>Search</button>
          <a className="btn btn-info col"  href="/saved">Saved Books</a>
        </div>
        <br />
        <SearchResults results={this.state.books} />
      </div>
    );
  }
}

export default Books;
