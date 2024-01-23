import {
  ButtonCancel,
  CardModal,
  ContainerButton,
  ContainerLeft,
  ContainerRight,
  ContentChart,
  ContentRote,
  Header,
  Main,
} from "./styles.home";
import { Logo } from "../../components/Logo";
import { ListClients } from "../../components/ListClients";
import { Cadastro } from "../Cadastro";
import {  useState } from "react";
import { CartesianPlane } from "../../components/Chart";
import { Modal } from "../../components/Modal";
import { Button } from "../../components/Button";
import { X } from "@phosphor-icons/react";
import { CardRoute } from "../../components/CardRotes";
import { useClient } from "../../hooks/ClientContext";

function App() {

 
  const [isModalOpen, setIsModalOpen] = useState(false);


  const { limparLocalStorage, rotaData, rotaCalculada, calcularRota } =
    useClient();

  // console.log(rotaCalculada);




  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  


  return (
    <>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ButtonCancel onClick={closeModal}>
            <X size={22} />
          </ButtonCancel>

          <h2>Rotas Calculadas de acordo com a distânicia mínima</h2>
          {rotaCalculada &&
            rotaCalculada.map((result, index) => (
              <CardModal key={result.id}>
                <p className="text">{index}° Rota </p>
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
          <Cadastro         onCadastroSuccess />
        </ContainerLeft>
        <ContainerRight>
          <ListClients />
        </ContainerRight>
      </Main>
      <Main>
        <ContentChart>
          <h1>Gráfico da localização dos Clientes</h1>
          <CartesianPlane />
        </ContentChart>

        <ContentRote>
          <h1>Rotas selecionadas</h1>
          <CardRoute>
            {rotaData &&
              rotaData.map((item) => (
                <span key={item.id}>
                  <p className="title">Rota: {item} -</p>
                  <p className="title">Cliente:</p>
                  <p className="text">{item.nome}</p>
                  <p className="title">Coordenada X:</p>
                  <p className="text">{item.x}</p>
                  <p className="title">Coordenada Y:</p>
                  <p className="text">{item.y}</p>
                </span>
              ))}
            <ListClients />
          </CardRoute>
          <ContainerButton>
            <Button
              className="btn-calculator"
              onClick={() => calcularRota() && openModal()}
            >
              Calucular Rota
            </Button>
            <Button className="btn-clean" onClick={() => limparLocalStorage()}>
              Limpar rotas
            </Button>
          </ContainerButton>
        </ContentRote>
      </Main>
    </>
  );
}

export default App;
