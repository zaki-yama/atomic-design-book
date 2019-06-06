import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import {
  TrashCanIcon,
  ChevronRightIcon,
  SearchIcon,
  SettingsIcon
} from "./index";

storiesOf("TrachCanIcon", module)
  .add("TrashCanIcon", () => <TrashCanIcon />)
  .add("ChevronRightIcon", () => <ChevronRightIcon />)
  .add("SearchIcon", () => <SearchIcon />)
  .add("SettingsIcon", () => <SettingsIcon />)
  .add("TrashCanIcon: クリッカブル", () => (
    <TrashCanIcon onClick={action("アイコンがクリックされました")} />
  ));
