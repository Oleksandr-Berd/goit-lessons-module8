import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './HeaderLink.module.css';

export const HeaderLink = ({ children, href, positionNumber }) => {
  const value = `0${positionNumber}`;

  return (
    <NavLink className={styles.link} to={href}>
      <span className={styles.number}>{value}</span>
      {children}
    </NavLink>
  );
};

HeaderLink.propTypes = {
  positionNumber: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
};
