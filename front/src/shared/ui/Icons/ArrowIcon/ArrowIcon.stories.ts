import type { Meta, StoryObj } from '@storybook/react';
import { ArrowIcon } from './ArrowIcon';

const meta = {
    title: 'shared/Icons/ArrowIcon',
    component: ArrowIcon,
    parameters: {
        // layout: 'centered',
        
    },
    args: {},
} satisfies Meta<typeof ArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};