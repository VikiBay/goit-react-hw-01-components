// import PropTypes from "prop-types";
import { StatisticsItem } from "./StatisticsItem";



// export const Profile = ({content:{username, avatar,stats:{followers,views,likes}}})=>{
    export const Statistics = ({title, stats})=>{
        return (
            <section className="statistics">
  <h2 className="title">{title}</h2>
  <ul style={{display: 'flex'}} className="stat-list">
{stats.map(stat=>(
    <StatisticsItem key={stat.id} data={stat}/>
))}
  </ul>
</section> 
        );
    };
    

// Statistics.propTypes = {
//     data:PropTypes.exact({
//         id:PropTypes.number.isRequired,
//         avatar:PropTypes.string,
//         username:PropTypes.string.isRequired,
//         location:PropTypes.string.isRequired,
//         tag:PropTypes.string.isRequired,
//         stats:PropTypes.object.isRequired,
//         difficulty:PropTypes.oneOf(['Easy', 'Medium', 'Hard']).isRequired
//     })
    
// }