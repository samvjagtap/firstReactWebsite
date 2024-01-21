import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
