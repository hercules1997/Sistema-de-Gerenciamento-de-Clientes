import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { ContainerMaster, Content } from "./styles.listeclients";
import { Title } from "../Title";

export const ListClients = () => {
  const [clientes, setClientes] = useState([]);


  useEffect(() => {
    const carregarListaClientes = async () => {
      try {
        const { data } = await api.get("/clientes");
        setClientes(data);
      } catch (error) {
        console.error("Erro ao listar clientes", error);
      }
    };
    carregarListaClientes();
  }, []);

  return (
    <>
      <ContainerMaster>
     
        <h2>Clientes</h2>

        <div>
          {clientes &&
            clientes.map((client) => (
              <Content key={client.id}>
                <span>
                  <Title title="Cliente" subtitle={client.id} />
                  <Title title="Nome:" subtitle={client.nome} />
                  <Title title="E-mail:" subtitle={client.email} />
                  <Title title="Tel:" subtitle={client.telefone} />
                  <Title title="Coordendada X:" subtitle={client.x} />
                  <Title title="Coordenada Y:" subtitle={client.y} />
                </span>
              </Content>
            ))}
        </div>
      </ContainerMaster>
   
    </>
  );
};
