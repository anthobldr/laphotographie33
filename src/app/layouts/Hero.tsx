"use client";
import { usePathname } from 'next/navigation';
import style from "./Hero.module.css"
import Navbar from "./Navbar"
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';

export default function Hero(){
    const pathname = usePathname();
    const caroussel = [
        {
            id: "1",
            name: "Mariage"
        },
        {
            id: "2",
            name: "Maternité"
        },
        {
            id: "3",
            name: "Portrait"
        },
        {
            id: "4",
            name: "Animalier"
        },
        {
            id: "5",
            name: "Corporate"
        },
    ]
    return (
        <>
        <div className={`${style.hero} d-flex flex-column`}>
            <div className="container-fluid py-4">
                <Navbar />
            </div>
            <div className="container-fluid flex-grow-1 d-flex align-items-center">
                <div className="row w-100">
                    <div className="col-lg-6 ps-lg-5">
                        <h1 className={style.heroTitle}>
                        RÉVÉLER VOTRE{" "}
                        <span className={style.heroEnLight}>Histoire,</span>
                        <br />
                        SUBLIMER VOTRE{" "}
                        <span className={style.heroEnLight}>Image.</span>
                        </h1>

                        <p className={`${style.heroDescription} mt-5`}>
                        Laissez-vous surprendre par votre propre beauté à travers
                        un regard bienveillant, à la frontière entre authenticité
                        et poésie lumineuse.
                        </p>

                        <div className="d-flex gap-3 mt-5">
                        <ButtonPrimary text="DÉCOUVRIR MON TRAVAIL" styleName='primaryOrange'/>
                        <ButtonSecondary text="CONTACT" styleName='secondaryWhite'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pb-4">
                <div className="d-flex justify-content-center gap-5">
                    {caroussel.map((button) =>
                        <div key={button.id} className={`d-flex flex-column align-items-center ${style.caroussel}`}>
                            <span className={`${style.carousselButton}`}>{""}</span>
                            {button.name}
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}