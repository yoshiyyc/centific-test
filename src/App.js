import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="column">
          <p>10</p>
          <div className="bar" style={{ height: `${(10 / 12) * 100}%` }}></div>
        </div>
        <div className="column">
          <p>6</p>
          <div className="bar" style={{ height: `${(6 / 12) * 100}%` }}></div>
        </div>
        <div className="column">
          <p>8</p>
          <div className="bar" style={{ height: `${(8 / 12) * 100}%` }}></div>
        </div>
        <div className="column">
          <p>9</p>
          <div className="bar" style={{ height: `${(9 / 12) * 100}%` }}></div>
        </div>
        <div className="column">
          <p>12</p>
          <div className="bar" style={{ height: `${(12 / 12) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
