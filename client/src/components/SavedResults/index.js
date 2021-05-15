import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import "bootstrap/dist/css/bootstrap.min.css"

class SavedResults extends Component {
  constructor(props) {
    super(props);
    
  }
  handleDelete = (element) => {
    API.removeBook(element._id)
      .then(res => {
        alert("Book Removed");
        window.location.reload();
      }
      )
      .catch(err => console.log(err));
  };

  render() {
    //if (props.results) {
    return (
      <div class="tablecontent">
        <table border="1" width="100%">
          <thead>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Authors</td>
              <td>Description</td>
              <td></td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {
              this.props.results &&
              this.props.results.map( (element) => {
                return <tr>
                  <td><img src={element.image} alt="" /></td>
                  <td>{element.title}</td>
                  <td>{element.authors}</td>
                  <td>{element.description}</td>
                  <td><a href={element.link} class="btn btn-info" target="_blank">View</a></td>
                  <td><button onClick={() => this.handleDelete(element)}>Delete</button></td>
                </tr>;
              })
            }
          </tbody>
        </table>
      </div>
    );
    // } else {
    //   return "";
    // }
  }
}

export default SavedResults;
