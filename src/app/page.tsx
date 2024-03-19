import Contato from "@/components/Contato";
import Testimonials from "@/components/Depoimentos";
import Escolher from "@/components/Escolher";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import Nav from "@/components/NavBar";
import Produtos from "@/components/Produtos";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSlider />
      <Sobre />
      <Escolher />
      <Produtos />
      <Testimonials />
      <Contato />
      <Footer />
    </>
  );
}
