import { CustomButton } from '../components'
import { StarIcon } from '@heroicons/vue/24/solid'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Atoms/Button',
  component: CustomButton,
  tags: ['docsPage'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    onClick: {},
    size: {
      control: {
        type: 'select',
      },
      options: ['base', 'lg', 'sm'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['solid', 'ghost'],
    },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const UsingSlots = {
  render: args => ({
    components: { CustomButton },
    setup() {
      return { args }
    },
    template: `<CustomButton v-bind="args">Using Slots</CustomButton>`,
  }),
  args: {},
}

export const Disabled = {
  args: {
    disabled: true,
    text: 'Button',
  },
}

export const WithLeadingIcon = {
  render: args => ({
    components: { CustomButton, StarIcon },
    setup() {
      return { args }
    },
    template: `<CustomButton v-bind="args">
    <template #leadingIcon>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
        <path fill="currentColor" d="M13.87 4.89L13.56 2.44C13.53 2.19 13.32 2 13.06 2H9.94998C9.69998 2 9.47998 2.19 9.44998 2.44L9.17998 4.59C9.15998 4.77 9.02998 4.93 8.85998 4.99C8.01998 5.3 7.21998 5.78 6.52998 6.4L4.24998 5.44C4.01998 5.34 3.74998 5.43 3.61998 5.65L2.05998 8.35C1.93998 8.57 1.99998 8.85 2.19998 9L4.16998 10.49C3.95998 11.5 3.95998 12.53 4.15998 13.51H4.16998L2.19998 15C1.99998 15.15 1.93998 15.43 2.06998 15.65L3.62998 18.35C3.75998 18.57 4.02998 18.66 4.25998 18.56L6.53998 17.6L6.52998 17.61C6.89998 17.94 7.31998 18.24 7.76998 18.5C8.21998 18.76 8.67998 18.97 9.15998 19.13V19.11L9.46998 21.56C9.47998 21.81 9.69998 22 9.94998 22H13.07C13.32 22 13.53 21.81 13.57 21.56L13.84 19.41C13.86 19.23 13.99 19.07 14.16 19.01C15 18.7 15.8 18.22 16.49 17.6L18.77 18.56C19 18.66 19.27 18.57 19.4 18.35L20.96 15.65C21.09 15.43 21.03 15.15 20.83 15L18.86 13.51C19.07 12.5 19.07 11.47 18.87 10.49H18.86L20.81 9C21.01 8.85 21.07 8.57 20.94 8.35L19.38 5.65C19.25 5.43 18.98 5.34 18.75 5.44L16.48 6.4L16.49 6.39C16.12 6.06 15.7 5.76 15.25 5.5C14.8 5.24 14.34 5.03 13.86 4.87" clip-rule="evenodd" fill-rule="evenodd" stroke-width="1"></path>
        <path fill="currentColor" d="M11.51 16C13.7191 16 15.51 14.2091 15.51 12C15.51 9.79086 13.7191 8 11.51 8C9.30087 8 7.51001 9.79086 7.51001 12C7.51001 14.2091 9.30087 16 11.51 16Z" stroke-width="1"></path>
        <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1" stroke="none" d="M11.51 16C13.7191 16 15.51 14.2091 15.51 12C15.51 9.79086 13.7191 8 11.51 8C9.30087 8 7.51001 9.79086 7.51001 12C7.51001 14.2091 9.30087 16 11.51 16Z"></path>
      </svg>
    </template>
      Using Slots
    </CustomButton>`,
  }),
  args: {},
}