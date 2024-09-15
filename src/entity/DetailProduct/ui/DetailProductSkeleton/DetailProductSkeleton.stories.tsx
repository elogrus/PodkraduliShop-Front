import type { Meta, StoryObj } from '@storybook/react';
import { DetailProductSkeleton } from './DetailProductSkeleton';
import { Currency } from 'shared/types/Currency';

const meta = {
    title: 'entity/DetailProduct/DetailProductSkeleton',
    component: DetailProductSkeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => <div style={{ width: '800px' }}><Story /></div>
    ]
} satisfies Meta<typeof DetailProductSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
    },
};