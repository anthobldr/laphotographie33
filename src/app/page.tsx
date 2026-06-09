import Hero from "./layouts/Hero";
import Partenaire from "./components/accueil/Partenaire";
import Bento from "./components/accueil/Bento";
import Prestations from "./components/accueil/Prestations";
import Propos from "./components/accueil/Propos";
import Instagram from "./components/accueil/Instagram";
import Avis from "./layouts/Avis";

export default function Home() {
  return (
    <>
      <Hero />
      <Partenaire />
      <Bento />
      <Prestations />
      <Propos />
      <hr />
      <Instagram />
      <Avis />
    </>
);
}
