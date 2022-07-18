const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        shoppingList: [...state.shoppingList, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        shoppingList: state.shoppingList.filter(
          (item, index) => index !== action.location,
        ),
      };
    case 'CLEAR ALL':
      return {
        shoppingList: [],
      };
    default:
      return state;
  }
};

export default AppReducer;
