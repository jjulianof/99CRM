import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md3 col-xl-2 px-sm-2 px0">
            <Menu page="dashboard" />
          </div>

          <div className="col py-3 me-3">
            <Busca texto="Busca por negócio" />
            <h1>Dashboard....</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
