import { useContext } from "react";
import { transContext } from "./transContext";

export const Income = () => {
    let {transactions} = useContext(transContext);
    let income = 0;
    for(var i=0; i < transactions.length; i++){
        if(transactions[i].amount > 0){
            income += income + transactions[i].amount
        }
    }
    return(
        income
    )
}