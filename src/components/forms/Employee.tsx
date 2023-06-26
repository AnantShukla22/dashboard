import styles from "../../styles/registerUser.module.css";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import {useState} from "react"
import Axios from "axios";


const Employee = () => {

const [fullname, setName] = useState("")
const [gender, setGender] = useState("")
const [position, setPosition] = useState("")
const [emailReg, setEmailReg] = useState("");
const [passwordReg, setPassword] = useState("");
const [phoneNo, setPhone] = useState("")
const [address, setAddress] = useState("")

const register = () => {
  Axios
    .post("http://localhost:8000/register/employee?", {
      fullname: fullname,
      gender: gender,
      phoneNo: phoneNo,
      emailReg: emailReg,
      passwordReg: passwordReg,
      position: position,
      address: address,
    })
    .then((res) => {
      console.log(res);
    });
};

  return (
    <form>
      <div className={styles.form_left}>
        <div className={[styles.form_input, styles.file_input].join(" ")}>
          <label htmlFor="file">
            <FolderOutlinedIcon className={styles.form_icon} />
            <span>: Add Resume</span>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>

        <div className={styles.form_input}>
          <label>Full Name:</label>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter full name" />
        </div>
        <div className={styles.form_input}>
          <label>Gender:</label>
          <input type="text" onChange={(e)=>{setGender(e.target.value)}} placeholder="Enter Gender" />
        </div>
        <div className={styles.form_input}>
          <label>Position </label>
          <input type="text" onChange={(e)=>{setPosition(e.target.value)}} placeholder="Enter your position" />
        </div>

        <button onClick={register} className={styles.form_button}>Submit</button>
      </div>

      <div className={styles.form_right}>
        <div className={styles.form_input}>
          <label>Email Address:</label>
          <input type="email" onChange={(e)=>{setEmailReg(e.target.value)}} placeholder="Enter Email" />
        </div>
        <div className={styles.form_input}>
          <label>Password:</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="********" />
        </div>
        <div className={styles.form_input}>
          <label>Phone:</label>
          <input type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter Phone No." />
        </div>

        <div className={styles.form_input}>
          <label>Address:</label>
          <input type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter Address" />
        </div>
      </div>
    </form>
  );
};

export default Employee;
