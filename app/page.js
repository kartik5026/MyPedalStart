
import About from "./Components/About";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Info from "./Components/Info";
import Offerings from "./Components/Offerings";
import Selection from "./Components/Selection";
import Mentors from "./Components/Mentors";
import FAQComponent from "./Components/FAQComponent";
import Footer from "./Components/Footer";
export default function Home() {
  
  return (
    <>
      <Header/>
      <MainContent/>
      <About/>
      <Info/>
      <Offerings/>
      <Selection/>
      <h1 className="mentors-heading">
        We're backed by incredible <span className="highlight">mentors</span> & <span className="highlight">investors</span>
      </h1>
      <Mentors/>
      <Mentors/>
      <FAQComponent/>
      <Footer/>
    </>
  );
}
