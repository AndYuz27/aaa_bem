import Achives from "./components/Achives/Achives";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Founder from "./components/Founder/Founder";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Shedule from "./components/Shedule/Shedule";

function App() {
  return (
    <div className="container">
      <Header/>
      <Landing/>
      <Achives/>
      <Founder/>
      <Shedule/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
