import Image from "next/image"
import styles from "../../styles/loginIndex.module.css"
import logo from "../../../public/assests/prophoto.jpeg"
const index = () => {
  return (
    <div className={styles.login_index_container}>
          <div className={styles.login_category}>
            <Image src={logo} alt="" />
          </div>
          <div className={styles.login_category}>
          <Image src={logo} alt="" />

          </div>
          <div className={styles.login_category}>
          <Image src={logo} alt="" />

          </div>
    </div>
    
  )
}

export default index