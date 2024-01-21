import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { theme } from "../../styles/theme";

export const CartesianPlane = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const listarClientes = async () => {
      try {
        const { data } = await api.get("/clientes");
        setList(data);
      } catch (error) {
        console.error("Erro ao listar clientes", error);
      }
    };

    return () => {
      listarClientes();
    };
  }, []);

  const data = [
    {
      id: Object.values(list).map((item) => item.nome),
      color: "green",
      data: Object.values(list).map((item) => ({
        x: item.x,
        y: item.y,
      })),
    },
  ];

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <ResponsiveLine
        data={data}
        colors={[
          theme.colors.primary,
          theme.colors.primary,
          theme.colors.error,
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "0",
          max: "10",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 8,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Coordenada X",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Coordenada Y",
          legendOffset: -40,
          legendPosition: "middle",
          pointColor: "green",
        }}
        theme={{
          text: {
            fontFamily: "Lexend",
            fontSize: 10,
            color: theme.colors.white,
          },
          axis: {
            ticks: {
              text: {
                fill: theme.colors.primary,
              },
            },
          },
          tooltip: {
            container: {
              backgroundColor: theme.colors.black,
              padding: 16,
              color: theme.colors.white,
              fontFamily: "Lexend",
              fontSize: 12,
              borderRadius: 4,
            },
          },
        }}
        pointSize={20}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        
      />
    </div>
  );
};
