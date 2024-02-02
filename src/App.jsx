
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Company from './Components/Company';
import Contact from './Components/Contact';
import GetQuote from './Components/GetQuote';
import Business from '../src/Components/Services/Business'
import Integrations from './Components/Services/Integrations';
import Scripting from './Components/Services/Scripting';
import Technology from './Components/Technology';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="contact" element={<Contact />} />
          <Route path="getquote" element={<GetQuote />} />
          <Route path="business" element={<Business />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="scripting" element={<Scripting />} />
          <Route path="technology" element={<Technology />} />


        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
