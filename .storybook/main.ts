import * as Path from "path"
import { UserConfig } from "vite"
import * as StorybookCoreCommon from "@storybook/core-common"

type StorybookConfig = Omit<StorybookCoreCommon.StorybookConfig, "core"> & {
  core: {
    builder: "storybook-builder-vite"
  }
} & {
  viteFinal: (
    config: UserConfig,
    options: StorybookCoreCommon.Options
  ) => UserConfig
}

module.exports = <StorybookConfig>{
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },

  viteFinal: (config, options) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias = {
        "~": Path.resolve(__dirname, "../src"),
      }
    }
    return config
  },
}
