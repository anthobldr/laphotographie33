import Hero from "../layouts/Hero";
import Assurance from "../layouts/Assurance";
import Avis from "../layouts/Avis";
import Prestation from "./Prestations";
import style from "@/app/layouts/Hero.module.css"
import PrestationsTarifs from "../components/prestations/PrestationsTarifs";
export default function Prestations(){
    return (
        <>
        <Hero
        title={
            <>
            VOS{" "}
            <span className={style.heroEnLight}>Moments</span>
            <br />
            LES PLUS{" "}
            <span className={style.heroEnLight}>Précieux</span>
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
        <Assurance title="Des prestations adaptées à chaque histoire" subtitle="Chaque séance est unique. Mon approche allie discrétion,
                sensibilité et exigence afin de capturer des images naturelles
                qui reflètent votre personnalité et les émotions du moment.
                Découvrez les univers que je vous propose."/>
        <Prestation />
        <Avis />
        </>
    )
}