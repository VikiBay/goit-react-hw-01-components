import PropTypes from 'prop-types';
import { StatItem, Label, Percentage } from './StatisticsItem.styled';

export const StatisticsItem = ({ data: { id, label, percentage } }) => {
  return (
    <StatItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
