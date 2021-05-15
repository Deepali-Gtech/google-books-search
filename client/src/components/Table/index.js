import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"

function Table(props) {
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
            </tr>
          </thead>

          <tbody>
            {
              props.results &&
              props.results.map(function (element) {
                return <tr>
                  <td><img src={element.volumeInfo.imageLinks.smallThumbnail} alt="" /></td>
                  <td>{element.volumeInfo.title}</td>
                  <td>{element.volumeInfo.authors}</td>
                  <td>{element.volumeInfo.description}</td>
                  <td><a href={element.volumeInfo.infoLink} class="btn btn-info" target="_blank">View</a> <a href={element.volumeInfo.infoLink} class="btn btn-info" target="_blank">Save</a></td>
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

export default Table;
