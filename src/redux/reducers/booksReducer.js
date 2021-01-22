const ADD_BOOK = 'ADD_BOOK';

let initialState = {
  books: [
    {
      id: 1,
      name: "Crime and Punishment",
      price: 50,
      photoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Crimeandpunishmentcover.png/200px-Crimeandpunishmentcover.png"
    },
    {
      id: 2,
      name: "2666",
      price: 20,
      photoUrl: "https://www.powells.com/portals/0/images/9780312429218.jpg"
    },
    {
      id: 3,
      name: "All About Love",
      price: 40,
      photoUrl: "https://www.powells.com/portals/0/images/9780060959470.jpg"
    },
    {
      id: 4,
      name: "Desert Solitaire",
      price: 70,
      photoUrl: "https://www.powells.com/portals/0/images/9780671695880.jpg"
    },
    {
      id: 5,
      name: "Disgrace",
      price: 60,
      photoUrl: "https://www.powells.com/portals/0/images/9780140296402.jpg"
    },
    {
      id: 6,
      name: "Geek Love",
      price: 25,
      photoUrl: "https://www.powells.com/portals/0/images/9780375713347.jpg"
    },
    {
      id: 7,
      name: "Infinite Jest",
      price: 99,
      photoUrl: "https://www.powells.com/portals/0/images/9780316306058.jpg"
    },
    {
      id: 8,
      name: "Man's Search for Meaning",
      price: 76,
      photoUrl: "https://www.powells.com/portals/0/images/9780807014271.jpg"
    }
  ],
  cart: []
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, cart: [...state.cart, action.book] };
    default:
      return state;
  }
};

export const addBookAC = book => {
  return {
    type: ADD_BOOK,
    book
  };
};

export default booksReducer;
