import React from 'react';
import {Link} from 'react-router-dom';
import {footer} from '../styles/footer.scss';
import Routes from '../routes';

const App = () =>
  <div>
    <h1>components/App.js</h1>
    {Routes}
    <footer className={footer}>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
    </footer>
  </div>;

export default App;
