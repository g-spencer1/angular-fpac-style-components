import { Meta, StoryObj } from "@storybook/angular";
import { ApplicationHeaderComponent } from "../lib/application-header/application-header.component";

const meta: Meta<ApplicationHeaderComponent> = {
    title: 'Components/Application Header',
    component: ApplicationHeaderComponent,
    tags: ["autodocs"],
    args: {
        primary: true,
        fullscreen: true,
        applicationName: "FPAC Components",
        applicationAcronym: "FPAC",
        userName: "FPAC User",
        applicationHomepage: "",
    }
}

export default meta;

type Story = StoryObj<ApplicationHeaderComponent>;

export const Primary: Story = {
    args: {
        applicationName: "FPAC Components",
        applicationAcronym: "FPAC",
        userName: "FPAC User",
        applicationHomepage: "",
    }
};

export const Secondary: Story = {
    args: {
        primary: false,
        applicationName: "FPAC Components",
        applicationAcronym: "FPAC",
        userName: "FPAC User",
        applicationHomepage: "",
    }
};