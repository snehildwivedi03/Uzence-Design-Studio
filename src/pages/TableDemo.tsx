import { useState } from "react";
import DataTable from "../components/DataTable/DataTable";
import type { Column } from "../components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const mockData: User[] = [
  { id: 1, name: "Jane Doe", email: "jane@example.com", role: "Admin" },
  { id: 2, name: "John Smith", email: "john@example.com", role: "User" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "Editor" },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
  { key: "role", title: "Role", dataIndex: "role", sortable: true },
];

export default function TableDemo() {
  const [selected, setSelected] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        DataTable Demo
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1500);
          }}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Simulate Loading
        </button>
        <button
          onClick={() => setEmpty((e) => !e)}
          className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700"
        >
          Toggle Empty
        </button>
      </div>

      <DataTable<User>
        data={empty ? [] : mockData}
        columns={columns}
        loading={loading}
        selectable
        onRowSelect={setSelected}
      />

      {selected.length > 0 && (
        <div className="mt-4 text-gray-800 dark:text-gray-200">
          Selected: {selected.map((u) => u.name).join(", ")}
        </div>
      )}
    </div>
  );
}
