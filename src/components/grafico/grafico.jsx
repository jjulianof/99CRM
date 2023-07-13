import { Chart } from "react-google-charts";

function Grafico(props) {
  const dados = [
    ["Mês", "Valor"],
    ["01", 1000],
    ["02", 1170],
    ["03", 660],
    ["04", 1030],
  ];

  const options = {
    legend: props.legenda ? {} : { position: "none" },
  };

  return (
    <div className="card">
      <div className="card-header">{props.titulo}</div>
      <div className="card-body terxt-center">
        <Chart
          chartType={props.chartType}
          data={dados}
          width="100%"
          height="350px"
          options={options}
          legendToggle={true}
        />
      </div>
    </div>
  );
}

export default Grafico;
