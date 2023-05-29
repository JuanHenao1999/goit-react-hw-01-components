import React from "react";
import cssFriendlist from  './FriendList.module.css'
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
  return (
    <ul className={cssFriendlist['friend-list']}>
      {friends.map(({avatar, name, isOnline, id}) => {
        return (
          <li className={cssFriendlist['item']} key={id}>
            <span className={isOnline ? cssFriendlist['available'] : cssFriendlist['not-available']}></span>
            <img className={cssFriendlist['avatar']} src={avatar} alt="User avatar" width="48"/>
            <p className={cssFriendlist['name']}>{name}</p>
          </li>
        )
      })}
    </ul>
  )
}

FriendList.prototype = {
  friends: PropTypes.array
}

