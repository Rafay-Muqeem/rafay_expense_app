import TransactionList from "./transactionList";

export const transReducer = ((state, action) => {
    switch(action.type){

        case 'ADD_TRANSACTION': {
            return (
               [action.payload, ...state]
            );

        }

        case 'DEL_TRANSACTION': { 
            return(
               state.filter(transaction => transaction.id !== action.payload)

            );
            
        }

        default:
            return state;
    };
})