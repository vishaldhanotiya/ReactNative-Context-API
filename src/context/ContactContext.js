import React from 'react';
import createCommonContext from './createCommonContext';
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          name: action.payload.name,
          number: action.payload.number,
        },
      ];

    case 'EDIT_CONTACT':
      return;

    case 'DELETE_CONTACT':
      return state.filter(item => item.id !== action.payload);
  }
};
export const addContact = dispatch => {
  return (name, number) => {
    dispatch({type: 'ADD_CONTACT', payload: {name, number}});
  };
};
export const deleteContact = dispatch => {
  return id => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };
};
export const {Context, Provider} = createCommonContext(
  reducer,
  {addContact, deleteContact},
  [],
);
