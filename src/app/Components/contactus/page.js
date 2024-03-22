import styles from "./page.module.css"

export default function Contactus() {
    return (
      
        
            <section className={styles.contact} id="contact">
             <h1 className={styles.heading}>Contact<span className={styles.span}> US</span></h1>    
            
             <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}>
               <fieldset className={styles.fieldset}> 
               <input type="hidden" name="access_key" value="a3202be3-ddda-4e56-8c30-4a17e682726d"/>     
             <div className={styles.flex}>
              
             <div className={styles.inputbox}>
            
             <input placeholder="Your name" type="text" tabindex="1" required autofocus />
             </div>

             <div className={styles.inputbox}>
              
             <input placeholder="Your Email Address" type="email" tabindex="2" required />

             </div>
             
             <div className={styles.inputbox}>
                
             <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
             </div>
             
             </div>
               <div className={styles.button} >
               <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" className={styles.buttons}>Send Message</button>

              </div>
              </fieldset>  
             </form>


</section>

    )
}
