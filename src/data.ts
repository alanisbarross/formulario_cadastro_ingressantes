import { DadosBasicos } from "./components/Select";

interface Estado extends DadosBasicos {
  cidades: DadosBasicos[];
}

export const listEstados: Estado[] = [
  {
    sigla: "SP",
    descricao: "São Paulo",
    cidades: [
      { sigla: "MCZ", descricao: "Mogi das Cruzes" },
      { sigla: "SZN", descricao: "Suzano" },
      { sigla: "POA", descricao: "Poá" },
      { sigla: "GUA", descricao: "Guararema" },
    ],
  },
  {
    sigla: "RJ",
    descricao: "Rio de Janeiro",
    cidades: [
      { sigla: "AGR", descricao: "Angra do Reis" },
      { sigla: "NTR", descricao: "Niterói" },
      { sigla: "ITB", descricao: "Itaboraí" },
    ],
  },
  {
    sigla: "MG",
    descricao: "Minas Gerais",
    cidades: [
      { sigla: "BHT", descricao: "Belo Horizonte" },
      { sigla: "MTA", descricao: "Monte Azul" },
      { sigla: "MZB", descricao: "Muzambinho" },
    ],
  },
];

export const listCursos: DadosBasicos[] = [
  {
    sigla: "MTM",
    descricao: "Matemática",
  },
  {
    sigla: "LTS",
    descricao: "Letras",
  },
  {
    sigla: "GEO",
    descricao: "Geografia",
  },
];
