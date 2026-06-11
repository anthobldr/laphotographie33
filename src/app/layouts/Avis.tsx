import ButtonPrimary from "../components/ButtonPrimary";

export default function Avis() {
  return (
    <>
      <section className="container py-5 text-center">
        <h2 className="text-white">Ils m’ont fait confiance</h2>
        <ButtonPrimary
          text="LAISSER UN AVIS"
          styleName="primaryOrange"
          href=""
        />
      </section>
    </>
  );
}
