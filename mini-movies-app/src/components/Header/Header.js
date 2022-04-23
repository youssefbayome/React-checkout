import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/LOGO.svg";
import AddFilm from "../../images/add.svg";

import { Wrapper, Content, LogoImg, Add } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <Link to="./Add">
        <Add src={AddFilm} alt="add movie to your list" />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;
