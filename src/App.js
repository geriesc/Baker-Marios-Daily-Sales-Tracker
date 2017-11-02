import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionForm from './transactionForm'
import Logo from './logo'

class App extends Component {
  state = {
    transactions: []
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }
    render () {
      var list = []
      var total = 0
      this.state.transactions.forEach(transaction => {
        total = total + transaction.amount
        list.push(
          <ListItem
          name={transaction.name}
          order={transaction.order}
          amount={transaction.amount}/>
            )
      })
      return (
      <div className="container">
        <TransactionForm addTransaction={this.addTransaction} />
        <table className="transaction-history-table">
          <tbody>
          {list}
          <tr>
            <td> Total: </td>
              <td> {total} </td>
              </tr>
          </tbody>
          </table>
      </div>
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.name}
          </td>

          <td>
            {this.props.order}
          </td>
          
        <td>
          {this.props.amount}
          </td>
    </tr>    
    )
  }
}
export default App;