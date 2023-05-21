import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, sandbox application made with Parcel"
);
// console.log(heading) // an Object

const headingWithJSX = <h1>Hello, heading with JSX</h1>;
// console.log(headingWithJSX) // an Object

function HeadingComponent() {
  return (
    <h1>Hello from React component</h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<HeadingComponent />)