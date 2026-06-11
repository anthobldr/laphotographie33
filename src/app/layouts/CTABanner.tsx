import ButtonPrimary from "../components/ButtonPrimary";
import style from "./Layouts.module.css";

export default function CTABanner() {
  return (
    <section id={style.ctaBanner}>
        <div className={style.ctaCard}>
            <h2>Votre histoire mérite d’être racontée.</h2>
            <p>
            Chaque séance est une expérience unique pour créer des souvenirs vrais,
            lumineux et intemporels.
            </p>

        <ButtonPrimary text="CONTACTEZ-MOI" styleName="primaryOrange" />
    </div>
</section>
  );
}