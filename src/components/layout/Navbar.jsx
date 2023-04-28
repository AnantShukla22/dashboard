import styles from "../../styles/navbar.module.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import Image from "next/image";
import profile from "../../../public/assests/prophoto.jpeg"

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_input}>
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon className={styles.search_icon}/>
      </div>
      <div className={styles.navbar_items}>
        <ul>
          <li>
            <DarkModeOutlinedIcon className={styles.navbar_icon}/>
          </li>
          <li>
            <FullscreenExitIcon className={styles.navbar_icon}/>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className={styles.navbar_icon}/>
            <span className={styles.noti_count}>1</span>
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon className={styles.navbar_icon}/>
            <span className={styles.noti_count}>1</span>
          </li>
          <li>
            <FormatListBulletedOutlinedIcon className={styles.navbar_icon}/>
          </li>
          <li>
            <Image src={profile} alt=""/>
          </li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
