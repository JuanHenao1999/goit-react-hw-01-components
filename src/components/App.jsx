import { Profile } from "./profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import userProfile from '../data/user.json';
import dataStatistics from '../data/data.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics
      title="Upload stats"
      stats={dataStatistics}
      />
      <Statistics
      stats={dataStatistics}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  )
}
