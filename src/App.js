import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from "./components/hero.js";

import Weather from "./components/weather/App.js"

import  Facilities from "./components/secondpg.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Aos from "aos"
import "./fonts/TheBeast.otf"
import Feedbackform from './components/feedback';
import Middle from './components/middle';
import './Wform.js'
import Music from "./components/Second page/music player/mp.js"

function App() {
  return (
    



    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Navbar /> <Hero /> <Middle /><Footer /></>}></Route>
      <Route path="/second" element ={<><Navbar /><div className='bet'></div> <Weather /><Facilities/> <Footer /></>}></Route>
      <Route path="/music" element={<Music />}></Route>
      <Route path="/maps" element={<></>}></Route>
      <Route path="/feedback" element={<Feedbackform/>}></Route>
    </Routes>


    
    </BrowserRouter>
  );
}

export default App;
