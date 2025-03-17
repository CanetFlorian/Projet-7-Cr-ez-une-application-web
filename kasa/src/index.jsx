import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './components/Error404'
import Header from './components/Header'
import About from './pages/About'
import Footer from './components/Footer'
import Logement from './pages/Logement'
import { createGlobalStyle } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root'))

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
      
    }
`

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
