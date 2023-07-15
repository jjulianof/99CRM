import { useEffect, useState } from "react";
import { Dock } from "react-dock";
import "./negocio-cad.css";

function NegocioCad() {
  const [show, setShow] = useState(false); //primeiro passo ao renderizar a tela é setar o show como false entaao estará NAO visível
  const [operacao, setOperacao] = useState("");

  useEffect(() => {
    window.addEventListener("openSidebar", (param) => {
      setShow(true);
      setOperacao(param.detail.operacao);
    });
  }, []); //se o array estiver vazio entao esse useeffect será executado somente uma vez o componete na tela renderizar a tela

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <div className="container-fluid h-100 pt-4 sidebar p-4">
        <h4 className="d-inline">
          {operacao == "edit" ? "Editar Negócio" : "Novo Negócio"}
        </h4>

        <div className="row tela-cad">
          <div className="col-12 mt-4">
            <small className="text-secondary">Etapa</small>
            <div className="form-control mb-2">
              <select name="etapa" id="etapa">
                <option value="Prospecção">Prospecção</option>
                <option value="Proposta">Proposta</option>
              </select>
            </div>
          </div>

          <div className="col-12 mt-3">
            <small className="text-secondary">Descrição</small>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12 mt-3">
            <small className="text-secondary">Empresa</small>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12 mt-3">
            <small className="text-secondary">Contato</small>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12 mt-3">
            <small className="text-secondary">Fone</small>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12 mt-3">
            <small className="text-secondary">E-mail</small>
            <input type="text" className="form-control" />
          </div>

          <div className="col-12 mt-3">
            <small className="text-secondary">Valor Estimado</small>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="row align-items-end footer">
          <div className="text-center">
            <button
              className="btn btn-outline-primary me-3"
              onClick={() => setShow(false)}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary  me-3"
              onClick={() => setShow(true)}
            >
              Salvar Dados
            </button>
          </div>
        </div>
      </div>
    </Dock>
  );
}

export default NegocioCad;
