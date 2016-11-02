import React, { Component } from 'react';

class Account extends Component {

  constructor(){
    super();
    this.state={
      balance:0
    }
  }
  
  _depositClick(){
    let newBalance=this.refs.newamount.value;
    console.log(newBalance)
    this.setState({
      balance: this.state.balance + +newBalance
    })
  }
  _withdrawlClick(){
    let newBalance=this.refs.newamount.value;
    let currentBalance = this.state.balance;
    if (newBalance>currentBalance) {
        alert('You may not overdraw');
    } else {
        this.setState({
          balance:currentBalance - newBalance
        })
    }
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input ref="newamount" type="text" placeholder="enter an amount" />
        <input onClick={()=> this._depositClick()} type="button" value="Deposit" />
        <input onClick={(event)=>this._withdrawlClick(event)} type="button" value="Withdrawl" />
      </div>
    )
  }
  _addBalance(balance){
    let currentBalance= this.state.balance;
    let newBalance ={}
    newBalance.balance=balance;
    currentBalance.push(newBalance)
    this.setState({
      balance:currentBalance
    })
  }
}
export default Account;
