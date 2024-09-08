import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextPreset, TextMods } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Some text',
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        preset: TextPreset.REGULAR,
        children: 'Some text',
    },
};

export const Small: Story = {
    args: {
        preset: TextPreset.SMALL,
        children: 'Some text',
    },
};

export const Subtitle: Story = {
    args: {
        preset: TextPreset.SUBTITLE,
        children: 'Some text',
    },
};

export const Title: Story = {
    args: {
        preset: TextPreset.TITLE,
        children: 'Some text',
    },
};

export const Underscore: Story = {
    args: {
        mods: [TextMods.UNDERSCORE],
        children: 'Some text',
    },
};

export const Bold: Story = {
    args: {
        mods: [TextMods.BOLD],
        children: 'Some text',
    },
};