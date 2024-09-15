import type { Meta, StoryObj } from '@storybook/react';
import { Price } from './Price';
import { Currency } from 'shared/types/Currency';

const meta = {
    title: 'shared/Price',
    component: Price,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        price: 1000,
        currency: Currency.RUB
    },
} satisfies Meta<typeof Price>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutDiscount: Story = {
    args: {
        price: 1000,
        currency: Currency.RUB
    },
};

export const WithDiscount: Story = {
    args: {
        price: 1000,
        currency: Currency.RUB,
        discount: 20,
    },
};