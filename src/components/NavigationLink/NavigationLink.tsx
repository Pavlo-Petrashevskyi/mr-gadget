/* eslint-disable import/no-extraneous-dependencies */
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  name?: string;
  extraClass?: string;
  children?: React.ReactNode;
};

export const NavigationLink: React.FC<NavLinkProps> = ({
  to,
  name,
  extraClass,
  children,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('nav__link', `${extraClass}`, {
          'nav__link--active': isActive,
        })
      }
    >
      {name}
      {children}
    </NavLink>
  );
};
