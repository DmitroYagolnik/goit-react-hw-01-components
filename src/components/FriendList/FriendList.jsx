import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends = [] }) => (
  <ul className={style.friendList}>
    {friends.map(item => {
      const statusClass = item.isOnline
        ? style.statusIsOnline
        : style.statusIsOffline;
      return (
        <li key={item.id} className={style.item}>
          <span className={statusClass} />
          <img className={style.avatar} src={item.avatar} alt="Avatar" />
          <p className={style.name}>{item.name}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
