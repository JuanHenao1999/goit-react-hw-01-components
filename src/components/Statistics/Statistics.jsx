import PropTypes from 'prop-types';
import cssStatistics from './Statistics.module.css';

import React from 'react';

export const Statistics = ({title, stats = []}) => {
  return (
    <section className={cssStatistics['statistics']}>
      {title && <h2 className={cssStatistics['title']}>{title.toUpperCase()}</h2>}

      <ul className={cssStatistics['list']}>
        {stats.map((statics)=> {
          return (
            <li className={cssStatistics['item']} key={statics.id}>
              <span className={cssStatistics['label']}>{statics.label}</span>
              <span className={cssStatistics['percentage']}>{statics.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.string
}
