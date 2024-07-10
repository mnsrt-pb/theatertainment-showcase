import Header from './js/components/Header';
import Home from './js/components/Home'
import About from './js/components/About';
import Features from './js/components/Features';
import Demo from './js/components/Demo';
import Footer from './js/components/Footer';

function App() {
  return (
    <div>
      <Header /> 

      <main>
        <Home /> 
        <About /> 
        <Features /> 
        <Demo /> 
        <Footer /> 
      </main>
    </div>
  );
}

export default App;
