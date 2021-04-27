import React from 'react';
import  AddTransaction  from './addTransaction';
import './App.css';
import { Balance } from './Balance';
import  TransactionList  from './transactionList';
import {Provider} from './transContext';

function App() {
  return (
    <Provider>
      <h1 className="header">Expence Tracker</h1>
      <div className="container">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
