import Image from "next/image";
import { useRouter } from "next/router";
import defaultImg from "../../../public/assests/prophoto.jpeg";
import styles from "../../styles/registerUser.module.css";
import Student from "@/components/forms/Student";
import Professor from "@/components/forms/Professor";
import Employee from "@/components/forms/Employee";

const user = () => {
  const { query } = useRouter();

  let name=query.user
  name=name && name[0].toUpperCase() + name.slice(1);

  return (
    <div className={styles.registerUser_container}>
      <div className={styles.registerUser_content}>
        <div className={styles.registerUser_left}>
          <Image src={defaultImg} alt="" />
        </div>

        <div className={styles.registerUser_right}>
          <div className={styles.registerUser_heading}>
            <h1>{name}</h1>
          </div>

          {query.user === "student" && <Student />}
          {query.user === "employee" && <Employee />}
          {query.user === "professor" && <Professor />}
        </div>
      </div>
    </div>
  );
};

export default user;
