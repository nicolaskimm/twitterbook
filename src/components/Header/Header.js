import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import HeaderNavigation from "./HeaderNavigation";
import logoImage from "../../assets/images/logo.svg";

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img src={logoImage} alt="FavNote" className={styles.logo} />
    <HeaderNavigation />
    <Button secondary onClick={openModalFn}>
      new item
    </Button>
  </header>
);

export default Header;
