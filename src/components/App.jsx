import React from 'react';

import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import './style.css';

import user from './Profile/user.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Stats title="Upload stats" stats={stats} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
