import { Link, useLocation } from 'react-router-dom';

export const LinkWithPrevPageState = ({ children, ...restProps }) => {
  const { pathname, search } = useLocation();
  const fromPage = `${pathname}${search}`;
  return (
    <Link {...restProps} state={{ from: fromPage }}>
      {children}
    </Link>
  );
};
