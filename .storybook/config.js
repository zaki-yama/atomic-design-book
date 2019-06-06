import { configure, addDecorator } from "@storybook/react";

import { storiesOf } from "@storybook/react";

const req = require.context("../src/components", true, /\.stories\.(js|tsx)$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
