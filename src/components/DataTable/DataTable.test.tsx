import { render, screen, fireEvent } from "@testing-library/react";
import DataTable, { type Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: false },
];

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

describe("DataTable", () => {
  it("renders rows", () => {
    render(<DataTable<User> data={data} columns={columns} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(<DataTable<User> data={[]} columns={columns} loading />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("calls onRowSelect when row is clicked", () => {
    const handleSelect = vi.fn();
    render(
      <DataTable<User>
        data={data}
        columns={columns}
        selectable
        onRowSelect={handleSelect}
      />
    );
    fireEvent.click(screen.getByText("Alice"));
    expect(handleSelect).toHaveBeenCalledWith(
      expect.arrayContaining([
        { id: 1, name: "Alice", email: "alice@mail.com" },
      ])
    );
  });
});
