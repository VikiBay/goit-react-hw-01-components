import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Info,
  Stats,
  StatCard,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <StatCard>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatCard>
        <StatCard>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatCard>
        <StatCard>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatCard>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
