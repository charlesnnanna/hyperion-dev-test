import './App.css';
import Companies from './components/Companies';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramList from './components/ProgramList';
import Bootcamps from './components/Bootcamps';
import Benefits from './components/Benefits';
import 'react-multi-carousel/lib/styles.css';
import Students from './components/Students';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

function App() {
  return (
    <main
      data-theme={'light'}
      className="relative bg-gradient-to-b from-primary bg-accent lg:px-0 lg:bg-white text-secondary"
    >
      <Header />
      <Hero />
      <Companies />
      <ProgramList />
      <Bootcamps />
      <Benefits />
      <section className="bg-info">
        <Students />
        <SuccessStories />
      </section>
      <Footer />
    </main>
  );
}

export default App;
