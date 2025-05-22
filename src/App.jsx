import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SinceSection from './components/SinceSection';
import IconsSection from './components/IconsSection';
import PicturesSection from './components/PicturesSection';
import QuantitySection from './components/QuantitySection';
import Footer from './components/Footer';
// No need to import App.css if it's empty or styles are handled by Global.css and component CSS

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <SinceSection />
        <IconsSection />
        <PicturesSection />
        <QuantitySection />
      </main>
      <Footer />
    </>
  );
}

export default App;