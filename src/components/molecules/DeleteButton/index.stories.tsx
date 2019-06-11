import React from "react";
import { storiesOf } from "@storybook/react";
import DeleteButton from "./index";

storiesOf("DeleteButton", module)
  .addDecorator(story => <div style={{ margin: "50px" }}>{story()}</div>)
  .add("通常", () => <DeleteButton />);
