import LandingAddition from "@/components/landing-page/landing-addition";
import CustomBrandedSection from "@/components/landing-page/landing-branding";
import ContactForm from "@/components/landing-page/landing-contactus";
import LandingHero from "@/components/landing-page/landing-hero";
import LandingNarrative from "@/components/landing-page/landing-narrative";
import LandingNavbar from "@/components/landing-page/landing-navbar";
import LandingVideo from "@/components/landing-page/landing-video";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <LandingNavbar />
      <LandingHero />
      <LandingNarrative />
      <LandingVideo />
      <LandingAddition />
      <CustomBrandedSection />
      <ContactForm />
    </div>
  );
}
