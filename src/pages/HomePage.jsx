import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TheShift from "../components/TheShift";
import WhatWeBuild from "../components/WhatWeBuild";
import WhoThisIsFor from "../components/WhoThisIsFor";
import Method from "../components/Method";
import ProofLab from "../components/ProofLab";
import Offers from "../components/Offers";
import AuditCTA from "../components/AuditCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheShift />
        <WhatWeBuild />
        <WhoThisIsFor />
        <Method />
        <ProofLab />
        <Offers />
        <AuditCTA />
      </main>
      <Footer />
    </>
  );
}
