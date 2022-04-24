import React from 'react'
import Data from './Data'
import Home from './Home'
import Contact from './Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
      <div>
    <BrowserRouter>
         <Routes>
           <Route path="/" element={<Data/>} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/home" element={<Home />} />
         </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
