import React from "react";
import { storiesOf } from "@storybook/react";
import Time from "./index";

storiesOf("Time", module)
  .add("デフォルト", () => <Time>150703200000</Time>)
  .add("HH:mm", () => <Time format="HH:mm">150703200000</Time>)
  .add("無効な時間表現", () => <Time>無効な時間表現</Time>);
