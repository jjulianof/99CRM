import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Indicador from "../../components/indicador/indicador";
import Grafico from "../../components/grafico/grafico";
import { useEffect, useState } from "react";

function Dashboard() {
  /*
  let dadosIndicadores = {
    valor_mes: 5000,
    qtd_mes: 18,
    valor_dia: 3200,
    qtd_dia: 5,
  };
*/

  const [dadosIndicadores, setDadosIndicadores] = useState({});
  const [dadosAnual, setDadosAnual] = useState({});

  function MontarIndicadores() {
    //GET no servidor
    setDadosIndicadores({
      valor_mes: 500000,
      qtd_mes: 600,
      valor_dia: 125,
      qtd_dia: 18500,
    });
  }

  function MontarGrafAnual() {
    //GET no servidor
    setDadosAnual([
      ["Mês", "Valor"],
      ["01", 1000],
      ["02", 1170],
      ["03", 660],
      ["04", 1030],
      ["05", 800],
      ["06", 780],
      ["07", 1400],
    ]);
  }

  function MontarDashboard() {
    MontarIndicadores();
    MontarGrafAnual();
  }

  useEffect(() => {
    MontarDashboard();
  }, []); //toda vez que o conteúdo do colchete acontecer então executo MontarDashboard() - isso é useEffect

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md3 col-xl-2 px-sm-2 px0">
            <Menu page="dashboard" />
          </div>

          <div className="col py-3 me-3">
            <div className="mb-5">
              <Busca texto="Busca por negócio" />
            </div>
            <div className="d-flex justify-content-between">
              <h1>Dashboard</h1>
              <button
                onClick={MontarDashboard}
                className="btn btn-primary ms-4"
              >
                Atualizar
              </button>
            </div>

            <div className="row">
              <div className="col-md-3 mt-4">
                <Indicador
                  titulo="Negócios do mês"
                  valor={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(dadosIndicadores.valor_mes)}
                  rodape={`${dadosIndicadores.qtd_mes} atividades`}
                />
              </div>
              <div className="col-md-3 mt-4">
                <Indicador
                  titulo="Atividades para hoje"
                  valor={`${dadosIndicadores.valor_dia} atividades`}
                  rodape={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(dadosIndicadores.qtd_dia)}
                />
              </div>

              <div className="col-12 mt-4">
                <Grafico
                  titulo="Vendas Anual"
                  chartType="Line"
                  dados={dadosAnual}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
