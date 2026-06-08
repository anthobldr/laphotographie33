import Hero from "./layouts/Hero";
import Partenaire from "./components/accueil/Partenaire";
import Bento from "./components/accueil/Bento";
import Presentations from "./layouts/Prestations";
import Propos from "./components/accueil/Propos";
import Instagram from "./components/accueil/Instagram";
import Avis from "./components/accueil/Avis";

export default function Home() {
  return (
    <>
      <Hero />
      <Partenaire />
      <Bento />
      <Presentations />
      <Propos />
      <hr />
      <Instagram />
      <Avis />
    </>
);
}
