import React, { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = "",
  id,
  ...props
}) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className="flex flex-col w-full text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="text-caption-sm text-secondary font-semibold mb-xs"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`
          w-full
          bg-container-primary
          text-primary
          placeholder:text-disabled
          rounded-sm
          p-sm
          text-body-md
          border
          ${error ? "border-error" : "border-disabled"}
          focus:outline-none
          focus:ring-2
          focus:ring-brand-primary
          focus:border-transparent
          transition-all
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-caption-sm text-error mt-xs">
          {error}
        </span>
      )}
    </div>
  );
};
