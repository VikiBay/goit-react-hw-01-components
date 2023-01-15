// import PropTypes from "prop-types";
import { StatisticsItem } from "../StatisticsItem/StatisticsItem";
import {Wrapper,StatList} from './Statistics.styled'

import PropTypes from "prop-types";

    export const Statistics = ({title, stats})=>{
        return (
<Wrapper>
  <h2 className="title">{title}</h2>
  <StatList>
{stats.map(stat=>(
    <StatisticsItem key={stat.id} data={stat}/>
))}
  </StatList>
</Wrapper> 
        );
    };
    

    Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(PropTypes.exact({
            id:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired
        }))
        }