import React, { Component } from "react";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        return this.setState({
          books: res.data
        });
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (

      <div class="container" >
        <br />
        <SavedResults results={this.state.books} />
      </div>
    );
  }
}

export default SavedBooks;
