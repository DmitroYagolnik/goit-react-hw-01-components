import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import './style.css';

import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
