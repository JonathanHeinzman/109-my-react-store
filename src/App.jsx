import { BrowserRouter, Routes, Route} from 'react-router-dom'

import GlobalProvider from './state/globalProvider.jsx';

import About from "./pages/About"
import Admin from "./pages/Admin.jsx";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Cart from "./pages/Cart.jsx"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>}/>
              <Route path='/catalog' element={<Catalog/>} />
              <Route path='/admin' element={<Admin/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;