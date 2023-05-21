# lecture 3

```jsx
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, sandbox application made with Parcel"
);
```

When we write React.createElement it creates a React Element for us (a JavaScript object) which is is rendered onto the browser a HTML DOM element.

```jsx
console.log(heading); // an Object
```

React DOM package helps us to create a root for our application and render the React Element.

```html
<div id="root"></div>
```

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

When our application is rendered it **replaces** everything that is present inside the root element. Sometimes we can put a placeholder text inside our HTML element so that if by any reason our rendering fails we have our placeholder text.

## JSX

---

Developers at Facebook realised that creating React elements using `React.createElement` can get very cumbersome and not at all a very developer friendly way to write React code. So they built JSX (or JavaScript XML)

**JSX is a JavaScript syntax (syntactic sugar) for creating React elements.**

<aside>
💡 JSX is not HTML inside JavaScript. It is an HTML like syntax for JavaScript applications

</aside>

```jsx
const headingWithJSX = <h1>Hello, heading with JSX</h1>;
console.log(headingWithJSX); // an Object
```

## JSX Transpilation

---

JSX is not valid JavaScript code. JavaScript does not come with JSX built inside it. JavaScript is the code that JS Engine can understand, JS Engine does not understand JSX. JS Engine understands ECMA Script

**Parcel with the help of Babel package transpiles our JSX code into pure JavaScript before it is read by the browser.**

Try out Babel → [https://babeljs.io/](https://babeljs.io/)

```jsx
// JSX
let heading = <h1>Hello world</h1>

// transpiled JavaScript
import { jsx as _jsx } from "react/jsx-runtime";
let heading = /*#__PURE__*/_jsx("h1", {
  children: "Hello world"
});
```

**JSX → React.createElement →  React Element (an object) → HTML element** 

## Components

---

1. Class based components → old way of creating react components, it uses JavaScript classes to create components
2. Functional components → modern way of creating react components, it uses JavaScript functions to create components

A React functional components is just a regular JavaScript function (that returns some JSX). 

```jsx
function HeadingComponent() {
	
	return (
		<h1>Hello from React heading component</h1>
	)
}

function TextComponent() {
	return (
		<p>Hello from React text component</p>
	)
}
```

### Component Composition

<aside>
💡 In React, we can make components more generic by accepting props. Props in React components are what parameters are to functions.
**Component composition is the name for passing components as props to other components, thus creating new components with other components.**

</aside>