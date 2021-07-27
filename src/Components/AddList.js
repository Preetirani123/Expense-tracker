import React, {useState} from 'react'

export const AddList = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
    <h3>Expense List Form</h3>
    <form >
      <div className="form-control"> 
        <label htmlFor="text">Name </label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name of the expense"/>
      </div>
      <div className="form-control"> 
        <label htmlFor="text">Category </label>
        <input type="text"  value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category of the purchase"/>
      </div>
      <div className="form-control"> 
        <label htmlFor="amount">Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter Amount"/>
      </div>
    </form>  
    </>
  )
}
