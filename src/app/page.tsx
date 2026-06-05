import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import Footer from "./layouts/Footer";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Hello World !</h1>
        <ButtonPrimary text="Découvrir mon travail" styleName="primaryOrange" />
        <ButtonPrimary text="Découvrir mon travail" />
        <ButtonSecondary text="Test Black" styleName="secondaryBlack" />
        <ButtonSecondary text="Test Black" />

        <Footer />
      </div>
    </>
);
}
