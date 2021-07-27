import React from 'react'

export const AddList = () => {
  return (
    <>
    <h3>Expense List Form</h3>
    <form >
      <div className="form-control"> 
        <label for="text">Name </label>
        <input type="text"  placeholder="Enter name of the expense"/>
      </div>
      <div className="form-control"> 
        <label for="text">Category </label>
        <input type="text"  placeholder="Enter Category of the purchase"/>
      </div>
      <div className="form-control"> 
        <label for="amount">Amount</label>
        <input type="number"  placeholder="Enter Amount"/>
      </div>
    </form>  
    </>
  )
}
