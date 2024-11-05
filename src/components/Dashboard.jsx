import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext);

  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  return (
    <div className="row g-3 my-3">
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-success text-light">
          <h1 className="display-6">Total Income : </h1>
          <h1 className="display-5">{income}</h1>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-danger text-light">
          <h1 className="display-6">Total Expense : </h1>
          <h1 className="display-5">{expense}</h1>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-warning text-light">
          <h1 className="display-6">Total Balance : </h1>
          <h1 className="display-5">{balance}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
