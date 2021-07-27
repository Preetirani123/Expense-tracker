import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const startingState = {

  itemlist: [
    {id: 1, text: 'Shopping', category: 'Food', amount: -80},
    {id: 2, text: 'Books', category: 'Stationary', amount: -30},
    {id: 3, text: 'Movie', category: 'Entertainment', amount: -40},
    {id: 4, text: 'Income', category: 'Salary', amount: 400}
  ]

}

export const GlobalContent = createContext(startingState);

export const GlobalProvider = ({ children}) => {
const [state, dispatch] = useReducer(AppReducer, startingState);


// Delete action

function deleteList(id){
  dispatch({
    type: 'Delete',
    payload: id
  });
}

// Add Detail

function addList(itemlist){
  dispatch({
    type: 'Add_itemlist',
    payload: itemlist
  });
}

return (<GlobalContent.Provider value={{
  itemlist: state.itemlist,
  deleteList,
  addList
}}>
  {children}
</GlobalContent.Provider>);

}