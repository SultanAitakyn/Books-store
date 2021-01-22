import React from "react";
import styles from "./Book.module.css";

const Book = props => {
  return (
    <div className={styles.book__item}>
      <img className={styles.book__photo} src={props.books.photoUrl}></img>
      <span className={styles.book__name}>{props.books.name}</span>
      <span className={styles.book__price}>{props.books.price}$</span>
      {props.addBook ? (
        <button
          className={styles.add__button}
          onClick={() => props.addBook(props.books)}
        >
          Add to cart
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Book;
