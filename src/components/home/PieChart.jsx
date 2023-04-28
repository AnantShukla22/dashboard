import React from 'react'
import styles from "../../styles/pieChart.module.css";
import PieWidget from "./PieWidget"
const PieChart = ({data}) => {


  return (
    <div className={styles.pieChart_container}>
          <PieWidget  data={data}/>
          <PieWidget data={data}/>
    </div>
  )
}

export default PieChart