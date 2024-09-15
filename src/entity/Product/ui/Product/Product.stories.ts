import type { Meta, StoryObj } from '@storybook/react';
import { Product } from './Product';
import { Currency } from 'shared/types/Currency';

const meta = {
    title: 'shared/Product',
    component: Product,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        product: { id: '1234', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICXBSH55JYDFqpHAkZWdSp-Y9Ycwx8aq0w&s', title: 'Подкрадули', description: 'Нереально мощные', price: 1000, currency: Currency.RUB }
    },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutDiscount: Story = {
    args: {
        product: { id: 'cat1', imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICXBSH55JYDFqpHAkZWdSp-Y9Ycwx8aq0w&s', title: 'Подкрадули', description: 'Нереально мощные', price: 1000, currency: Currency.RUB }
    },
};

export const WithDiscount: Story = {
    args: {
        product: { id: 'cat1', discount: 20, imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICXBSH55JYDFqpHAkZWdSp-Y9Ycwx8aq0w&s', title: 'Подкрадули', description: 'Нереально мощные', price: 1000, currency: Currency.RUB }
    },
};