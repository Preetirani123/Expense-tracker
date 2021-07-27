import React, {useContext} from 'react';
import { GlobalContent } from '../Helper/Global';

export const ExpenseRecord = () => {
  const {itemlist} = useContext(GlobalContent);
  const amount = itemlist.map(item => item.amount);

  const income = amount.filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1)
  .toFixed(2);

  return (
    <div className="container">
      <div>
        <h4>Income</h4>
        <p className="income-plus">  +${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="income-minus">  -${expense}</p>
      </div>
      
    </div>
  )
}
