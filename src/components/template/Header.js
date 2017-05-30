import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
};

const RightButtons = (
  <div>
    <FlatButton
      containerElement={<Link to="/" />}
      label={'Home'}
      style={buttonStyle}
    />
    <FlatButton
      containerElement={<Link to="/contact" />}
      label={'Contact'}
      style={buttonStyle}
    />
    <FlatButton
      containerElement={<Link to="/login" />}
      label={'Log In'}
      style={buttonStyle}
    />
    <FlatButton
      containerElement={<Link to="/signup" />}
      label={'Sign Up'}
      style={buttonStyle}
    />
  </div>
);

const Header = () => (
  <AppBar title="Material Playground" iconElementRight={RightButtons} />
);

export default Header;
