import './App.css';

import Header from './pages/header/Header';
import AboutMe from './pages/about-me/AboutMe'
import Experience from './pages/experience/Experience'
import Footer from './pages/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Footer></Footer>
    </div>
  );
}

export default App;