import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [
    // Wrap Navbar in a router so NavLink works inside Storybook
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div style={{ minHeight: "100vh", background: "var(--bg-color)" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Navbar>;

// Default light theme
export const Light: Story = {
  args: {},
};

// Start in dark theme (by forcing the html class)
export const Dark: Story = {
  render: () => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
    return (
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );
  },
};
