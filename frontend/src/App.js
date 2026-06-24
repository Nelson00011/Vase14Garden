//COMMENT: router
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//COMMENT: Pages
import Home from './pages/Home';
import Info from './pages/Info';
import GrowingPage from './pages/GrowingPage';
import Gardens from './pages/GardenPage';
import Facts from './pages/FactCheck';
//COMMENT: Authentification;
import ProfilePage from './pages/ProfilePage';
import AuthenticationPage from './pages/AuthentificationPage';
//COMMENTS: static components

import NavBar from './components/NavBar';
import Footer from './components/Footer';


//COMMENT: Scroll to correct spot on page
// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0,0);
//   }, [pathname])

//   return null;
// }


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        {/* <ScrollToTop/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/grow" element={<GrowingPage />} />
          
          <Route path="/gardens" element={<Gardens />} />
          <Route path="/facts" element={<Facts />} />

          <Route path="/auth" element={<AuthenticationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
