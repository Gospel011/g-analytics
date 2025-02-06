import Footer from "../../ui/Footer";
import Analytics from "./Analytics";
import Cards from "./Cards";
import Hero from "./Hero";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <div className="text-white">
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
