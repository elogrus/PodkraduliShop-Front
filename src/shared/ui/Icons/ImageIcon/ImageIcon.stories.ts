import type { Meta, StoryObj } from '@storybook/react';
import { ImageIcon } from './ImageIcon';

const meta = {
    title: 'shared/Icons/ImageIcon',
    component: ImageIcon,
    parameters: {
        // layout: 'centered',
        
    },
    args: {},
} satisfies Meta<typeof ImageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};