import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"] });
export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Header />
      <div className=" mx-auto w-11/12 py-10 lg:space-y-10 space-y-6">
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
