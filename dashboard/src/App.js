import React from 'react';
import MainContainer from './components/mainContainer/MainContainer';
import NavBar from './components/nav/NavBar'
import NavHeader from './components/nav/NavHeader'
import Footer from './components/fotter/Fotter'

function App() {
  return (
    <div id="wrapper">

        <NavBar />

        <div id="content-wrapper" className="d-flex flex-column color-back-pp">


          <div id="content" className="color-back-pp">

            <NavHeader />

            <MainContainer />

          </div>

          <Footer />


        </div>
    </div>

  );
}

export default App;
