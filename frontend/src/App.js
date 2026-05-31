//COMMENT: router
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//COMMENT: Pages
import Home from './pages/Home';
// import NavBar from './components/NavBar';

// import Footer from './components/Footer';


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
        {/* <NavBar /> */}
        {/* <ScrollToTop/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/auth" element={<AuthenticationPage />} />
          <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
