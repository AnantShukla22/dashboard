import styles from "../../styles/loginUser.module.css";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
const user = () => {
  return (
    <div className={styles.loginUser_container}>
      <div className={styles.loginUser_card}>
        <AccountCircleIcon className={styles.loginUser_icon} />
        <form action="submit">
          <div className={styles.input_container}>
            <div className={styles.input_holder}>
              <PersonIcon />
              <input type="text" placeholder="username" />
            </div>
            <div className={styles.input_holder}>
              <LockIcon />
              <input type="password" placeholder="password" />
            </div>
          </div>

          <button type="submit">Submit</button>
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

export default user;
