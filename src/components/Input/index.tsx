import React, { ChangeEvent } from "react";
import "./styles.css";

export interface PropsInput {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const Input: React.FunctionComponent<PropsInput> = ({
  id,
  label,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
