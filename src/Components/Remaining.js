import React, {useContext} from 'react'
import { GlobalContent } from '../Helper/Global';

export const Remaining = () => {
  const {itemlist} = useContext(GlobalContent);

  const amount = itemlist.map(item => item.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h3>Remaining Amount</h3>
      <h2 >${total}</h2>
    </div>
  )
}
