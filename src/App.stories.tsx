import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { App } from './App'

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>

export const Default: ComponentStory<typeof App> = () => <App />
