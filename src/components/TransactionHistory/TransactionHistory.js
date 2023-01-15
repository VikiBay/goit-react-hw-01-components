import { Transaction } from "components/Transaction/Transaction";
import PropTypes from "prop-types";
import {Table,HeadRow} from './TransactionHistory.styled'

export const TransactionHistory = ({transactions})=>{
    return (
        <Table>
        <thead>
          <HeadRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </HeadRow>
        </thead>
      
        <tbody>
{transactions.map(transaction=>
    (<Transaction key={transaction.id} data={transaction}/>))
     }
        </tbody>
      </Table>
            ); 
}

TransactionHistory.propTypes = {
  
    transactions: PropTypes.arrayOf(PropTypes.exact({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
    }))
    }