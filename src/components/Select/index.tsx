import React, { ChangeEvent } from "react";
import "./styles.css";

export interface DadosBasicos {
  sigla: string;
  descricao: string;
}

export interface PropsSelect {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  list: DadosBasicos[];
  required?: boolean;
}

export const Select: React.FunctionComponent<PropsSelect> = ({
  id,
  label,
  value,
  onChange,
  list,
  required,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange} required={required}>
        <option value=""></option>
        {list?.map(({ sigla, descricao }) => (
          <option key={sigla} value={sigla}>
            {descricao}
          </option>
        ))}
      </select>
    </div>
  );
};
