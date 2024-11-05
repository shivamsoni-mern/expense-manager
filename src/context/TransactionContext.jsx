import { createContext, useReducer, useState } from "react";
import TransactionReducer from "./TransactionReducer";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [{ id: 1, text: "Salary", amount: 50000 }],
    edit: {
      transaction: {},
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  const addTransaction = (text, amount) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { id: crypto.randomUUID(), text, amount },
    });
  };

  const removeTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const handleEdit = (transaction) => {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  };

  const updateTransaction = (updatedTransaction) => {
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: updatedTransaction,
    });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        edit: state.edit,
        addTransaction,
        removeTransaction,
        handleEdit,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
