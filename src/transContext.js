import {createContext, useReducer} from 'react';
import {transReducer} from './transReducer';

const initialState = [
    // { amount: 1000, name: "income" },
    // { amount: 500, name: "Cash" },
    // { amount: -50, name: "Cold Drink" },
    // { amount: 100, name: "Deposit" },
    // { amount: -200, name: "Utility Bill" }, 
]

export const transContext = createContext(initialState);

export const Provider = ({children}) => {
    let [state, dispatch] = useReducer(transReducer, initialState);
    
    function add_Transaction(transObj){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                id: transObj.id,
                amount: transObj.amount,
                name: transObj.name
            }
        });
    }

    function del_Transaction(id){
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: id
        });
    }

    return(
        <transContext.Provider value={{
            transactions: state,
            add_Transaction,
            del_Transaction
        }}>
            {children}
        </transContext.Provider>
    );
}