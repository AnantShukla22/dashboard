import styles from "../../styles/sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import NoteIcon from "@mui/icons-material/Note";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_container} id="sidebar">
      <div className={styles.sidebar_top}>
        <span className={styles.sidebar_logo}>Student Portal</span>
      </div>
      <div className={styles.sidebar_center}>
        <ul>
          <p className={styles.icon_title}>MAIN</p>
          <li>
            <DashboardIcon className={styles.sidebar_icon} />
            <Link href="/">Dashboard</Link>
          </li>
          <p className={styles.icon_title}>UTILITIES</p>
          <li>
            <PersonOutlineIcon className={styles.sidebar_icon} />
            <span className={styles.addUserSpan}>
              <Link href="/loginUser">Login</Link> /{" "}
              <Link href="/register">Register</Link>
            </span>
          </li>

          <li>
            <InsertChartIcon className={styles.sidebar_icon} />
            <Link href="/list">Visitors</Link>
          </li>
          <li>
            <NotificationsNoneIcon className={styles.sidebar_icon} />
            <Link href="/">Notifications</Link>
          </li>
          
          <p className={styles.icon_title}>SERVICE</p>
          <li>
            <SettingsSuggestIcon className={styles.sidebar_icon} />
            <Link href="/">System health</Link>
          </li>
          <li>
            <NoteIcon className={styles.sidebar_icon} />
            <Link href="/">Logs</Link>
          </li>
          <li>
            <SettingsOutlinedIcon className={styles.sidebar_icon} />
            <Link href="/">Settings</Link>
          </li>
          <p className={styles.icon_title}>USER</p>

          <li>
            <AccountCircleOutlinedIcon className={styles.sidebar_icon} />
            <Link href="/">Profile</Link>
          </li>
          <li>
            <ExitToAppOutlinedIcon className={styles.sidebar_icon} />
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
      <div className={styles.sidebar_bottom}></div>
    </div>
  );
};

export default Sidebar;
