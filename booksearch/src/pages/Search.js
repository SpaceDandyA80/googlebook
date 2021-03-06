import React from "react";
import Results from "../components/Form";
import API from "../utils/API";

class Search extends React.Component {
  state = {
    value: "",
    bookArr: [],
  };

  componentDidMount() {
    this.searchBook();
  }

  searchBook = (query) => {
    API.getBook(query)
      .then((res) =>
        this.setState({
          bookArr: res.data.items.map((bookData) => this.makeBook(bookData)),
        })
      )
      .catch((err) => console.error(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <div>
        <Results
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container">
          <h2>Results</h2>
        </div>
      </div>
    );
  }
}

export default Search;
