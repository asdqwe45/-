import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import { useState } from 'react';

function App() {

  const [dogID, setDogID] = useState(null)

  // // const location =;    
  // if ( location != null) {

  //   setDogID(location.state)
  // }
  // console.log(dogID)

  return (
    <Routes>

      <Route path="/" element={<Welcome />} />

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />



      {/* MAIN */}
      <Route path="/main" element={<Main page={'main'} />} />
      <Route path="/main" element={<Main page={'main-carousel'} />} />

      {/* STRAYDOG */}
      <Route path="/straydog" element={<Main page={'straydog'} />} />
      <Route path="/straydog-detail/:id" element={<Main page={'straydog-detail'} />} />
      <Route path="/straydog-guide" element={<Main page={'straydog-guide'} />} />
      <Route path="/straydog-success" element={<Main page={'straydog-success'} />} />
      <Route path="/straydog-fail" element={<Main page={'straydog-fail'} />} />

      {/* LOSTDOG */}
      <Route path="/lostdog" element={<Main page={'lostdog'} />} />
      <Route path="/lostdog-detail/:id" element={<Main page={'lostdog-detail'} />} />
      <Route path="/lostdog/create" element={<Main page={'lostdog-create'} />} />
      <Route path="/lostdog/update/:id" element={<Main page={'lostdog-update'} />} />

      {/* REMOTEPLAY */}
      <Route path="/remoteplay" element={<Main page={'remoteplay'} />} />
      <Route path="/remoteplay-guide" element={<Main page={'remoteplay-guide'} />} />

      {/* NAVBAR */}
      <Route path="/aboutus" element={<Main page={'aboutus'} />} />
      <Route path="/ucc" element={<Main page={'ucc'} />} />
      <Route path="/mypage" element={<Main page={'mypage'} />} />

      {/* ADMIN */}
      <Route path="/admin/create" element={<Main page={'admin-create'} />} />
      <Route path="/admin/update/:id" element={<Main page={'admin-update'} />} />
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
