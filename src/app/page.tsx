import Hero from "./layouts/Hero";
import Partenaire from "./components/accueil/Partenaire";
import Bento from "./components/accueil/Bento";
import Presentations from "./components/accueil/Prestations";
import Propos from "./components/accueil/Propos";

export default function Home() {
  return (
    <>
      <Hero />
      <Partenaire />
      <Bento />
      <Presentations />
      <Propos />
      <hr />
    </>
);
}
