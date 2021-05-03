const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
}
