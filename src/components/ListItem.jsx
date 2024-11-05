import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const ListItem = ({ transaction }) => {
  const { removeTransaction, handleEdit } = useContext(TransactionContext);

  return (
    <li className="list-group-item">
      <h1 className="display-6">{transaction.amount}</h1>
      <p>{transaction.text}</p>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm mx-1"
          onClick={() => handleEdit(transaction)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm mx-1"
          onClick={() => removeTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
