import Assurance from "../components/Prestations/Assurance";
import Avis from "../layouts/Avis";
import Hero from "../layouts/Hero";
import Presentations from "../layouts/PrestationsList";
export default function Prestations(){
    return (
        <>
        <Hero />
        <Assurance />
        <Presentations />
        <Avis />
        </>
    )
}