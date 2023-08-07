import About from '@/components/About';
import Background from '@/components/Background';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Background/>
      <Header />
      <div className=" mx-auto w-11/12 py-10 space-y-5">
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
