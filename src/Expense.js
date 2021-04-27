import { useContext } from "react";
import { transContext } from "./transContext";

export const Expense = () => {
    let {transactions} = useContext(transContext);
    let expense = 0;
    for(var i=0; i < transactions.length; i++){
        if(transactions[i].amount > 0){
            expense += expense + transactions[i].amount
        }
    }
    return(
        expense
    )
}