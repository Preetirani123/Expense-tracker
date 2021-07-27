import React, {useContext}  from 'react';
import { GlobalContent } from '../Helper/Global';

export const List = ({item}) => {
  const {deleteList} = useContext(GlobalContent)
  const sign = item.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className="list-item">
          {item.text} <span>{item.category}</span><span>{sign}${Math.abs(item.amount)}</span>
          <button onClick={() => deleteList(item.id)} className="delete-button"> X</button>
        </li>
    </div>
  )
}
