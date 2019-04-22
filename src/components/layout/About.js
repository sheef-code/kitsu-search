import React from "react";
import Mailto from "react-protected-mailto";
export default function About() {
  return (
    <div id="about" className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>About Anime Index</h2>

          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <br />
          <button className="btn btn-default btn-lg">
            <Mailto
              email="shifathsalam@gmail.com"
              headers={{ subject: "Question Regarding Anime Index" }}
            />
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
