const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        shoppingList: state.shoppingList.filter(
          (item, index) => index !== action.location,
        ),
        total: state.total - action.payload.price,
      };
    case 'CLEAR ALL':
      return {
        ...state,
        shoppingList: [],
        total: 0,
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
