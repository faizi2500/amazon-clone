// import { useReducer } from 'react';
// import CartContext from './CartContext';
// import { ADD_TO_CART, REMOVE_FROM_CART } from '../type';
// import CartReducer from './CartReducer';

// /* eslint-disable react/prop-types */

// const CartState = ({ children }) => {
//   const initialState = {
//     cartItems: [],
//   };

//   const [state, dispatch] = useReducer(CartReducer, initialState);

//   const addToCart = (e, item) => {
//     const atcAction = {
//       type: ADD_TO_CART,
//       payload: item,
//     };
//     e.preventDefault();
//     console.log('Hello');
//     dispatch(state, atcAction, item);
//   };

//   const removeFromCart = (item) => {
//     dispatch({ type: REMOVE_FROM_CART, payload: item });
//   };

//   return (
//     <CartContext.Provider value={{
//       cartItems: state.cartItems,
//       addToCart,
//       removeFromCart,
//       ...state,
//     }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartState;

// /* eslint-enable react/prop-types */
