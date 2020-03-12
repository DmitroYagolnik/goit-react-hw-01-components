import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Stats = ({ title, stats }) => (
  <section className={style.statsSection}>
    {title && <h2 className={style.title}>{title}</h2>}
    <ul className={style.statList}>
      {stats.map(item => (
        <li key={item.id} className={style.item}>
          <span className={style.label}>{item.label}</span>
          <span className={style.percentage}>{item.percentage} %</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
