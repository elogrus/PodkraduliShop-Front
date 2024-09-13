import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
    title: 'shared/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
    args: {},
};

export const White: Story = {
    args: {
        textColor: 'WHITE'
    },
};