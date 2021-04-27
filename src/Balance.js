import React, { useContext } from 'react';
// import { Income } from './Income';
// import { Expense } from './Expense';
import { transContext } from './transContext';

export const Income = () => {
    let {transactions} = useContext(transContext);
    let income = 0;
    
    for(var i=0 ; i < transactions.length; i++){
        if(transactions[i].amount > 0){
            income += transactions[i].amount
        }
    }

    return income;
}

export const Expense = () => {
    let {transactions} = useContext(transContext);
    let expense = 0;

    for(var i=0; i < transactions.length; i++){
        if(transactions[i].amount < 0){
            expense += transactions[i].amount
        }
    }

    return expense;
}

// export const Transactionlist = () => {
//     let {transactions} = useContext(transContext);
//     transactions.map((transObj) => {
//         console.log(transObj);
//         return(
//             <TransactionList transaction = {transObj} />
//         );
//     });   
// }

export const Balance = () => {
    return(
        <div className="Balance">
            <h2>Your Balance</h2>
            <h4>${Income() + Expense() }</h4>
            <div className="incomeexpense">
                <h2>Income</h2>
                <h4>${Income()}</h4>
                <h2>Expense</h2>
                <h4>${Expense()}</h4>
            </div>          
        </div>
    )
}