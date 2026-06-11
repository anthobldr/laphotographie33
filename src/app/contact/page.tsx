import ChiffresContact from "../components/contact/ChiffresContact";
import Partner from "../components/contact/Partner";
import Hero from "../layouts/Hero";
import heroStyle from "../layouts/Hero.module.css";

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
      <Partner></Partner>
    </>
  );
}
