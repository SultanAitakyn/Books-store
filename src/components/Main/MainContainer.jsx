import { connect } from "react-redux";
import Main from "./Main";
import { addBookAC } from "../../redux/reducers/booksReducer";

let mapStateToProps = state => {
  return {
    books: state.booksPage.books.filter(book =>
      book.name.toLowerCase().includes(state.filterReducer.toLowerCase())
    )
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addBook: book => {
      dispatch(addBookAC(book));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
