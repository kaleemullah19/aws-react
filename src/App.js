import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the video */}
        <video width="620" height="360" controls>
          <source src="https://confident-video.s3.us-east-1.amazonaws.com/confident.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIAkW4QKKiqB5JcRJ3GNbJWidt%2BJXiGPgBNwQ%2F83lAtGdAiEA497hCJNTSfkC9Zo%2BIyBViNsyEGl56%2FrYSvYwd8RQT%2Bsq5AIIcBAEGgw0NTMwMjY0NjI5NzYiDIrKAwyi7zQdE7Y8pyrBAu6BDWpUccaguIdIfj7rSNGCaidhstI0f2SwqovLt0u5ShqxR7Lj9cDQp0VKVab5IhrIL322Ao%2BODQjrKMeqEHpaq83I1Q44Tc0AOTlNZC4ofcD2jYxZH7VRKCJNRwkRJTScM7tfc1bqUL0YIYBnLACHwzcY8gWfsTGNn7Oo87yO%2Fe%2BJlNX%2Fojtj%2B5LcrB0yvxgLkSi8TTbot%2FYioceZoIPQ76295NwsNRZwFqmO9msBNE6Q4jVpmzrVOo3sEx4M2eTWVsnfBX%2B742SfwuLmvGQCp%2BmmUT5%2FjdbKOwJgjEpPaYRdcDhi29tb%2FedHCP9uaD%2BA6anf4zvozsy8JETnOXId63DmhFV3i6gu3TW06i4GE29vQQy1bI9SlmGSrZRJoQN3OzdIQwregP%2BCwxwf0pYhFeP%2FXQQPnRx1TbG%2BfMzLyjC0vfetBjqzAqFLalJDDZDi%2F1HBtNHouJebk%2FVV%2FrQqnP2eSO5RpiQWPuZqzZr37IEJRaO2j2uiMfUWD6J6NDPmv1OwR2JqJVG5WFRxwcspRebnZ7rudgSt%2BCUMihhJxcEavE86t%2FBHSUIgiSoR2JKkzfALF6UFiyCUG2E0zi68vgQ6V2Df%2B4dybbJ6hnp4HAw6%2F8GGrgDPdFbRy02AntBV1qXQ%2FhuUqfaRvtQdPJ4AvwAKpjYeH0X6XHA6zqnaILbj6M8HaYz6SyJ0Cq3vsTw1ntrMswxzK%2F8OgduwUF5IaTOh8tUYRtpYXEbEV78m%2BNoGInjamDAdmElGB5J0qm3aYL7dEom2Qs6yMnRFfGf%2BDevKdO4QsOBCha2mUBeMH4RZ914FRa8XvuliJyWV6ctp33Rl6EUGoSbw6tQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240203T174841Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWS6T3HUAK435RUUJ%2F20240203%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6037b6cbf9d816e5e06e13285d8ca490117010a981a3a958fb4398667b0860a3" type="video/mp4"/>
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
