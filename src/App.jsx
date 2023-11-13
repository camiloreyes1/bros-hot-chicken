import './App.css'
import Navbar from './components/NavbarComponent'
import Footer from './components/Footer'
import Menu from './pages/Menu'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default App
