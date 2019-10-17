import  React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selecExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key ={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selecExpenses(state.expenses, state.filters),
    };
};

export default  connect(mapStateToProps)(ExpenseList)
