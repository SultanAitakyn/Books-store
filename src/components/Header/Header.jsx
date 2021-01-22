import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/books__logo.png";
import cart from "../../assets/img/cart.png";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Header = props => {
  let onSearchChange = e => {
    props.findBook(e.target.value);
  };

  let path = props.location.pathname;

  return (
    <header>
      <div className={styles.header__app}>
        <div>
          <NavLink to="/">
            <img className={styles.logo} src={logo} alt="books logo"></img>
          </NavLink>
        </div>

        {path === "/cart" ? (
          <h2 className={styles.cart__title}>Cart</h2>
        ) : (
          <div className={styles.search}>
            <input
              onChange={onSearchChange}
              type="text"
              className={styles.search__input}
              placeholder="What are you looking for?"
              value={props.search}
            />
            <button type="submit" className={styles.search__button}>
              <i class="fa fa-search"></i>
            </button>
          </div>
        )}
        <div className={styles.cart__button}>
          <NavLink to="/cart" className={styles.cartButton__link}>
            <img
              className={styles.cartButton__icon}
              src={cart}
              alt="cart icon"
            ></img>
            <span class={styles.badge}>{props.cart.length}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
