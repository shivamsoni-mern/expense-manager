const TransactionReducer = (state, action) => {
  if (action.type === "ADD_TRANSACTION") {
    return {
      ...state,
      transactions: [action.payload, ...state.transactions],
    };
  } else if (action.type === "DELETE_TRANSACTION") {
    return {
      ...state,
      transactions: state.transactions.filter(
        (item) => item.id !== action.payload
      ),
    };
  } else if (action.type === "EDIT_TRANSACTION") {
    return {
      ...state,
      edit: { transaction: action.payload, isEdit: true },
    };
  } else if (action.type === "UPDATE_TRANSACTION") {
    return {
      ...state,
      transactions: state.transactions.map((item) =>
        item.id === action.payload.id ? action.payload : item
      ),
      edit: { transaction: {}, isEdit: false },
    };
  }
};

export default TransactionReducer;
