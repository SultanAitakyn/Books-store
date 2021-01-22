import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { findBookAC } from "../../redux/reducers/filterReducer";
import { withRouter } from "react-router";

class HeaderContainer extends React.Component {

    render() {
    return (
        <Header {...this.props} />
    );
  }
}

let mapStateToProps = state => {
  return{
    cart: state.booksPage.cart,
    search: state.filterReducer
  };
};

let mapDispatchToProps = dispatch => {
  return{
    findBook: (bookName)=>{
      dispatch(findBookAC(bookName));
    }
  }
};

let withUrlDataHeaderComponent = withRouter(HeaderContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withUrlDataHeaderComponent);
