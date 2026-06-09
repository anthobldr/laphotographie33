import Hero from "../layouts/Hero"
import Presentation from "../components/propos/presentation";
import Principes from "../components/propos/principes";
import Chiffres from "../components/propos/chiffres";

export default function Propos() {
  return (
    <>
    <Hero
      title={
        <>
        Aurélien
        <br />
        Lambert
        </>
      }
      subtitle={
        <>
        Une vision sensible, dix ans de métier, des centaines d'histoires accompagnées. Voici la mienne.
        </>
      }
    />
      <Presentation></Presentation>
      <Principes></Principes>
      <Chiffres></Chiffres>
    </>
  );
}
