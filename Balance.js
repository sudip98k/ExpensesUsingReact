import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'


function Balance() {
  const {transactions}=useContext(GlobalContext);
  // console.log(context);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}

export default Balance
