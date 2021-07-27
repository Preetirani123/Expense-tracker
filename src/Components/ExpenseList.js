import React, {useContext} from 'react'
import { GlobalContent } from '../Helper/Global';
import { List } from './List';

export const ExpenseList = () => {
  const {itemlist} = useContext(GlobalContent);

  return (
    <>
      <h3>List</h3>
      <ul className="list" >
        {itemlist.map(item => (<List key={item.id} item={item}/>))}
      </ul>
    </>
  )
}
