import Image from "next/image";
import { useRouter } from "next/router";
import defaultImg from "../../../public/assests/prophoto.jpeg";
import styles from "../../styles/registerUser.module.css";
import Student from "@/components/forms/Student";
import Professor from "@/components/forms/Professor";
import Employee from "@/components/forms/Employee";

const user = () => {
  const { query } = useRouter();

  return (
    <div className={styles.registerUser_container}>
      <div className={styles.registerUser_content}>
        <div className={styles.registerUser_left}>
          <Image src={defaultImg} alt="" />
        </div>

        <div className={styles.registerUser_right}>
          <div className={styles.registerUser_heading}>
            <h1>{query.user}</h1>
          </div>

          {query.user === "Student" && <Student />}
          {query.user === "Employee" && <Employee />}
          {query.user === "Professor" && <Professor />}
        </div>
      </div>
    </div>
  );
};

export default user;
