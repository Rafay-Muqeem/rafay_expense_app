import { useContext } from "react"
import { transContext } from "./transContext"

const Transaction = ( {transaction}) => {

    let { del_Transaction } = useContext(transContext);

    // const delItem = (event) => {
    //     event.preventDefault();

    //     del_Transaction(transaction.id);
    // }
    // return (
    //     <div className="transactionlist">
    //         <ul>
    //             <li key= {transaction.id}>
    //                 <span>{transaction.id}</span>
    //                 <span>{transaction.name}</span>
    //                 <span>{transaction.amount}</span>
    //                 <button onClick={ () => del_Transaction(transaction.id)}>
    //                     X
    //                 </button>
    //             </li>
    //         </ul>
    //     </div>
    // );
}

export default Transaction;