import React from "react";
import Heading from "./index";

export default stories =>
  stories
    .add("デフォルト", () => <Heading>見出し</Heading>)
    .add("レベル1", () => <Heading level={1}>見出しレベル1</Heading>)
    .add("レベル1, 見た目2", () => (
      <Heading level={1} visualLevel={2}>
        見出しレベル1, 見た目2
      </Heading>
    ));
