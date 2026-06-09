import PrestationsList from "../layouts/PrestationsList";

export default function Prestations(){
    return (
        <section className="container-fluid bg-body py-5 px-5">
            <h2 className="text-center pb-5">Prestations photographiques</h2>
            <PrestationsList />
        </section>
    )
}