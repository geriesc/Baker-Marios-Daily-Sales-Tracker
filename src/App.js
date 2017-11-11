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
      console.log(logo)
      return (  
      <div class="text-center">
        <br />
      <img class= "rounded mx-auto d-block img-rounded" src='https://image.ibb.co/gHMuVw/Mario_s_Daily_Tracker.jpg' alt="Logo" />
      <br />
      <br />
      <div className="container jumbotron">
        <div className="row">
          <div className="col-sm-6">
            <TransactionForm addTransaction={this.addTransaction} />
          </div>
          <div className="col-sm-6">
          <table className="transaction-history-table">
            <thead>
              <tr> 
              <strong> <th>Customer's Name</th> </strong>
              <th> <strong>Order</strong> </th> 
              <th> <strong> Amount </strong> </th>
                </tr>
            </thead>
          <tbody>
          {list}
          <tr>
            <hr />
          <strong>
            <td> Total:  </td>
              <td> {total} </td>
              </strong>
              </tr>
          </tbody>
          </table>
          </div>
        </div>
        
<div class="footer">
  <p>Designed by: GeriEsc</p>
</div>
        
      </div>
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