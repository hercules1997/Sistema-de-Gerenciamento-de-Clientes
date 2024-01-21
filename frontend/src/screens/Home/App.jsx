import {
  CardModal,
  ContainerLeft,
  ContainerRight,
  ContentChart,
  Header,
  Main,
} from "./styles.home";
import { Logo } from "../../components/Logo";
import { ListClients } from "../../components/ListClients";
import { Cadastro } from "../Cadastro";
import { api } from "../../service/api";
import {  useState } from "react";
import { CartesianPlane } from "../../components/Chart";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setClientes] = useState([]);
  const [rotaCalculada, setRotaCalculada] = useState();

  const calcularRota = async () => {
    try {
      const {
        data: { rota_Ordenada_Mais_Proxima },
      } = await api.get("/calcular-rota");
      setRotaCalculada(rota_Ordenada_Mais_Proxima);
      
      openModal();
    } catch (error) {
      console.error("Erro ao listar clientes", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const listarClientes = async () => {
    try {
      const { data } = await api.get("/clientes");
      setClientes(data);
    } catch (error) {
      console.error("Erro ao listar clientes", error);
    }
  };


  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <button style={{ color: "#FFFFFF", background: "transparent", border: "0.4px dashed gray", fontSize: "30px", padding: "5px" }} onClick={closeModal}>
            X
          </button>

          {rotaCalculada &&
            rotaCalculada.map((result, index) => (
              <CardModal key={result.id}>
                <p className="title">Rota: {index} -</p>
                <p className="title">Cliente:</p>
                <p className="text">{result.nome}</p>
                <p className="title">Coordenada X:</p>
                <p className="text">{result.x}</p>
                <p className="title">Coordenada Y:</p>
                <p className="text">{result.y}</p>
              </CardModal>
            ))}
        </Modal>
      </div>
      <Header>
        <Logo />
        <div></div>
      </Header>
      <Main>
        <ContainerLeft>
          <Cadastro onCadastroSuccess={listarClientes} />
        </ContainerLeft>
        <ContainerRight>
          <ListClients />
        </ContainerRight>
      </Main>
      <Button onClick={() => calcularRota()}>Calucular Rota</Button>
      <ContentChart>
        <h1>Gráfico da localização dos Clientes</h1>
        <CartesianPlane />
      </ContentChart>
    </>
  );
}

export default App;
