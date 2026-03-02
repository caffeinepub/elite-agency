import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Careers from './components/Careers';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ContactForm />
        <Careers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
