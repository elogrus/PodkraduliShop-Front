import type { Meta, StoryObj } from '@storybook/react';
import { ProductsList } from './ProductsList';
import { Currency } from 'shared/types/Currency';
import { ProductType } from 'entity/Product/types/Product';
const products: ProductType[] = [
    {
        "id": 1234,
        "discount": 20,
        "productUrl": "https://google.com",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICXBSH55JYDFqpHAkZWdSp-Y9Ycwx8aq0w&s",
        "title": "Подкрадули",
        "description": "Нереально мощные",
        "price": 1000,
        "currency": Currency.USD
    },
    {
        "id": 2234,
        "discount": 20,
        "productUrl": "https://google.com",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICXBSH55JYDFqpHAkZWdSp-Y9Ycwx8aq0w&s",
        "title": "Подкрадули",
        "description": "Нереально мощные",
        "price": 1000,
        "currency": Currency.RUB
    },
    {
        "id": 3234,
        "discount": 20,
        "productUrl": "https://google.com",
        "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBICXBSH55JYDFqpHAkZWdSp-Y9Ycwx8aq0w&s",
        "title": "Подкрадули",
        "description": "Нереально мощные",
        "price": 1000,
        "currency": Currency.USD
    }
]

const getProductsCallback = async () => {
    return Promise.resolve({
        error: false, data: products
    })
}

const meta = {
    title: 'shared/ProductsList',
    component: ProductsList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        getProducts: getProductsCallback,
    },
} satisfies Meta<typeof ProductsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnLoading: Story = {
    args: {
        title: 'Some title',
        // @ts-ignore
        getProducts: () => Promise.reject(),
    },
};

export const WithoutTitle: Story = {
    args: {
        getProducts: getProductsCallback,
    },
};

export const WithTitle: Story = {
    args: {
        title: 'Some title',
        getProducts: getProductsCallback,
    },
};

export const OnError: Story = {
    args: {
        title: 'Some title',
        // @ts-ignore
        getProducts: async () => {
            return Promise.resolve({ error: true, errorMessage: 'Some error' })
        },
    },
};