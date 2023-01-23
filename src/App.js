import logo from './logo.svg';
import './App.css';

const AppLink = ({ link, content }) => {

  return(
    <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          { content }
        </a>
  );

}

const Logo = ({ svg }) => <img src={svg} className="App-logo" alt="logo" />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo svg={logo}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink link={"https://reactjs.org"} content={"Learn React 18+"} />
        <AppLink link={"https://angular.io"} content={"Learn Angular"} />
        <AppLink link={"https://vuejs.org"} content={"Learn Vue"} />

      </header>
    </div>
  );
}

export default App;
