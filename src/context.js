import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NAME":
      return {
        ...state,
        trending_anime: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    trending_anime: [],
    random_anime: [],
    categories: [],
    heading: "Trending This Week",
    heading2: "Random Anime",
    heading3: "Top Genres",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        "https://kitsu.io/api/edge/genres?page%5Blimit%5D=10&page%5Boffset%5D=0"
      )
      .then(res => {
        this.setState(state => ({
          ...state,
          categories: [...state.categories, ...res.data.data]
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .get("https://kitsu.io/api/edge/trending/anime")
      .then(res => {
        const value = res.data.data;
        this.setState({
          trending_anime: value
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    for (let page = 0; page < 400; page += 10) {
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${page}`
        )
        .then(res => {
          const value = res.data.data;
          this.setState({
            random_anime: value
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
