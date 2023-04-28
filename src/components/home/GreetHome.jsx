import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ShareIcon from '@mui/icons-material/Share';
import styles from "../../styles/greet.module.css";

const GreetHome = () => {
  return (
    <div className={styles.greet_wrapper}>
        <div className={styles.greet_left}>
            <h2>Welcome back, Anant!</h2>
            <p>You have 12 new messages and 7 new notification</p>
        </div>

        <div className={styles.greet_right}>

            <div className={styles.greet_timeline}>
                04/11/2023 - 04/11/2023
            </div>

            <div className={styles.greet_icon}>
                <EmailIcon/>
                <DownloadIcon/>
                <PictureAsPdfIcon/>
                <ShareIcon/>
            </div>

        </div>
    </div>
  )
}

export default GreetHome