import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const click = () => {
    alert("ok");
  };

  const products = [
    { title: "Cabbage", id: 1, isFruit: false },
    { title: "Garlic", id: 2, isFruit: false },
    { title: "Apple", id: 3, isFruit: true },
  ];

  const listItem = products.map((product) => (
    <li
      className={`list-item${product.isFruit ? " fruit" : ""}`}
      key={product.id}
    >
      {product.title}
    </li>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <video className="video" controls>
          <source
            src="https://confident-video.s3.amazonaws.com/confident.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <button className="button" onClick={handleCount}>
          Counter {count}
        </button>
        <button className="button" onClick={click}>
          Click here
        </button>
        <ul>{listItem}</ul>

        <a
          className="App-link button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
