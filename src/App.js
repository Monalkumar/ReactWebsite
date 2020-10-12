import React from 'react';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Protfolio from './components/Protfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contacts from './components/Contacts';
import Maps from './components/Maps';
import Footer from './components/Footer'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//     <Navbar/>
//     <Header/>
//     <About/>

//           </div>
//   );
// }

const App = () => {
  return(
    <div className="App">
  <Navbar/>
  <Header/>
  <About/>
  <Services/>
  <Protfolio/>
  <Testimonials/>
  <Pricing/>
  <Contacts/>
  <Maps/>
  <Footer/>
        </div>
        );
}

export default App;
