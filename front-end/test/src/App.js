import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import About from './pages/About'
import Welcome from './pages/Welcome'

function App() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/main/straydog" element={<Main />} />
      <Route path="/main/straydog-guide" element={<Main />} />





      <Route path="/aboutus" element={<About />} />
      <Route path="/" element={<Welcome />} />
      
    </Routes>





    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
