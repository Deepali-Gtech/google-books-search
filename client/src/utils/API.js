import axios from "axios";
const API_KEY = "AIzaSyDefHkn2_1LDLBHbKVXW96lTDBJZwzeQp8";


export default {
  searchBooks: function (searchText) {
    var url = "https://www.googleapis.com/books/v1/volumes?q=" + searchText + "&key=" + API_KEY;
    return axios.get(url);
  },
  saveBook: function (title, smallThumbnail, authors, description, link) {
    return axios.post('/api/books', {
      title: title,
      image: smallThumbnail,
      authors: authors,
      description: description,
      link: link
    });
  },
  getBooks: function () {
    return axios.get('/api/books');
  },
  removeBook: function (id) {
    return axios.delete('/api/books/' + id);
  },
};
