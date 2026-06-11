import ChiffresContact from "../components/contact/ChiffresContact";
import Partner from "../components/contact/Partner";
import Hero from "../layouts/Hero";
import heroStyle from "../layouts/Hero.module.css";
import Formulaire from "../components/contact/Formulaire";

export default function Contact() {
  return (
    <>
      <Hero
        title={
          <>
            Créons des <span className={heroStyle.heroEnLight}>Souvenirs</span>
            <br />
            qui vous ressemblent
          </>
        }
        subtitle={""}
      />
      <ChiffresContact></ChiffresContact>
      <Formulaire></Formulaire>
      <Partner></Partner>
    </>
  );
}
