const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item, index) => index !== action.location,
        ),
      };
    case 'CLEAR ALL':
      return {
        ...state,
        shoppingList: [],
      };
    case 'User Authorized':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
