import { connect } from "react-redux";
import Cart from "./Cart";


let mapStateToProps = state => {
  return {
    cart: state.booksPage.cart
  };
};

let mapDispatchToProps = dispatch => {
    return{
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
