import styles from "./page.module.css"

export default function About() {
    return (
        <section className={styles.about} id="about">
        <div className={styles.main}>
           <img src="/assests/portfolio2.jpeg" alt="" />
           <div className={styles.abouttext}>
             <h2 className={styles.h2}>About Me</h2>
             <h5 className={styles.h5}>Developer <span className={styles.span}>& Designer</span></h5>
             <p className={styles.p} align="justify">As a versatile developer proficient in both front-end and back-end technologies, I bring a holistic approach to crafting digital experiences. 
                With a keen eye for design and a passion for functionality, I specialize in creating seamless and intuitive user interfaces while ensuring robust and efficient backend systems. 
                My journey in web development
                 has equipped me with a diverse skill set, ranging from HTML, CSS, and JavaScript 
                for crafting engaging user interfaces,
                to languages like Python, Node.js, and databases such as MySQL and 
                 for building scalable and efficient backend architectures. I thrive on challenges, constantly seeking innovative solutions to complex problems, and am dedicated to delivering high-quality, 
                 impactful solutions
                  that exceed expectations. Let's collaborate to bring your digital vision to life.
    
                </p>
                <div className={styles.buttons}>
                <button type="button" className={styles.button}>Let's Talk</button>
                </div>
            </div>
        </div>
    </section>
    )
}
