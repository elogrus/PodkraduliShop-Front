import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta = {
    title: 'widgets/Footer',
    component: Footer,
    parameters: {
        layout: 'centered',
    },
    args: {},
    decorators: [
        (Story) => <div style={{ width: '800px', height: '200px' }}><Story /></div>
    ]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};