import Image from "next/image";
import styles from "../../styles/registerIndex.module.css";
import logo1 from "../../../public/assests/5097611.jpg";
import logo2 from "../../../public/assests/59988.jpg";
import logo3 from "../../../public/assests/OJXK920.jpg";
import { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [userTitle, setUserTitle] = useState("");
  const router=useRouter()

  return (
    <div className={styles.register_index_container}>
      <div
        className={styles.register_category}
      >
        <Image src={logo2} alt="" onClick={() => {
          setUserTitle("student"), router.push(`/register/${userTitle}`)}}/>
        <span>Student</span>
      </div>
      <div
        className={styles.register_category}
    
      >
        <Image src={logo3} alt="" onClick={() => {
          setUserTitle("professor"),
          router.push(`/register/${userTitle}`)
          }} />
        <span>Professor</span>
      </div>
      <div
        className={styles.register_category}
      >
        <Image src={logo1} alt="" onClick={() => {
          setUserTitle("employee"), router.push(`/register/${userTitle}`)}}/>
        <span>Employee</span>
      </div>
    </div>
  );
};

export default index;
