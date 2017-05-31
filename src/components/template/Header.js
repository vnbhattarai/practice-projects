import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const NavButtons = ['Home', 'Contact', 'Login', 'Signup'].map(name => (
  <FlatButton
    containerElement={<Link to={`${name}`} />}
    label={`${name}`}
    style={{
      backgroundColor: 'transparent',
      color: 'white',
    }}
  />
));

const Header = () => (
  <AppBar
    title="Park App"
    iconElementRight={<div>{NavButtons}</div>}
    style={{ width: 'auto', margin: -8 }}
  />
);

export default Header;
