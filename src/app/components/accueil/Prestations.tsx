import ButtonSecondary from "../ButtonSecondary"
import PrestationsList from "@/app/layouts/PrestationsList"
import style from "./css/Accueil.module.css"
export default function Prestations(){
    return (
        <section id={style.prestations} className="container-fluid pb-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-5">
                <h2 className="mb-0">Prestations photographiques</h2>
                <ButtonSecondary text="VOIR PLUS" styleName="secondaryBlack" />
                </div>
                <PrestationsList />
            </div>
        </section>
    )
}