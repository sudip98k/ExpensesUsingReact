import React,{createContext,useReducer} from 'react';
// import AppReducer from './AppReducer'
//initialstate
const initialState ={
    transactions: [
       { id: 1, text: 'Flower', amount: -20 },
       { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

const AppReducer=(state,action)=>{   
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }

        default:return state;
    }
}

//create context
export const GlobalContext=createContext(initialState);

//provider component
export  const GlobalProvider =({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);
    
    //Action for delete list-item component
        function deleteTransaction(id){
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload:id
            })
        }
    //Action for add list-item component
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }


      return(
      <GlobalContext.Provider value={{
        
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>

        {children}

    </GlobalContext.Provider>)

}