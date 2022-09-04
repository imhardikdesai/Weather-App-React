import './App.css';
import MainContext from './Components/MainContext/MainContext';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar name={"Wheather App"} />
      <MainContext />
    </div>
  );
}

export default App;
