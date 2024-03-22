import styles from "./home.module.css"

export default function Banner() {
    return (
        <div className={styles.content} id="banner">
        <h4 className={styles.h4}>Hello my name is</h4>
        <h1 className={styles.h1}>Mirza<span className={styles.span}>Muhib</span></h1>
        <h3 className={styles.h3}>I'am a Web developer.</h3>
        <div className={styles.newslatter}>
            <form>
            <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
            <input type="submit" name="submit" value="Lets Start" />
            </form>
        </div>
    </div>

    )
}
