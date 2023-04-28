import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import styles from "../../styles/pieChart.module.css";

const pieWidget = ({ data }) => {
  let chartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [10, 40],
        backgroundColor: ["#121d3b", "#70385b"], 
        // this needs to be changed
        // data: data.map((item) => item.gender),
      },
    ],
  };

  const options = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className={styles.pieChart_wrapper}>
      <div className={styles.pieChart_header}>
        <h3>Gender Ratio</h3>
      </div>
      <div className={styles.pieChart_graph}>
        <Pie data={chartData} options={options} />
      </div>

      <div className={styles.pieChart_footer}>
        <div className={styles.pieChart_footer_heading}>
          <span> Male Count </span>
          <p>20</p>
        </div>
        <div className={styles.pieChart_footer_line_div}>
          <span
            className={[
              styles.pieChart_footer_line,
              styles.pieChart_footer_line_reach,
            ].join(" ")}
          ></span>
        </div>
        <div className={styles.pieChart_footer_heading}>
          <span> Male Count </span>
          <p>20</p>
        </div>
        <div className={styles.pieChart_footer_line_div}>
          <span
            className={[
              styles.pieChart_footer_line,
              styles.pieChart_footer_line_reach,
            ].join(" ")}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default pieWidget;
