import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
import Fotter from './components/Fotter'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Fotter />
      </BrowserRouter>
    </>
  )
}

export default App
