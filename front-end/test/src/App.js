import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main'
import Welcome from './pages/Welcome'

function App() {
  return (
    <Routes>

      <Route path="/" element={<Welcome />} />

      {/* MAIN */}
      <Route path="/main" element={<Main page={'main'}/>} />

      {/* STRAYDOG */}
      <Route path="/straydog" element={<Main page={'straydog'}/>} />
      <Route path="/straydog-detail" element={<Main page={'straydog-detail'}/>} />
      <Route path="/straydog-guide" element={<Main page={'straydog-guide'}/>} />6
      <Route path="/straydog-success" element={<Main page={'straydog-success'}/>} />
      <Route path="/straydog-fail" element={<Main page={'straydog-fail'}/>} />

      {/* LOSTDOG */}
      <Route path="/lostdog" element={<Main page={'lostdog'}/>} />

      {/* REMOTEPLAY */}
      <Route path="/remoteplay" element={<Main page={'remoteplay'}/>} />
      <Route path="/remoteplay-guide" element={<Main page={'remoteplay-guide'}/>} />

      {/* NAVBAR */}
      <Route path="/aboutus" element={<Main page={'aboutus'}/>} />
      <Route path="/ucc" element={<Main page={'ucc'}/>} />
      <Route path="/mypage" element={<Main page={'mypage'}/>} />
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
