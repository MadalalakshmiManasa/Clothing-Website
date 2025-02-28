import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default LandingPage;

