import logo from './logo.svg';
import './App.css';
import Header from "./content/Header";
import Navigatationbar from "./content/Navigationbar";
import Footer from "./content/Footer";
import HI from './content/HI';
import Reviews from './content/Reviews';
function App() {
  return (
    <>
      <Navigatationbar />
      <HI />
      <div className='middle'>
      <Header />
      <Reviews/>
      </div>
      <Footer />
    </>
  )
}

export default App;
