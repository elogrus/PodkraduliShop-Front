import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const elements = [
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
    <div style={{ width: 100, height: 50, backgroundColor: 'pink' }}></div>,
]

const meta = {
    title: 'shared/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        elements: elements
    },
    decorators: [
        (Story) => <div style={{ width: 500, height: 300 }}><Story /></div>
    ]
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        elements: elements
    },
};

export const Vertical: Story = {
    args: {
        elements: elements,
        vertical: true
    },
};