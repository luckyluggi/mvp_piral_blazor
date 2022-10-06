import * as React from 'react';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps } from 'piral';
import { Link } from 'react-router-dom';
import { ExtensionSlot } from "piral";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="nav-item">{children}</li>;

const defaultTiles = (
  <>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://piral.io/">Piral</a>
        <br />
        for next generation portals
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <br />
        for writing scalable web apps
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://reactjs.org/">React</a>
        <br />
        for building components
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="http://getbootstrap.com/">Bootstrap</a>
        <br />
        for layout and styling
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://sass-lang.com">Sass</a>
        <br />
        for crafting custom styles
      </div>
    </div>
  </>
);

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/">
        Home
      </Link>
    </MenuItem>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/blog">
        Blog
      </Link>
    </MenuItem>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/shop">
        Shop
      </Link>
    </MenuItem>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: props => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to your new microfrontend app shell, built with:</p>
      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>,
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      <div className="container">{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container topbar-container">
            <div>
              <ExtensionSlot name="Topbar.Left" />
            </div>
            <div>
              <ExtensionSlot name="Topbar.Right" />
              <div
                className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${collapsed ? '' : 'show'}`}
                aria-expanded={!collapsed}>
                <ul className="navbar-nav flex-grow">
                  {children}
                  {defaultMenuItems}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};
