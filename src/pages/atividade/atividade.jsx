import Negocio from "../negocio/negocio";
import Menu from "../../components/menu/menu";

function Atividade() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md3 col-xl-2 px-sm-2 px0">
            <Menu page="atividade" />
          </div>

          <div className="col py-3 me-3">
            <Busca texto="Busca por negócio" />
            <h1>Atividades....</h1>
          </div>
        </div>
      </div>
    </>
  );
}
