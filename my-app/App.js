import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "HELLO WORLD FROM PARCEL"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)