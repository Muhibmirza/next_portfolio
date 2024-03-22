import styles from "./page.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    return (
        <div>
             <div className={styles.contactme}>
            <p className={styles.p}>Let Me Get You A Beautiful Website.</p>
            <a className={styles.buttontwo} href="#">Hire Me</a>
        </div>

        <footer className={styles.footer}>
      
            <p className={styles.p}>Mirza Muhib</p>
            <p className={styles.pera}>For Dynamic Website so you contact me on Gmail my Gmail id given below:</p>
            <a href="mailto:Muhibmirza58@gmail.com">Muhibmirza58@gmail.com</a>
                <div className={styles.social}>
                 <FontAwesomeIcon icon={faFacebook} className={styles.a}/>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.a}/>
                 <FontAwesomeIcon icon={faInstagram} className={styles.a}/>
                </div>
                <p className={styles.end}>CopyRight By Mirza Muhib</p>
               
        </footer>
        </div>
    )
}
