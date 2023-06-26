import styles from "../styles/loginUser.module.css";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import Axios from "axios";

const loginUser = () => {
  const [email, setEmail] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [type, settype] = useState("student");

  const login = () => {
    Axios.post("http://localhost:8000/login", {
      email: email,
      passwordReg: passwordReg,
      type: type,
    }).then((res) => {
      console.log(res);
    });
  };

  console.log(type)
  return (
    <div className={styles.loginUser_container}>
      <div className={styles.loginUser_card}>
        <AccountCircleIcon className={styles.loginUser_icon} />
        <div className={styles.loginUser_type}>
          <select  onChange={(e) => {
              settype(e.target.value);
            }}>
            <option value="student">You Are: Student</option>
            <option value="professor">You Are: Professor</option>
            <option value="employee">You Are: Employee</option>
          </select>
        </div>
        <form action="submit">
          <div className={styles.input_container}>
            <div className={styles.input_holder}>
              <PersonIcon />
              <input
                type="text"
                name="password"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="username"
              />
            </div>
            <div className={styles.input_holder}>
              <LockIcon />
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
                placeholder="password"
              />
            </div>
          </div>

          <button onClick={login}>
            Submit
          </button>
          <div className={styles.loginUser_forgotPass}>
            <div>
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <Link href="/">Forgot Password</Link>
          </div>
          <div className={styles.loginUser_socialMethods}>
            <GitHubIcon />
            <GoogleIcon />
            <LinkedInIcon />
          </div>
        </form>
      </div>
    </div>
  );
};

export default loginUser;
