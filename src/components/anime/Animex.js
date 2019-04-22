import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export default class Anime extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            categories,
            trending_anime,
            heading,
            heading2,
            heading3,
            random_anime
          } = value;

          if (trending_anime === undefined || trending_anime.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <div class="container">
                  <h2 className="text-left">{heading}</h2>
                  {trending_anime.slice(0, 5).map(item => (
                    <div
                      className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4"
                      key={item.id}
                    >
                      <div className="card-body h-100 text-center">
                        <img
                          class="special"
                          src={item.attributes.posterImage.medium}
                          alt="Card cap"
                        />
                        <p className="list-group-item">
                          {item.attributes.canonicalTitle}
                        </p>
                        <Link
                          to={`anime/detail/${item.id}`}
                          className="btn list-group-item"
                        >
                          Details
                        </Link>
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
                <div class="container">
                  <h2 className="text-left">{heading3}</h2>
                  {categories.map(item => (
                    <div
                      className="dbg col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4"
                      key={item.id}
                    >
                      <div className="card-body h-100 text-center align-middle">
                        {item.attributes.name}
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
                <div class="container">
                  <h2 className="text-left">{heading2}</h2>
                  {random_anime.slice(0, 5).map(item => (
                    <div
                      className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4"
                      key={item.id}
                    >
                      <div className="card-body h-100 text-center">
                        <img
                          class="special"
                          src={item.attributes.posterImage.medium}
                          alt="Card cap"
                        />
                        <p className="list-group-item">
                          {item.attributes.canonicalTitle}
                        </p>
                        <Link
                          to={`anime/detail/${item.id}`}
                          className="btn list-group-item"
                        >
                          Details
                        </Link>
                      </div>
                      <br />
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
