import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import "bootstrap/dist/css/bootstrap.min.css"

class Table extends Component {
  constructor(props) {
    super(props);
    
  }

  handleSave = (element) => {
    console.log(element.volumeInfo.title)
    console.log(element.volumeInfo.authors)
    console.log(element.volumeInfo.description)
  };

  handleSave = (element) => {
    API.saveBook(element.volumeInfo.title, element.volumeInfo.imageLinks.smallThumbnail, element.volumeInfo.authors, element.volumeInfo.description )
      .then(res => {
        alert("Book Saved");
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
                  <td><img src={element.volumeInfo.imageLinks.smallThumbnail} alt="" /></td>
                  <td>{element.volumeInfo.title}</td>
                  <td>{element.volumeInfo.authors}</td>
                  <td>{element.volumeInfo.description}</td>
                  <td><a href={element.volumeInfo.infoLink} class="btn btn-info" target="_blank">View</a></td>
                  <td><button onClick={() => this.handleSave(element)}>Save</button></td>
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

export default Table;
