import React from "react";
import PropTypes from 'prop-types';
import cssTransactionHistory from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {

  function FirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <table className={cssTransactionHistory['transaction-history']}>
      <thead className={cssTransactionHistory['head']}></thead>
      <tr className={cssTransactionHistory['table-head']}>
        <th className={cssTransactionHistory['title-table']}>TYPE</th>
        <th className={cssTransactionHistory['title-table']}>AMOUT</th>
        <th className={cssTransactionHistory['title-table']}>CURRENCY</th>
      </tr>

      <tbody>
        {items.map(({id, type, amount, currency}) => {
          return (
            <tr className={cssTransactionHistory['arrow-table']} key={id}>
              <td>{FirstLetter(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
}
