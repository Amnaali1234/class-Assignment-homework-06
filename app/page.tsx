import Navbar from "../app/components/Navbar";
import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import CoursesCategories from "./components/CoursesCategories";
import OurAchivement from "./components/OurAchivement";
import Courses from "./components/Blog";
import OurTeam from "./components/OurTeam";
import Customer from "./components/Customer";
import LogoSection from "./components/LogoSection";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="fixed bg-white mb-20 w-full">
        <Navbar />
        <Header />
      </div>

      <Hero />
      <LogoSection />
      <CoursesCategories />
      <OurAchivement />
      <Courses />
      <OurTeam />
      <Customer />
      <Footer />
    </div>
  );
}
