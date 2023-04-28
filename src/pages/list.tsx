import styles from "../styles/list.module.css";
import { listDataRows, listDataCol } from "../components/data/listData";
import { DataGrid } from "@mui/x-data-grid";

const list = () => {
  return (
    <div className={styles.list_container}>
      <div className={styles.table_heading}>Lastest Visitors</div>
      <DataGrid
       sx={{
        border: 3,
        borderColor: 'white',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
      }}
        rows={listDataRows}
        columns={listDataCol}
        autoPageSize
        pageSizeOptions={[5]}
        checkboxSelection
        className={styles.list_wrapper}
      />
    </div>
  );
};

export default list;
