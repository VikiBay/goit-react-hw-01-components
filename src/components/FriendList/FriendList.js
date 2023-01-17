import { FriendListItem } from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { Wrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
