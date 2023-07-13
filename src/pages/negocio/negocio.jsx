import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
function Negocio() {
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

            <div className="bg-white p-4 rounded-4 border">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-inline-flex">
                  <h2>Negócios</h2>
                  <div className="form-control ms-4">
                    <select name="etapa" id="etapa">
                      <option value="0">Etapa</option>
                      <option value="1">Prospecção</option>
                      <option value="2">Proposta</option>
                    </select>
                  </div>
                </div>

                <button className="btn btn-primary ms-4">
                  <i className="bi bi-plus-lg me-2" />
                  Novo Negócio
                </button>
              </div>
            </div>

            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Negocio;
