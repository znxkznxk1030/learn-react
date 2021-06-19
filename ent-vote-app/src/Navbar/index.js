import React from "react";
import { menulist } from "./model-navbar";
import "./style-navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menulist,
    };
  }

  render() {
    return (
      <header>
        <div class="container">
          <h1 class="logo">
            ent<span>honor</span>
          </h1>
          <nav class="site-nav">
            <ul>
              {this.state.menulist.map((menu) => {
                return (
                  <li>
                    <a href="">{menu.name}</a>
                  </li>
                );
              })}
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
