import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    args: {},
    decorators: [
        (Story) => <div style={{ width: '800px', height: '200px' }}><Story /></div>
    ]
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {},
};