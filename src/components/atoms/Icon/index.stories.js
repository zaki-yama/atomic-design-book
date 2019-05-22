import React from "react";
import { TrashCanIcon } from "./index";
import { action } from "@storybook/addon-actions";

export default stories =>
  stories
    .add("TrashCanIcon", () => <TrashCanIcon />)
    .add("クリッカブル", () => (
      <TrashCanIcon onClick={action("アイコンがクリックされました")} />
    ));
