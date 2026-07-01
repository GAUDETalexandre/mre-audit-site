import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Probleme from "./sections/Probleme.jsx";
import Solution from "./sections/Solution.jsx";
import ExAnte from "./sections/ExAnte.jsx";
import DemoMercier from "./sections/DemoMercier.jsx";
import BiblioVivante from "./sections/BiblioVivante.jsx";
import Extensibilite from "./sections/Extensibilite.jsx";
import Decomposition from "./sections/Decomposition.jsx";
import Chiffres from "./sections/Chiffres.jsx";
import PackInstitutionnel from "./sections/PackInstitutionnel.jsx";
import EngagementSociete from "./sections/EngagementSociete.jsx";
import MonHistoire from "./sections/MonHistoire.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Probleme />
        <Solution />
        <ExAnte />
        <DemoMercier />
        <BiblioVivante />
        <Extensibilite />
        <Decomposition />
        <Chiffres />
        <EngagementSociete />
        <PackInstitutionnel />
        <MonHistoire />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
