import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
    title: 'shared/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Some text',
        to: 'To some path'
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInside: Story = {
    args: {
        children: 'Some text',
        to: 'To some path'
    },
};

export const ComponentInside: Story = {
    args: {
        children: <div style={{ width: '100px', height: '100px', backgroundColor: 'black', color: 'white' }}>hehe</div>,
        to: 'To some path'
    },
};