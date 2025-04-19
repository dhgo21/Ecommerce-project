import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import Routing from './components/Routing'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </>
  )
}

export default App
