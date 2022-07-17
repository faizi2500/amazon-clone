// import { ADD_TO_CART, REMOVE_FROM_CART } from '../type';

// const CartReducer = (state, action, item) => {
//   console.log('Hello form reducer');
//   // console.log(action.item);
//   console.log(item);
//   switch (action.type === ADD_TO_CART) {
//     case ADD_TO_CART: {
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     }
//     case REMOVE_FROM_CART: {
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export default CartReducer;
