import Hero from "./layouts/Hero";
import Partenaire from "./components/accueil/Partenaire";
import Bento from "./components/accueil/Bento";
import Prestations from "./components/accueil/Prestations";
import Propos from "./components/accueil/Propos";
import Instagram from "./components/accueil/Instagram";
import Avis from "./layouts/Avis";
import heroStyle from "@/app/layouts/Hero.module.css"

export default function Home() {
  return (
    <>
      <Hero
        title={
            <>
            RÉVÉLER VOTRE{" "}
            <span className={heroStyle.heroEnLight}>Histoire,</span>
            <br />
            SUBLIMER VOTRE{" "}
            <span className={heroStyle.heroEnLight}>Image.</span>
            </>
        }
        subtitle={
            <>
            Laissez-vous surprendre par votre propre beauté à travers
            un regard bienveillant, à la frontière entre authenticité
            et poésie lumineuse.
            </>
        }
        />
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
