import type { Meta, StoryObj } from "@storybook/react";
import { ImagesLooker } from "./ImagesLooker";

const images = [
    {
        imageURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGB5Eyw4sOrFqcD10-h-FTBwP1MD_Q7nK0GA&s",
        miniURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1cDnT1Q5ZrkfLfxiSgFvC2ZsjpngynJGvg&s",
    },
    {
        imageURL:
            "https://static.vecteezy.com/system/resources/thumbnails/022/963/918/small_2x/ai-generative-cute-cat-isolated-on-solid-background-photo.jpg",
    },
    {
        imageURL:
            "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    },
];

const loadingImages = [
    {
        imageURL: "http://localhost:3001/delay",
        miniURL: "http://localhost:3001/delay",
    },
    {
        imageURL:
            "https://static.vecteezy.com/system/resources/thumbnails/022/963/918/small_2x/ai-generative-cute-cat-isolated-on-solid-background-photo.jpg",
    },
    {
        imageURL:
            "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    },
];

const meta = {
    title: "widgets/ImagesLooker",
    component: ImagesLooker,
    parameters: {
        layout: "centered",
    },
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: "800px", height: "800px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ImagesLooker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
    args: {
        imagesURL: images,
    },
};

export const OnLoading: Story = {
    args: {
        imagesURL: loadingImages,
    },
};
