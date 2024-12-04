import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { listCursos, listEstados } from "../../data";
import { DadosBasicos, Select } from "../../components/Select";
import { Input } from "../../components/Input";
import { FormCadastroIngressante } from "./types";
import { Button } from "../../components/Button";
import "./styles.css";

const formDefaultvalues: FormCadastroIngressante = {
  nome: "",
  curso: "",
  estado: "",
  cidade: "",
};

export const PageCadastroIngressante = () => {
  const [formData, setFormData] =
    useState<FormCadastroIngressante>(formDefaultvalues);

  const listCidades: DadosBasicos[] = useMemo(() => {
    setFormData({ ...formData, cidade: "" });
    if (formData?.estado) {
      return (
        listEstados?.find(({ sigla }) => sigla === formData?.estado)?.cidades ||
        []
      );
    }
    return [];
  }, [listEstados, formData?.estado]);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const attribute = e?.target?.id;
    const value = e?.target?.value;
    setFormData({ ...formData, [attribute]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    alert(
      `Ingressante ${formData?.nome?.toLocaleUpperCase()} cadastrado(a) com sucesso!`
    );
    setFormData(formDefaultvalues);
  };

  return (
    <form id="form-cadastro-ingressante" onSubmit={handleSubmit}>
      <h2 className="blue-shapes">Cadastro de Ingressantes</h2>
      <main>
        <Input
          id="nome"
          label="Nome"
          value={formData?.nome}
          onChange={handleChange}
          required
        />

        <Select
          id="curso"
          label="Curso"
          value={formData?.curso}
          onChange={handleChange}
          list={listCursos}
          required
        />

        <Select
          id="estado"
          label="Estado"
          value={formData?.estado}
          onChange={handleChange}
          list={listEstados}
          required
        />

        <Select
          id="cidade"
          label="Cidades"
          value={formData?.cidade}
          onChange={handleChange}
          list={listCidades}
          required
        />

        <div id="button-group-container">
          <Button color="yellow">Voltar</Button>
          <Button type="submit">Gravar</Button>
        </div>
      </main>
    </form>
  );
};
