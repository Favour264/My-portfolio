import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css'
import Services from './Components/Services'
import Contact from './Components/Contact'

function App() {

  return (
    <>
         <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
     <Navbar/>
     <Home/>
     <About/>
     <Services/>
     <Contact/>
     <Footer/>
     </div>
    </>
  )
}

export default App
