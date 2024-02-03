import logo from './logo.svg';
import confident from './confident.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the video */}
        <video width="620" height="360" controls>
          <source src={confident} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        {/* Render some text */}
        <h1>Welcome to My React App</h1>
        <p>
          This is a sample React application created by Kaleem and Shukrullah Khan.
        </p>

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
