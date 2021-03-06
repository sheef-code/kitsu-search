import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    axios
      .get(`https://kitsu.io/api/edge/anime?filter[text]=${this.state.text}`)
      .then(res => {
        const value = res.data.data;
        dispatch({
          type: "SEARCH_NAME",
          payload: value
        });
        this.setState({
          text: ""
        });
      });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <form
                className="container"
                id="searchform"
                onSubmit={this.handleSubmit.bind(this, dispatch)}
              >
                <div className="input-group">
                  <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    className="form-control"
                    size="50"
                    placeholder="Search... "
                    required
                  />
                  <div className="input-group-btn">
                    <button
                      onSubmit={this.handleSubmit.bind(this, dispatch)}
                      className="btn btn-custom"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
