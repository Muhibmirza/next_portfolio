"use client"
import styles from "./header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu } from 'react-icons/gi';
export default function Header() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
      <div className={styles.hero}>
         <nav className={styles.nav}>
            <h2 className={styles.logo}>Portfo<span className={styles.span}>lio</span></h2>
            <ul className={styles.ul}>
               <li><a href="#banner">Home</a></li>
               <li><a href="#about">About us</a></li>
               <li><a href="#service">Service</a></li>
               <li><a href="#contact">Contact Us</a></li>
            </ul>
            <a href="#" className={styles.btn}>Subscribe</a>
            <Button variant="primary" onClick={handleShow} className={styles.off} >
            <GiHamburgerMenu />
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end" >
               <Offcanvas.Header closeButton >
                  <Offcanvas.Title className={styles.Title}> 
                     <h2 className={styles.logo}>Portfo<span className={styles.span}>lio</span></h2>
                 
                     </Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body  className={styles.body}>
               <ul className={styles.menue_ul}>
               <li><a href="#banner">Home</a></li>
               <li><a href="#about">About us</a></li>
               <li><a href="#service">Service</a></li>
               <li><a href="#contact">Contact Us</a></li>
            </ul>
               </Offcanvas.Body>
            </Offcanvas>
         </nav>
      </div>
   )
}
