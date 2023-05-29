import PropTypes from 'prop-types';
import cssProfile from './Profile.module.css';

import React from 'react';

export const Profile = ({username, tag, location, avatar, stats}) => {

  const {followers, views, likes} = stats;

  return (
    <div className={cssProfile['profile']}>
      <div className={cssProfile['description']}>
        <img className={cssProfile['avatar']} src={avatar} alt="User Avatar" />
        <p className={cssProfile['name']}>{username}</p>
        <p className={cssProfile['tag']}>@{tag}</p>
        <p className={cssProfile['location']}>{location}</p>
      </div>

      <ul className={cssProfile['stats']}>
        <li>
          <span className={cssProfile['label']}>Followers</span>
          <span className={cssProfile['quantity']}>{followers}</span>
        </li>
        <li>
          <span className={cssProfile['label']}>Views</span>
          <span className={cssProfile['quantity']}>{views/1000}</span>
        </li>
        <li>
          <span className={cssProfile['label']}>Likes</span>
          <span className={cssProfile['quantity']}>{likes}</span>
        </li>
      </ul>

    </div>
  )
}

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}
