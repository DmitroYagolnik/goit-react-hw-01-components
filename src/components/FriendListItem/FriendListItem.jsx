import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? style.statusIsOnline : style.statusIsOffline;
  return (
    <>
      <span className={statusClass} />
      <img className={style.avatar} src={avatar} alt="Avatar" />
      <p className={style.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
