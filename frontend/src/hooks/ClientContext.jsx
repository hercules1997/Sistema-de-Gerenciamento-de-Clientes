import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { encontrarRotaMenorDistancia } from "../utils/calculator.Route";

const ClientContext = createContext({
  putClientData: () => {},
  clientData: [],
  rotaData: [],
  logout: () => {},
});

export const ClientProvider = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const [rotaData, setRotaData] = useState([]);
  const [rotaCalculada, setRotaCalculada] = useState([]);

  console.log(rotaData);
  const putClientData = async (client_Info) => {
    try {
      setClientData(client_Info);
      await localStorage.setItem(
        "facilityClean:clientes",
        JSON.stringify(client_Info)
      );
    } catch (error) {
      console.error("Erro ao carregar dados do cliente ou rotas:", error);
    }
  };

  // const updateLocalStorage = async (route) => {
  //   await localStorage.setItem("facilityClean:rotas", JSON.stringify(route));
  // };

  const putRotaData = async (route_Info) => {
    try {
      const routeIndex = rotaData.findIndex((id) => id.id === route_Info.id);

      if (routeIndex >= 0) {
        const newRoute = [...rotaData];
        newRoute[routeIndex].index += 1;
        setRotaData(newRoute);

        await localStorage.setItem(
          "facilityClean:rotas",
          JSON.stringify(newRoute)
        );
      } else {
        setRotaData([...rotaData, route_Info]);

        await localStorage.setItem(
          "facilityClean:rotas",
          JSON.stringify([...rotaData, route_Info])
        );
      }
    } catch (error) {
      console.error("Erro ao atualizar dados da rota:", error);
    }
  };
  const limparLocalStorage = async () => {
    await localStorage.removeItem("facilityClean:rotas");
    setRotaData([]);
  };

  useEffect(() => {
    const loadClientData = async () => {
      try {
     
     
        const { data } = await api.get("/clientes");
         await localStorage.setItem(
           "facilityClean:clientes",
           JSON.stringify(data)
         );
        setClientData(data);
       
      
        const storedClientData = await localStorage.getItem(
            "facilityClean:clientes"
          );
          setClientData(JSON.parse(storedClientData));

          
          
        
      } catch (error) {
        console.error("Erro ao carregar dados do cliente:", error);
      }
    };

    const loadRotaData = async () => {
      try {
        // Tenta carregar os dados da rota do localStorage
        const storedRotaData = await localStorage.getItem(
          "facilityClean:rotas"
        );
        if (storedRotaData) {
          setRotaData(JSON.parse(storedRotaData));
        }
      } catch (error) {
        console.error("Erro ao carregar dados da rota:", error);
      }
    };

    loadClientData();
    loadRotaData();
  }, []);

  const calcularRota = async () => {
    try {
      const empresa = {
        id: 0,
        nome: "Facilita Clean",
        email: "facilita@gmail.com",
        telefone: 123456789,
        x: 0,
        y: 0,
      };

      // Verifica se a empresa já está na lista de clientes
      const empresaNaRota = rotaData.some(
        (cliente) => cliente.nome === empresa.nome
      );

      // Adiciona a empresa à lista de clientes, se ainda não estiver presente
      if (!empresaNaRota) {
        setRotaData([...rotaData, empresa]);
      }

      // Calcula a distância entre a empresa e cada cliente
      const distancias = rotaData.map((i) => [i.x, i.y]);

      const resu = encontrarRotaMenorDistancia(distancias);

      // Calcula a distância entre a empresa e cada cliente
      const rot = rotaData.map((cliente) => {
        const pontoMaisProximo = resu.rota.find(
          (ponto) => ponto[0] === cliente.x && ponto[1] === cliente.y
        );

        return {
          cliente,
          ponto_proximo: pontoMaisProximo,
        };
      });

      // Ordena a rota pelo menor caminho, mantendo a empresa no final
      const rotOrdenadaMaisProxima = rot
        .sort((a, b) => {
          const pontoA = a.ponto_proximo
            ? resu.rota.indexOf(a.ponto_proximo)
            : resu.rota.length; // Se não encontrado, considera o final
          const pontoB = b.ponto_proximo
            ? resu.rota.indexOf(b.ponto_proximo)
            : resu.rota.length; // Se não encontrado, considera o final

          // Se ambos têm pontos mais próximos ou estão no final, ordene pelo índice
          if (pontoA === pontoB) {
            return a.cliente.index - b.cliente.index;
          }

          return pontoA - pontoB; // Ordena do menor para o maior
        })
        .map((item) => item.cliente);

      setRotaCalculada(rotOrdenadaMaisProxima);
    } catch (error) {
      console.error("Erro ao calcular rota otimizada", error);
    }
  };

  const cadastrarCliente = async () => {
    try {
      await api.post("/clientes");
      putRotaData();
    } catch (error) {
      console.error("Erro ao cadastrar cliente", error);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        putClientData,
        putRotaData,
        calcularRota,
        cadastrarCliente,
        clientData,
        rotaData,
        rotaCalculada,
        limparLocalStorage,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = useContext(ClientContext);

  if (!context) {
    throw new Error("useClient must be used with ClientContext");
  }

  return context;
};

ClientProvider.propTypes = {
  children: PropTypes.node,
};
