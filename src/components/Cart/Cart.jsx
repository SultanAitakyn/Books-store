import React from "react";
import styles from "./Cart.module.css";
import Book from "../Book/Book";

const Cart = props => {
  let booksElements = props.cart.map(b => <Book key={b.id} books={b} />);

  let totalPrice = props.cart.reduce((sum, current) => sum + current.price,0);

  return (
    <div className={styles.cart}>
      <div className={styles.cart__books}>{booksElements}</div>
      <div className={styles.totalPrice}>
        {totalPrice !==0 ? <span>Total Price:{totalPrice}$</span> : <span>Your cart is empty</span>}
      </div>
    </div>
  );
};

export default Cart;
