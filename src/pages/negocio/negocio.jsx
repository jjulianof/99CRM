import Busca from "../../components/busca/busca";
import Menu from "../../components/menu/menu";
import DataTable from "react-data-table-component";
import dados from "../../service/dados.json";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import NegocioCad from "../negocio-cad/negocio-cad";

function Negocio() {
  /*
  const [etapas, setEtapas] = useState([]);

  const [etapa, setEtapa] = useState("");
  const [qtd_reg_pagina, setQtdRegPagina] = useState(10);
  const [dados, setDados] = useState([]);
  const [total_registros, setTotalRegistros] = useState(0);
*/

  const columns = [
    {
      name: "Código",
      selector: (row) => row.id_negocio,
      sortable: true,
      width: "120px",
    },
    {
      name: "Descrição",
      selector: (row) => row.descricao,
      sortable: true,
      compact: true,
    },
    {
      name: "Etapa",
      selector: (row) => row.etapa,
      sortable: true,
    },
    {
      name: "Empresa",
      selector: (row) => (
        <>
          <p className="mb-1">{row.empresa}</p>
          <p className="mb-1">Contato: {row.contato}</p>
        </>
      ),
      sortable: true,
      compact: true,
    },
    {
      name: "Dados Contato",
      selector: (row) => (
        <>
          <p className="mb-1">E-mail: {row.email}</p>
          <p className="mb-1">Fone: {row.fone}</p>
          <p className="mb-1">Tipo: {row.tipo_fone}</p>
        </>
      ),
      sortable: true,
    },
    {
      name: "Vl. Estimado",
      selector: (row) => row.valor,
      sortable: true,
      right: true,
      format: (row) =>
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(row.valor),
    },
    {
      cell: (row) => (
        <>
          <button
            onClick={() => whatsApp(row.fone)}
            className={
              row.tipo_fone == "c"
                ? "btn btn-success"
                : "btn btn-success disabled"
            }
          >
            <i className="bi bi-whatsapp"></i>
          </button>
          <button
            onClick={() => Editar(row.id_negocio)}
            className="btn btn-primary ms-3"
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            onClick={() => Excluir(row.id_negocio)}
            className="btn btn-danger ms-3"
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        </>
      ),
      width: "200px",
      right: true,
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Registros por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  function whatsApp(fone) {
    const url = "https://web.whatsapp.com/send?phone=55" + fone;
    window.open(url, "_blank", "noreferrer");
  }

  function Excluir(id) {
    confirmAlert({
      title: "Exclusão",
      message: "Confrima a exclusão do negócio?",
      buttons: [
        {
          label: "sim",
          onClick: () => alert("Excluir registro id: " + id),
        },
        {
          label: "Não",
          onClick: () => {},
        },
      ],
    });
  }

  function Novo() {
    const event = new CustomEvent("openSidebar", {
      detail: {
        operacao: "new",
      },
    });

    window.dispatchEvent(event);
  }

  function Editar(id) {
    const event = new CustomEvent("openSidebar", {
      detail: {
        operacao: "edit",
      },
    });

    window.dispatchEvent(event);
  }

  return (
    <>
      <NegocioCad />

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md3 col-xl-2 px-sm-2 px0">
            <Menu page="negocios" />
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

                <button onClick={Novo} className="btn btn-primary ms-4">
                  <i className="bi bi-plus-lg me-2" />
                  Novo Negócio
                </button>
              </div>

              <DataTable
                columns={columns}
                data={dados}
                pagination={true}
                paginationComponentOptions={paginationOptions}
                noDataComponent={"Nenhum registro encontrado"}
              />
            </div>

            <div className="row"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Negocio;
