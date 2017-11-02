import React, {Component} from 'react'

class TransactionForm extends Component {

state = {
    name: "",
    amount: 0,
    order: ""
}

setName = (v) => {
    this.setState({name: v.target.value})
}

setAmount = (v) => {
    this.setState({amount: parseFloat(v.target.value)})
}

setOrder =(v) => {
    this.setState({order: v.target.value})
}

save = () => {
    this.props.addTransaction(this.state)
    //reset
    this.setState({
        name: "",
        amount: 0,
        order: ""
    })
}
    render() {
        console.log('render')
        return (
            <div>
                <input value={this.state.name} onChange={this.setName} type="text" placeholder="Customer Name"/>
                <input value={this.state.amount} onChange={this.setAmount} type="number" placeholder="Amount"/>
                <input value={this.state.order} onChange={this.setOrder} type="text" placeholder="Order"/>
                <button onClick={this.save}>
                    Add Transaction
                    </button>
                </div>
        )
    }
}

export default TransactionForm