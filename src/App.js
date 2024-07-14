import Header from './js/components/Header';
import Home from './js/components/Home'
import About from './js/components/About';
import Features from './js/components/Features';
import Demo from './js/components/Demo';
import Footer from './js/components/Footer';
import Technical from './js/components/Technical';

function App() {
  return (
    <div>
      <Header /> 

      <main>
        <Home /> 
        <About /> 
        <Features /> 
        <Technical /> 
        <Demo /> 
        <Footer /> 
      </main>
    </div>
  );
}

export default App;
