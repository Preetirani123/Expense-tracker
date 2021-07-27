import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const startingState = {

  itemlist: [
    {id: 1, text: 'Shopping', category: 'Food', amount: -80},
    {id: 2, text: 'Books', category: 'Stationary', amount: -30},
    {id: 2, text: 'Movie', category: 'Entertainment', amount: -40}
  ]

}

export const GlobalContent = createContext(startingState);

export const GlobalProvider = ({ children}) => {
const [state, dispatch] = useReducer(AppReducer, startingState);

return (<GlobalContent.Provider value={{
  itemlist: state.itemlist
}}>
  {children}
</GlobalContent.Provider>);

}