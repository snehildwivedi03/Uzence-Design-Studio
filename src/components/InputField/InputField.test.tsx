import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("InputField", () => {
  it("renders label and placeholder", () => {
    render(<InputField label="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("shows error message when invalid", () => {
    render(
      <InputField
        label="Email"
        placeholder="Enter email"
        errorMessage="Invalid email"
        invalid
      />
    );
    expect(screen.getByText("Invalid email")).toBeInTheDocument();
  });

  it("triggers onChange", () => {
    const handleChange = vi.fn();
    render(
      <InputField
        label="Name"
        placeholder="Enter name"
        onChange={handleChange}
      />
    );
    fireEvent.change(screen.getByPlaceholderText("Enter name"), {
      target: { value: "John" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
