import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  shoppingList: [],
  user: '',
};

/* eslint-disable react/prop-types */
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addItemToList(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  }

  function removeItemFromList(e, item, index) {
    e.preventDefault();
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
      location: index,
    });
  }

  function clearCart() {
    dispatch({
      type: 'CLEAR ALL',
      payload: [],
    });
  }

  function addUser(item) {
    dispatch({
      type: 'User Authorized',
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider value={{
      shoppingList: state.shoppingList,
      user: state.user,
      addItemToList,
      removeItemFromList,
      clearCart,
      addUser,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
