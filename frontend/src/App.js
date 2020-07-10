import React from 'react';
// import logo from './logo.svg';
import data from './data';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
           <button onClick ={ openMenu }>
              &#9776;
          </button>
          <Link to="/">Amazon_Clone</Link> 
          {/* <a href="index.html">Amazon_Clone</a> */}
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
              <Link to="/signin">Signin</Link>
            }
          {/* <a href="signin.html">Sign In</a> */}
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={ closeMenu }>X</button>
        <ul>
          <li>
            <a href="index.html">Clothing</a>
          </li>
          <li>
            <a href="index.html">Electronics</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/register" component={RegisterScreen} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
           
            </div>
        </main>
                  <footer className="footer">
                    All Rights reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
