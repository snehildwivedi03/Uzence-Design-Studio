import { useState } from "react";
import InputField from "../components/InputField/InputField";

export default function InputDemo() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        InputField Demo
      </h1>

      {/* Default Input */}
      <InputField
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="This is a helper text"
      />

      {/* Error state */}
      <InputField
        label="Email"
        placeholder="Enter your email"
        invalid
        errorMessage="Invalid email address"
      />

      {/* Disabled */}
      <InputField label="Disabled" placeholder="Can't type here" disabled />

      {/* Loading */}
      <InputField label="Loading Input" placeholder="Please wait..." loading />

      {/* Variants */}
      <div className="space-y-4">
        <InputField
          label="Filled Variant"
          placeholder="Filled input"
          variant="filled"
        />
        <InputField
          label="Outlined Variant"
          placeholder="Outlined input"
          variant="outlined"
        />
        <InputField
          label="Ghost Variant"
          placeholder="Ghost input"
          variant="ghost"
        />
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <InputField label="Small" placeholder="Small size" size="sm" />
        <InputField label="Medium" placeholder="Medium size" size="md" />
        <InputField label="Large" placeholder="Large size" size="lg" />
      </div>

      {/* Clear button */}
      <InputField
        label="Search"
        placeholder="Clearable input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        clearable
      />

      {/* Password toggle */}
      <InputField
        label="Password"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
