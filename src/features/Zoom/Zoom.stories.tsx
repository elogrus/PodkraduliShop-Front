import type { Meta, StoryObj } from '@storybook/react';
import { Zoom } from './Zoom';

const meta = {
    title: 'shared/Zoom',
    component: Zoom,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Zoom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ZoomX2: Story = {
    args: {
        zoomMultiply: 2,
        children: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB5Eyw4sOrFqcD10-h-FTBwP1MD_Q7nK0GA&s' style={{ width: 500, height: 500 }}></img>
    },
};

export const ZoomX4: Story = {
    args: {
        zoomMultiply: 4,
        children: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB5Eyw4sOrFqcD10-h-FTBwP1MD_Q7nK0GA&s' style={{ width: 500, height: 500 }}></img>
    },
};
