import React from "react";
import { storiesOf } from "@storybook/react";
import Heading, { HeadingUnderlined } from "./index";

storiesOf("Heading", module)
  .add("デフォルト", () => <Heading>見出し</Heading>)
  .add("レベル1", () => <Heading level={1}>見出しレベル1</Heading>)
  .add("レベル1, 見た目2", () => (
    <Heading level={1} visualLevel={2}>
      見出しレベル1, 見た目2
    </Heading>
  ))
  .add("下線付き", () => <HeadingUnderlined>下線付き</HeadingUnderlined>)
  .add("下線付き、レベル1", () => (
    <HeadingUnderlined level={1}>見出しレベル1</HeadingUnderlined>
  ))
  .add("下線付き、レベル1、見た目2", () => (
    <HeadingUnderlined level={1} visualLevel={2}>
      下線付き、見出しレベル1、見た目2
    </HeadingUnderlined>
  ));
