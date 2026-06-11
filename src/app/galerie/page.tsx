import heroStyle from "@/app/layouts/Hero.module.css"
import GalerieBento from "../components/galerie/GalerieBento";
import Hero from "../layouts/Hero";
import Avis from "../layouts/Avis";
import CTABanner from "../layouts/CTABanner";

export default function Galerie(){
    return (
        <>
        <Hero
        title={
            <>
            Chaque{" "}
            <span className={heroStyle.heroEnLight}>Image,</span>
            <br />
            Raconte une{" "}
            <span className={heroStyle.heroEnLight}>Histoire</span>
            </>
        }
        subtitle={
            <>
            Des regards, des émotions des souvenirs qui traversent le temps.
            </>
        }
        />
        <GalerieBento />
        <CTABanner />
        <Avis />
        </>
    )
}