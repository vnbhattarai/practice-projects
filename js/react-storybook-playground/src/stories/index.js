/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import Welcome from "./Welcome";
// Material components

import Input from "./material/Input";
import Signin from "./material/Signin";
import MaterialButton from "./material/Button";
import Test from "./Test";
import Search from "./movie-app/Search";
import Loading from "./movie-app/Loading";
import Result from "./movie-app/Result";

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
);

storiesOf("Test", module)
  .add("with text", () =>
    <Button onClick={action("clicked")}>Hello Button</Button>
  )
  .add("with some emoji", () =>
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  )
  .add("Loading Test", () => <Test />);

storiesOf("Material-UI Component", module)
  .add("RaisedButton", () => <MaterialButton />)
  .add("Simple Input", () => <Input />)
  .add("Signin", () => <Signin />);

storiesOf("Movie App components", module)
  .add("Search or Home page", () => <Search onCLick={action("Noice...")} />)
  .add("Loading Page", () => <Loading />)
  .add("Results page", () => <Result />);
