import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
    // {
    //     id:'e1',
    //     title:"School fee",
    //     amount:250,
    //     date:new Date(2023,3,5)
    // },

    // {
    //     id:'e2',
    //     title:"Books",
    //     amount:230,
    //     date:new Date(2023,3,8)
    // },

    // {
    //     id:'e3',
    //     title:"House Rent",
    //     amount:500,
    //     date:new Date(2023,3,6)
    // },

    // {
    //     id:'e4',
    //     title:"Food",
    //     amount:550,
    //     date:new Date(2023,3,7)
    // }
];

const App = () => {

    const [expenses, setExpenses]= useState(DUMMY_EXPENSE);

    const addExpenseHandler = ( expense ) => {

        const updatedExpense=[expense, ...expenses];

        setExpenses(updatedExpense);
    };

    return(

        <div>

            <NewExpense onAddExpense={addExpenseHandler} /> 
            
            <Expenses item={expenses} />
            
        </div>

    );
}

export default App;