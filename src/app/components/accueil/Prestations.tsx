import Image from "next/image"
import ButtonSecondary from "../ButtonSecondary"
import style from "./css/Accueil.module.css"
export default function Prestations(){
    return (
        <>
        <section id={style.prestations} className="container-fluid pb-5">
            <div className="container">
                <div className="d-flex justify-content-between py-5">
                    <h2>Prestations photographiques</h2>
                    <ButtonSecondary text="VOIR PLUS" styleName="secondaryBlack"/>
                </div>
                <div className="row g-4 justify-content-between">
                    <div className="col-12">
                        <div>
                            <Image src="/images/bento/photo1.jpg" className="w-100 object-fit-cover" width={1000} height={400} alt=""/>
                        </div>
                        <div className={`py-2 d-flex justify-content-between ${style.prestationsBanner}`}>
                            <div>
                                <span className={`ps-4 ${style.prestationsTitle}`}>MARIAGE</span>
                            </div>
                            <div className={`pe-4 d-flex`}>
                                <span>À partir de <b>500€</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Image src="/images/prestations/maternite.png" className="w-100 object-fit-cover" width={650} height={300} alt=""/>
                        </div>
                        <div className={`py-2 d-flex justify-content-between ${style.prestationsBanner}`}>
                            <div>
                                <span className={`ps-4 ${style.prestationsTitle}`}>MATERNITÉ</span>
                            </div>
                            <div>
                                <span className={`pe-4`}>À partir de <b>500€</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Image src="/images/bento/photo15.png" className="w-100 object-fit-cover" width={650} height={300} alt=""/>
                        </div>
                        <div className={`py-2 d-flex justify-content-between ${style.prestationsBanner}`}>
                            <div>
                                <span className={`ps-4 ${style.prestationsTitle}`}>PORTRAITS</span>
                            </div>
                            <div>
                                <span className={`pe-4`}>À partir de <b>500€</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Image src="/images/prestations/animalier.jpg" className="w-100 object-fit-cover" width={650} height={300} alt=""/>
                        </div>
                        <div className={`py-2 d-flex justify-content-between ${style.prestationsBanner}`}>
                            <div>
                                <span className={`ps-4 ${style.prestationsTitle}`}>ANIMALIER</span>
                            </div>
                            <div>
                                <span className={`pe-4`}>À partir de <b>500€</b></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <Image src="/images/prestations/corporate.jpg" className="w-100 object-fit-cover" width={650} height={300} alt=""/>
                        </div>
                        <div className={`py-2 d-flex justify-content-between ${style.prestationsBanner}`}>
                            <div>
                                <span className={`ps-4 ${style.prestationsTitle}`}>CORPORATE</span>
                            </div>
                            <div>
                                <span className={`pe-4`}>À partir de <b>500€</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}