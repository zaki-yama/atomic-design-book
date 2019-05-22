import React from "react";
import {
  TrashCanIcon,
  ChevronRightIcon,
  SearchIcon,
  SettingsIcon
} from "./index";
import { action } from "@storybook/addon-actions";

export default stories =>
  stories
    .add("TrashCanIcon", () => <TrashCanIcon />)
    .add("ChevronRightIcon", () => <ChevronRightIcon />)
    .add("SearchIcon", () => <SearchIcon />)
    .add("SettingsIcon", () => <SettingsIcon />)
    .add("TrashCanIcon: クリッカブル", () => (
      <TrashCanIcon onClick={action("アイコンがクリックされました")} />
    ));
