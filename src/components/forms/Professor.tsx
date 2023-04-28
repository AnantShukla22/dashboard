import styles from "../../styles/registerUser.module.css"
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const Employee = () => {
  return (
     <form>
<div className={styles.form_left}>
  <div className={[styles.form_input, styles.file_input].join(" ")}>
    <label htmlFor="file">
      <FolderOutlinedIcon className={styles.form_icon} />
      <span>: Add Image</span>
    </label>
    <input type="file" id="file" style={{ display: "none" }} />
  </div>
  
  <div className={styles.form_input}>
    <label>Full Name:</label>
    <input type="text" placeholder="Enter full name" />
  </div>
  <div className={styles.form_input}>
    <label>Gender:</label>
    <input type="text" placeholder="Enter Gender" />
  </div>
  <div className={styles.form_input}>
    <label>Profession </label>
    <input type="text" placeholder="Enter your position" />
  </div>

  <button className={styles.form_button}>Submit</button>
</div>

<div className={styles.form_right}>

  <div className={styles.form_input}>
    <label>Available Hours:</label>
    <input type="text" placeholder="enter in hours" />
  </div>
  <div className={styles.form_input}>
    <label>Email Address:</label>
    <input type="email" placeholder="Enter Email" />
  </div>
  <div className={styles.form_input}>
    <label>Phone:</label>
    <input type="text" placeholder="Enter Phone No." />
  </div>
  

  <div className={styles.form_input}>
    <label>Address:</label>
    <input type="text" placeholder="Enter Address" />
  </div>
</div>
</form>
  )
}

export default Employee