import React from "react";
import styles from "./Main.module.css";
import Book from "../Book/Book";

const Main = props => {
  let booksElements = props.books.map(b => (
    <Book key={b.id} books={b} addBook={props.addBook} />
  ));

  return <div className={styles.main}>{booksElements}</div>;
};

export default Main;
