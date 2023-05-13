// First react code

// 1. Root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// 2. React Element
const headingElem = React.createElement(
  "h1", 
  { id: "heading" }, 
  "HELLO WORLD FROM REACT"
);

// console.log(headingElem); // React element (an object)

// 3. Render
// root.render(headingElem);


// =========================================================

/**
 *  <div id="parent">
 *    <div id="child">
 *      <h1>Hello</h1>
 *      <h2>React</h2>
 *    </div>
 *  </div>
 */

const parentElem = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "Hello"),
      React.createElement("h2", {}, "React")
    ]
  )
);

root.render(parentElem);