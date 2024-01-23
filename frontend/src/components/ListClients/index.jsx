// import { useEffect, useState } from "react";
// import { api } from "../../service/api";
import {
  ButtonAdd,
  ContainerMaster,
  Content,
  TitleStyle,
} from "./styles.listeclients";
import { Plus } from "@phosphor-icons/react";
import { useClient } from "../../hooks/ClientContext";

export const ListClients = () => {

  const { clientData, putRotaData } = useClient()
  // useEffect(() => {
  //   const carregarListaClientes = async () => {
  //     try {
  //       const { data } = await api.get("/clientes");
  //       setClientes(data);
  //     } catch (error) {
  //       console.error("Erro ao listar clientes", error);
  //     }
  //   };
  //   carregarListaClientes();
  // }, []);

  const adicionarListaRotaCalcular = async (id) => {
    try {
      putRotaData(id)
   
    } catch (error) {
      console.error("Erro ao adicionar", error);
    }
  };

  return (
    <>
      <ContainerMaster>
        <h2>Clientes</h2>

        <div>
          {clientData &&
            clientData.map((client) => (
              <Content key={client.id}>
                <span>
                  <ButtonAdd
                    onClick={() => adicionarListaRotaCalcular(client)}
                  >
                    <Plus size={20} />
                  </ButtonAdd>
                  <TitleStyle title="Cliente" subtitle={client.id} />
                  <TitleStyle title="Nome:" subtitle={client.nome} />
                  <TitleStyle title="E-mail:" subtitle={client.email} />
                  <TitleStyle title="Tel:" subtitle={client.telefone} />
                  <TitleStyle title="Coordendada X:" subtitle={client.x} />
                  <TitleStyle title="Coordenada Y:" subtitle={client.y} />
                </span>
              </Content>
            ))}
        </div>
      </ContainerMaster>
    </>
  );
};
