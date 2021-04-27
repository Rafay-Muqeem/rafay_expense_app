import { useContext } from "react"
import { transContext } from "./transContext"

const TransactionList = () => {
    let {transactions, del_Transaction} = useContext(transContext);
    
    return (
        <div className="transactionlist">
           <h2>History</h2>
           <ul>
                {transactions.map((transObj, ind)  => 

                    <li key = {ind}>
                        <span>{transObj.name}</span>
                        <span>${transObj.amount}</span>
                        <button onClick={ () => del_Transaction(transObj.id)}>
                            X
                        </button>
                    </li>
                  

                )}
            </ul>
        </div>
    ); 
}

export default TransactionList;