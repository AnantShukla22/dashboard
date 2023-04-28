import { tableData } from "../data/tableData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import styles from "../../styles/table.module.css";

const Tables = () => {
  return (
    <TableContainer component={Paper} className={styles.table_container}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead className={styles.table_headContainer}>
          <TableRow>
            <TableCell className={styles.table_head}>Tracking ID</TableCell>
            <TableCell className={styles.table_head}>Product</TableCell>
            <TableCell className={styles.table_head}>Costumer</TableCell>
            <TableCell className={styles.table_head}>Date</TableCell>
            <TableCell className={styles.table_head}>Amount</TableCell>
            <TableCell className={styles.table_head}>Payment Method</TableCell>
            <TableCell className={styles.table_head}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={styles.table_row}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className={styles.table_cell}>
                <div className={styles.table_cellWrapper}>
                  <Image src={row.img} alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={styles.table_cell}>
                {row.customer}
              </TableCell>
              <TableCell className={styles.table_cell}>{row.date}</TableCell>
              <TableCell className={styles.table_cell}>{row.amount}</TableCell>
              <TableCell className={styles.table_cell}>{row.method}</TableCell>
              <TableCell className={styles.table_cell}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
