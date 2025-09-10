import { useState } from "react";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

export default function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Generate a unique id if label is present
  const inputId = label
    ? `${label.replace(/\s+/g, "-").toLowerCase()}-input`
    : undefined;

  const baseSize =
    size === "sm"
      ? "px-2 py-1 text-sm"
      : size === "lg"
      ? "px-4 py-3 text-lg"
      : "px-3 py-2";

  const baseVariant =
    variant === "filled"
      ? "bg-gray-100 dark:bg-gray-800 border border-transparent focus:ring-2 focus:ring-blue-500"
      : variant === "ghost"
      ? "bg-transparent border-none focus:ring-2 focus:ring-blue-500"
      : "border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500";

  const stateStyles = invalid
    ? "border-red-500 focus:ring-red-500"
    : disabled
    ? "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
    : "";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type === "password" && !showPassword ? "password" : "text"}
          disabled={disabled}
          aria-invalid={invalid}
          aria-busy={loading}
          className={`w-full rounded-md outline-none transition-colors duration-200 ${baseSize} ${baseVariant} ${stateStyles} dark:text-white`}
        />

        {/* Clear button */}
        {clearable && value && !disabled && (
          <button
            type="button"
            aria-label="Clear input"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            onClick={(e) => {
              if (onChange) {
                const event = {
                  ...e,
                  target: { value: "" },
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                onChange(event);
              }
            }}
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Loading spinner */}
        {loading && (
          <Loader2 className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-gray-400" />
        )}
      </div>

      {/* Helper / Error */}
      {errorMessage ? (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
