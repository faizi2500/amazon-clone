import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// import AppReducer from './GlobalState';

const initialState = {
  shoppingList: [],
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

  return (
    <GlobalContext.Provider value={{ shoppingList: state.shoppingList, addItemToList }}>
      {children}
    </GlobalContext.Provider>
  );
};
