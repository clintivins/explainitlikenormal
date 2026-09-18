import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Books />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
