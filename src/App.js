import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = (prev, curr) => {
    console.log("prev", prev);
    console.log("curr", curr);
    setCount(count + 1);
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
    <li style={{ color: product.isFruit ? "green" : "red" }} key={product.id}>
      {product.title}
    </li>
  ));
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the video */}
        <video width="620" height="360" controls>
          <source
            src="https://confident-video.s3.amazonaws.com/confident.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Render some text */}
        <button onClick={handleCount}>Counter {count}</button>
        <h1>Welcome to My React App</h1>
        <p>
          This is a sample React application created by Kaleem and Shukrullah
          Khan.
        </p>
        <button onClick={click}>Click here</button>
        <ul>{listItem}</ul>
        {/* Render a link */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Render the logo */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
