const FIND_BOOK = 'FIND_BOOK';

let initialState = '';

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
    case FIND_BOOK: 
      return action.bookName;
    default:
      return state;
  }
};

export const findBookAC = (bookName) =>{
    return {
        type: FIND_BOOK, bookName
    }
}

export default filterReducer;
