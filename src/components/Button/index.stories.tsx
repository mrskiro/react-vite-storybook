import * as React from "react";
import * as Storybook from "@storybook/react";
import { Button } from "./";

export default {
  title: "components/Button",
  component: Button,
} as Storybook.ComponentMeta<typeof Button>;

export const Primary: Storybook.ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Storyのボタン</Button>
);
Primary.args = {
  variant: "primary",
};

export const Secondary: Storybook.ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Story2のボタン</Button>
);
Secondary.args = {
  variant: "secondary",
};
