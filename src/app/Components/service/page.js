"use client"
import styles from "./page.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
export default function Service() {
    return (
        <div className={styles.service} id="service">
            <div className={styles.title}>
              <h2 className={styles.h2}>Our Service</h2>
            </div>
             <div className={styles.box}>
                 <div className={styles.card}>
                 <FontAwesomeIcon icon={faBars} className={styles.i} />

                    <h5 className={styles.h5}>Web Development</h5>
                    <div className={styles.pra}>
                    <p  className={styles.p}>Every Website should be built with tw primary goals:Firstly, it needs
                        to work across all devices.Secondly, it needs to be fast as possible </p>
                   
                   <p className={styles.pb}>
                    <a className={styles.button} href="#">Read More</a>
                   </p>
                    </div>
                 </div>
                 <div className={styles.card}>
                 <FontAwesomeIcon icon={faUser} className={styles.i} />

                    <h5 className={styles.h5}>Web Development</h5>
                    <div className={styles.pra}>
                    <p className={styles.p}>Every Website should be built with tw primary goals:Firstly, it needs
                        to work across all devices.Secondly, it needs to be fast as possible </p>
                   
                   <p className={styles.pb}>
                    <a className={styles.button} href="#">Read More</a>
                   </p>
                    </div>
                 </div>
                 <div className={styles.card}>
                 <FontAwesomeIcon icon={faBell}  className={styles.i} />


                    <h5 className={styles.h5}>Web Development</h5>
                    <div className={styles.pra}>
                    <p className={styles.p}>Every Website should be built with tw primary goals:Firstly, it needs
                        to work across all devices.Secondly, it needs to be fast as possible </p>
                   
                   <p className={styles.pb}>
                    <a className={styles.button} href="#">Read More</a>
                   </p>
                    </div>
                 </div>
             </div>
             
        </div>
    )
}
