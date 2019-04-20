import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export default class Anime extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { anime_list, heading } = value;

          if (anime_list === undefined || anime_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <div class="container">
                  <div className="row">
                    <h2 className="text-left">{heading}</h2>
                    {anime_list.slice(0, 5).map(item => (
                      <div
                        className="col-2dot4 col-sm-2dot4 col-md-2dot4 col-lg-2dot4 col-xl-2dot4"
                        key={item.id}
                      >
                        <img
                          class="special"
                          src={item.attributes.posterImage.medium}
                          alt="Card cap"
                        />
                        <div className="card-body text-center">
                          <p>{item.attributes.canonicalTitle}</p>
                          <Link to={`anime/detail/${item.id}`} className="btn">
                            Details
                          </Link>
                        </div>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
