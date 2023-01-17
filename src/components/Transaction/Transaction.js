import PropTypes from 'prop-types';
import { TablelRow, TypeColumn } from './Transaction.styled';

export const Transaction = ({ data: { id, type, amount, currency } }) => {
  return (
    <TablelRow>
      {/* <TypeColumn>{type[0].toUpperCase()+type.slice(1)}</TypeColumn> */}
      <TypeColumn>{type}</TypeColumn>
      <td>{amount}</td>
      <td>{currency}</td>
    </TablelRow>
  );
};

Transaction.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
