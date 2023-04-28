import { Bar } from "react-chartjs-2";
import styles from "../../styles/columnGraph.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import OpenWithOutlinedIcon from "@mui/icons-material/OpenWithOutlined";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
const ColumnGraph = ({ data }) => {
  // chart js cant work directly with json it works as below
  let chartData = {
    labels: ["Mechanical", "CSE", "ECE", "Medical", "Eletrical"],
    datasets: [
      {
        label: "B.tech Year",
        data: [1,2,3,5,7],
        borderColor: '#2596be',
        backgroundColor: '#9325be9f',
        pointStyle:{
        }
      },
    ],
  };

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
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
    <div className={styles.columnGraph_container}>
      <div className={styles.columnGraph_header}>
        <h3>Department Vs Year</h3>
        <div className={styles.columnGraph_icons}>
          <OpenWithOutlinedIcon />
          <MoreHorizOutlinedIcon className={styles.columnGraph_icon1}/>
        </div>
      </div>
      <Bar data={chartData} options={options} className={styles.columnGraph_graph}/>
    </div>
  );
};

export default ColumnGraph;
