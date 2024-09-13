import type { Meta, StoryObj } from '@storybook/react';
import { TextPreset, TextMods, TextColor } from '../types/Text';
import { Text } from './Text';

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

export const Cross: Story = {
    args: {
        mods: [TextMods.CROSS],
        children: 'Some text',
    },
};

export const Color0: Story = {
    args: {
        color: TextColor.CL0,
        children: 'Some text',
    },
};

export const Color1: Story = {
    args: {
        color: TextColor.CL1,
        children: 'Some text',
    },
};

export const Color2: Story = {
    args: {
        color: TextColor.CL2,
        children: 'Some text',
    },
};

export const Color3: Story = {
    args: {
        color: TextColor.CL3,
        children: 'Some text',
    },
};

export const Color4: Story = {
    args: {
        color: TextColor.CL4,
        children: 'Some text',
    },
};

export const Color5: Story = {
    args: {
        color: TextColor.CL5,
        children: 'Some text',
    },
};

export const Color6: Story = {
    args: {
        color: TextColor.CL6,
        children: 'Some text',
    },
};