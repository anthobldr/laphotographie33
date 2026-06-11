import style from "./css/Prestations.module.css"
export default function PrestationsTarifs(){
    return (
        <section className="container-fluid">
            <h2 className="text-center text-white py-5"> Des prestations adaptées à chaque histoire </h2>
            <div className="row d-none d-lg-block justify-content-lg-center">
                <div className="col-lg-4 border rounded text-center py-3">
                    <small className="text-center text-white">Formule</small>
                    <h3 className="text-white text-center pb-3">Essentielle</h3>
                    <div className="d-flex flex-column">
                        <small className="text-white">À partir de</small>
                        <span className={`fs-2 ${style.prestationsPrice}`}><b>1 600€</b></span>
                    </div>
                    <hr />
                    <div>
                        <ul>
                            <li>200 photos</li>
                            <li>4h de présence</li>
                            <li>Accompagnement/conseils</li>
                            <li>Retouches</li>
                            <li>Cérémonie religieuse/laïque ou civile</li>
                            <li>Vin d'honneur</li>
                            <li>Photos de groupe</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4"></div>
            </div>
        </section>
    )
}