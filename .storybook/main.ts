const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  framework: '@storybook/react',
  stories: ['../src/**/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-mock/register',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts'),
    )

    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
    })
  },
}
