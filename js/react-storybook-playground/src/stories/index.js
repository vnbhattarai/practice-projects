/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
// Material components

import Input from './material/Input';
import Signin from './material/Signin';
import MaterialButton from './material/Button';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Material-UI Component', module)
  .add('RaisedButton', () => <MaterialButton />)
  .add('Simple Input', () => <Input />)
  .add('Signin', () => <Signin />);