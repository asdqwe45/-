import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import Welcome from './pages/Welcome'

function App() {
  return (
    <Routes>

      <Route path="/" element={<Welcome />} />

      {/* MAIN */}
      <Route path="/main" element={<Main />} />

      {/* STRAYDOG */}
      <Route path="/straydog" element={<Main />} />
      <Route path="/straydog-guide" element={<Main />} />
      <Route path="/straydog-success" element={<Main />} />
      <Route path="/straydog-fail" element={<Main />} />

      {/* LOSTDOG */}
      <Route path="/lostdog" element={<Main />} />

      {/* REMOTEPLAY */}
      <Route path="/remoteplay" element={<Main />} />
      <Route path="/remoteplay-guide" element={<Main />} />

      {/* NAVBAR */}
      <Route path="/aboutus" element={<Main />} />
      <Route path="/ucc" element={<Main />} />
      <Route path="/mypage" element={<Main />} />
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
