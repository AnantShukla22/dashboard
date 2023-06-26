import styles from "../../styles/widget.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Widgets = ({type}) => {

let data;

switch(type){
  case "user":
    data={
      title:"Users",
      link:"See all users",
      icon:<Person2OutlinedIcon className={styles.widget_icon}
      style={{backgroundColor:"#c501df",color:"white"}}/>
    };
    break;
    case "visits":
      data={
        title:"Visits",
        link:"Check all visitors",
        icon:<RemoveRedEyeOutlinedIcon className={styles.widget_icon}
        style={{backgroundColor:"#00bd00",color:"white"}}/>
      };
      break;
      case "ratio":
        data={
          title:"Ratio",
          link:"See the ratio",
          icon:<EqualizerOutlinedIcon className={styles.widget_icon}
          style={{backgroundColor:"#0391c4",color:"yellow"}}/>
        };
        break;
        case "gender":
          data={
            title:"Gender",
            link:"Total Genders",
            icon:<Man2OutlinedIcon className={styles.widget_icon}
            style={{backgroundColor:"#f6e0b5",color:"#026b6de"}}/>
          };
          break;
    default:
    break;
}
  return (
    <div className={styles.widget_container}>
      <div className={styles.widget_left}>
        <span className={styles.widget_title}>{data.title}</span>
        <span className={styles.widget_counter}>100</span>
        <span className={styles.widget_link}>{data.link}</span>
      </div>
      <div className={styles.widget_right}>
        <div className={[styles.widget_percentage,styles.positive].join(" ")}>
          <KeyboardArrowUpIcon /> 20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
