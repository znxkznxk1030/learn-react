import React from 'react';
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";

const NavBar = () => (
  <hcader>
    css ={css`
      background-color: #333;
      padding: 15px;
    `}
    <Link to="/">Adopt Me!</Link>
    <span role="img" aria-label="logo">🐩</span>
  </hcader>
)

export default NavBar