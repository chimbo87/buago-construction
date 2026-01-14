import React from "react";
import Hero from "../../components/hero/Hero";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs.jsx";
import ProductCategoriesGrid from "./components/Servicesoverview/ProductCategoriesGrid.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import Testimonials from "./components/testimonials/Testimonials";
import NewsletterSignup from "./components/newslettersignup/NewsletterSignup.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Navbar from "../../components/header/Navbar.jsx";
import FAQSection from "./components/FAQSection.jsx";
// import Stats from "./components/Stats.jsx";
import CompactVideoHero from "./components/CompactVideoHero.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <ProductCategoriesGrid />
      <WhyChooseUs />
      <CompactVideoHero/>
      {/* <Stats/> */}
      {/* <LatestNews/> */}
      <Testimonials />
      <NewsletterSignup />
      {/* <QuickContactForm/> */}
      <FAQSection/>
      <Footer />
    </>
  );
}

export default Home;
