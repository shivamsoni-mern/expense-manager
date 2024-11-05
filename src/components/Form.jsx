import React, { useContext, useEffect, useState } from "react";
import TransactionContext from "../context/TransactionContext";

const Form = () => {
  const { addTransaction, edit, updateTransaction } =
    useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTransaction({ id: edit.transaction.id, text, amount: +amount })
      : addTransaction(text, +amount);

    setAmount("");
    setText("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="card p-3">
      <h1 className="text-center">Enter Your Transaction</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Enter Transaction"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          className="form-control my-2"
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-success w-100">Submit</button>
      </form>
    </div>
  );
};

export default Form;
