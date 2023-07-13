import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import Indicador from "../../components/indicador/indicador";

function Dashboard() {
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
              <button className="btn btn-primary ms-4">Atualizar</button>
            </div>

            <div className="row">
              <div className="col-md-3 mt-4">
                <Indicador
                  titulo="Negócios do mês"
                  valor="R$ 10.000,00"
                  rodape="12 atividades"
                />
              </div>
              <div className="col-md-3 mt-4">
                <Indicador
                  titulo="Atividades para hoje"
                  valor="6 atividades"
                  rodape="R$ 3.150,00"
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
