import React from "react";
import { storiesOf } from "@storybook/react";
import Notification, { NotificationProps, Program } from "./index";
import { action } from "@storybook/addon-actions";

const notification: Program = {
  id: 0,
  thumbnail: "/mock/images/img01.jpg",
  title: "コンポーネント指向で UI を設計しよう！第1話",
  channelName: "UI チャンネル",
  startAt: 1507032000000,
  endAt: 1507035600000
};

storiesOf("Notification", module).add("デフォルト", () => (
  <Notification
    program={notification}
    onClickDelete={action("削除ボタンがクリックされました")}
  />
));
