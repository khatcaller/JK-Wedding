import Nav from './components/Nav';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Details from './components/Details';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Welcome />
        <Details />
        <Schedule />
        <RSVP />
        <Registry />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
