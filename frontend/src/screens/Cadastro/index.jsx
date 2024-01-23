/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles.cadastro";
import { api } from "../../service/api";
import { useClient } from "../../hooks/ClientContext";

export const Cadastro = ({ onCadastroSuccess }) => {
  const { putClientData } = useClient();
  // Utilize o estado local para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    x: "",
    y: "",
  });

  // Manipulador de mudanças de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/clientes", formData);

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        x: "",
        y: "",
      });
window.location.reload();
      console.log("Cliente cadastrado com sucesso!");

      // Chame a função de sucesso do cadastro passada como propriedade
      if (onCadastroSuccess) {
        onCadastroSuccess();
        putClientData();
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Alguma informação está sendo passada errada ou não está sendo passada",
        error
      );
    }
  };

  return (
    <Container>
      <h2>Registre um novo cliente</h2>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Nome"
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <Input
          placeholder="E-mail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Telefone"
          name="telefone"
          type="number"
          value={formData.telefone}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Coordenada X"
          name="x"
          type="number"
          value={formData.x}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Coordenada Y"
          name="y"
          type="number"
          value={formData.y}
          onChange={handleInputChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};
