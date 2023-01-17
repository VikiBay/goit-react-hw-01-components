import PropTypes from 'prop-types';
import { CardWrapper, Avatar, Status, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <CardWrapper>
      <Status isActive={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </CardWrapper>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
