import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Mypage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Youtube</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

function Discript1() {
  return (
    <div>

      <h1>Welcome to our homepage</h1>
      <hr />
    </div>

  );
}

function Discript2() {
  return (
    <div>

      <h1>유기견 관련 홈페이지입니다.</h1>
      <hr />
    </div>

  );
}

function Maindog() {
  return (
    <div>
      <img src="/maindog.jpg" alt="main dog" className='maindogimg' />
    </div>
  );
}


function Menu() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <nav id="topMenu">
        <ul>
          <li className="topMenuLi">
            <a className="menuLink" href="#">유기견</a>
            <ul className="submenu">
              <li><a href="#" className="submenuLink longLink">1</a></li>
              <li><a href="#" className="submenuLink longLink">2</a></li>
              <li><a href="#" className="submenuLink longLink">3</a></li>
              <li><a href="#" className="submenuLink longLink">4</a></li>

            </ul>
          </li>
          <li>|</li>
          <li className="topMenuLi">
            <a className="menuLink" href="#">분실견</a>
            <ul className="submenu">
              <li><a href="#" className="submenuLink">1</a></li>

            </ul>
          </li>
          <li>|</li>
          <li className="topMenuLi">
            <a className="menuLink" href="#">놀아주기</a>
            <ul className="submenu">
              <li><a href="#" className="submenuLink">1</a></li>
              <li><a href="#" className="submenuLink">2</a></li>

            </ul>
          </li>
          <li>|</li>
          <li className="topMenuLi">
            <a className="menuLink" href="#">게시판</a>
            <ul className="submenu ">
              <li><a href="#" className="submenuLink">1</a></li>
              <li><a href="#" className="submenuLink">2</a></li>
              <li><a href="#" className="submenuLink">3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}



function App() {
  return (
    <BrowserRouter>

      <div class='App'>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <Discript1></Discript1>
          </Route>
          <Route>
            <Discript2 path="/ugi"></Discript2>
          </Route>
        </Switch>

        <Menu></Menu>
        <Maindog></Maindog>
      </div>
    </BrowserRouter>

  );
}

export default App;

