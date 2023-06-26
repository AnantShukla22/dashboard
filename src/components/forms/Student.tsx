import styles from "../../styles/registerUser.module.css";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import { useState } from "react";
import Axios from "axios";

const Student = () => {
  const [fullname, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [address, setAddress] = useState("");

  const register = () => {
    Axios.post("http://localhost:8000/register/student", {
      fullname: fullname,
      gender: gender,
      phoneNo: phoneNo,
      emailReg: emailReg,
      passwordReg: passwordReg,
      fatherName: fatherName,
      address: address,
    }).then((res) => {
      console.log(res);
    });
  };

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
          <input
            name="fullname"
            required
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter full name"
          />
        </div>
        <div className={styles.form_input}>
          <label>Gender:</label>
          <input
            name="gender"
            required
            type="text"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            placeholder="Enter your gender"
          />
        </div>
        <div className={styles.form_input}>
          <label>Phone:</label>
          <input
            required
            name="phoneNo"
            type="number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Enter Phone No."
          />
        </div>
        
        <button onClick={register} className={styles.form_button}>
          Submit
        </button>
      </div>

      <div className={styles.form_right}>
      <div className={styles.form_input}>
          <label>Email Address:</label>
          <input
            name="email"
            required
            type="email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
            placeholder="Enter Email"
          />
        </div>
       

        
        <div className={styles.form_input}>
          <label>Password:</label>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="********" />
        </div>
        <div className={styles.form_input}>
          <label>Father's Name:</label>
          <input
            required
            type="text"
            name="fatherName"
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
            placeholder="Enter your father's name"
          />
        </div>
        <div className={styles.form_input}>
          <label>Contact Address:</label>
          <input
            required
            name="address"
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter your Address"
          />
        </div>
      </div>
    </form>
  );
};

export default Student;
