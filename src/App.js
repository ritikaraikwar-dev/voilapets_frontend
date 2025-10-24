import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Login from './pages/Login';
import WholeSaleAccount from './pages/WholeSaleAccount';
import Cart from './pages/Cart';
import MiniPage from './pages/MiniPage';
import LargePage from './pages/LargePage';
import StandardPage from './pages/StandardPage';
import SealablePage from './pages/SealablePage';
import AdventureClipPage from './pages/AdventureClipPage';
import MiniAdventureClip from './pages/MiniAdventureClip';
import EssentialHatPage from './pages/EssentialHatPage';

import { useCart } from './context/CartContext';
function App() {

  const { getGuestId } = useCart();

  const guestId = getGuestId();
  console.log('Guest ID (UUID):', guestId);

  return (
    <>

      <Header />
      <Navbar />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mini/:id' element={<MiniPage />} />
        <Route path='/large/:id' element={<LargePage />} />
        <Route path='/standard/:id' element={<StandardPage />} />
        <Route path='/sealable/:id' element={<SealablePage />} />
        <Route path='/adventureclip/:id' element={<AdventureClipPage />} />
        <Route path='/miniadventure/:id' element={<MiniAdventureClip />} />
        <Route path='/essentialHat/:id' element={<EssentialHatPage />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/story' element={<OurStory />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/wholesale' element={<WholeSaleAccount />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpass' element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
