import { Meta, StoryFn } from "@storybook/react";
import { Section1 } from "./Section1";

export default {
    title: "Section1",
    component: Section1,
} as Meta;

export const Default: StoryFn = () => <Section1 />;
