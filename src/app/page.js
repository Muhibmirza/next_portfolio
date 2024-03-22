import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header/page"
import Banner from "./Components/banner/page"
import About from "./Components/about/page"
import Service from "./Components/service/page"
import Footer from "./Components/footer/page";
import Contactus from "./Components/contactus/page";
export default function Home() {
  return (
       <div>
         <Header/>
       <Banner/>
        <About/> 
          <Service/> 
          <Contactus/> 
        <Footer/>    
        
       </div>
   
  );
}
