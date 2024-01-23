import {  ContainerMaster, Content, TitleStyle } from "./styles.cardroute";
import { useClient } from "../../hooks/ClientContext";

export const CardRoute = () => {

    const { rotaData } = useClient()


  return (
    <ContainerMaster>
  

      <div>
        {rotaData &&
          rotaData.map((client) => (
            <Content key={client.id}>
              <span>
                <TitleStyle title="Cliente" subtitle={client.nome} />
        

     
                <TitleStyle title="Coordendada X:" subtitle={client.x} />
                <TitleStyle title="Coordenada Y:" subtitle={client.y} />
              </span>
            </Content>
          ))}
      </div>
    </ContainerMaster>
  );
};
