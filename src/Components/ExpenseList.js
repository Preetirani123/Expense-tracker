import React from 'react'

export const ExpenseList = () => {
  return (
    <>
      <h3>List</h3>
      <ul >
        <li className="list-item">
          Shopping <span>Category</span><span>-$300</span><button className="delete-button"> X</button>
        </li>
      </ul>
    </>
  )
}
