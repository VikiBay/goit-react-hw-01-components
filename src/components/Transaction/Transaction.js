import PropTypes from "prop-types";
import {TablelRow} from './Transaction.styled'

export const Transaction = ({data:{id, type, amount, currency}})=>{
    return <TablelRow>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </TablelRow>
}

Transaction.propTypes = {
    data:PropTypes.exact({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
    })
    
  }