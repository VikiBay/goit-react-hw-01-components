import {BsAlarm} from 'react-icons/bs';
import PropTypes from "prop-types";

export const TestProfile = ({data:{username, avatar,stats:{followers,views,likes}}})=>{
    return <div><h2>{username}</h2>
    <img src={avatar} alt={username} width='240'></img>
    <ul>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
    </ul>
    <h3><BsAlarm/>Difficulty</h3>
    <div>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
    </div>
    </div>
}

TestProfile.propTypes = {
    data:PropTypes.exact({
        id:PropTypes.number.isRequired,
        avatar:PropTypes.string,
        username:PropTypes.string.isRequired,
        tag:PropTypes.string.isRequired,
        location:PropTypes.string.isRequired,
        stats:PropTypes.object.isRequired,
        difficulty:PropTypes.oneOf(['Easy', 'Medium', 'Hard']).isRequired



    })
    
}