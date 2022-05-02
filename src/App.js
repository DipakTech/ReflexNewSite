
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import GlobaalStyle from './components/globlaStyle/GlobalStyle.style'
import Footer from './components/Footer/Footer'
import CopyrightFooter from './components/CopyrightFooter/CopyrightFooter'
import ContactPage from './pages/Contactpage';
import Carriers from './pages/Carriers'

import HomePage from './pages/HomePage'
import Vacancies from './pages/Vacancies';
import About from './pages/About';
const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <GlobaalStyle />
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/about' element={<Aboutus />} /> */}
            <Route path='/about' element={<About />} />
            {/* <Route path='/work' element={<Work />} /> */}
            {/* <Route path='/carriers' element={<Carriers />} /> */}
            <Route path='/careers/vacancies' element={<Vacancies />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
          <CopyrightFooter />
        </>
      </Router>
    </ThemeProvider>
  )
}

export default App
