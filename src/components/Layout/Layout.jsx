import css from './Layout.module.css';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.nav_active : undefined
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.nav_active : undefined
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
