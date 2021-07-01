import { Meta } from '@storybook/react/types-6-0'
import Hello from './Hello'

export default {
  title: 'Components/Hello',
  component: Hello
} as Meta

export const Happy = () => <Hello mood="happy" />
export const Sad = () => <Hello mood="sad" />
