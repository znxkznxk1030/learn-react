import React from "react";
import "./Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <div class="container">
          <h1 class="logo">ent<span>honor</span></h1>
          <nav class="site-nav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Weekly</a>
              </li>
              <li>
                <a href="">Programs</a>
              </li>
              <li>
                <a href="">Talents</a>
              </li>
            </ul>
          </nav>

          <div class="menu-toggle">
            <div class="hamburger"></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
