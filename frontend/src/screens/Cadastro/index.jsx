/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles.cadastro";
import { api } from "../../service/api";

export const Cadastro = ({ onCadastroSuccess }) => {
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

       console.log("Cliente cadastrado com sucesso!");

       // Chame a função de sucesso do cadastro passada como propriedade
       if (onCadastroSuccess) {
         onCadastroSuccess();
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
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <Input
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Coordenada X"
          name="x"
          value={formData.x}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Coordenada Y"
          name="y"
          value={formData.y}
          onChange={handleInputChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};
