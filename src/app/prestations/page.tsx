import Hero from "../layouts/Hero";
import Assurance from "../components/Prestations/Assurance";
import Avis from "../layouts/Avis";
import Prestation from "./Prestations";
import style from "@/app/layouts/Hero.module.css"
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
        <Assurance />
        <Prestation />
        <Avis />
        </>
    )
}