import React from "react";
import { menulist } from "./model-navbar";
import "./style-navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menulist,
      isMenuToggleOn: false,
    };
  }

  toggleMenu(e) {
    e.stopPropagation();

    this.setState(({ isMenuToggleOn }) => ({
      isMenuToggleOn: !isMenuToggleOn,
    }));
  }

  render() {
    return (
      <header>
        <div className="container">
          <h1 className="logo">
            ent<span>honor</span>
          </h1>
          <nav
            className={
              "site-nav " +
              (this.state.isMenuToggleOn
                ? "site-nav--open "
                : " ")
            }
          >
            <ul>
              {this.state.menulist.map((menu, index) => {
                return (
                  <li key={index}>
                    <a href="">
                      <i className={"fa " + menu.icon}></i>{menu.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="menu-toggle" onClick={this.toggleMenu.bind(this)}>
            <div
              className={
                "hamburger " +
                (this.state.isMenuToggleOn
                  ? "hamburger--open "
                  : " ")
              }
            ></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
