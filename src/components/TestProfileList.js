import { TestProfile } from "./TestProfile";
import PropTypes from "prop-types";

export const TestProfileList = ({content})=>{
    return (
    <div style={{display: 'flex', gap: 16}}>
        {content.map(user =>(
            
            <TestProfile key={user.id} data={user}/>
         ))}
        </div>
        
    );
};

TestProfileList.propTypes = {
content: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired}))
}