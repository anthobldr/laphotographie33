"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import style from "./Hero.module.css"
import Navbar from "./Navbar"
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import { ReactNode } from 'react';

export default function Hero({title, subtitle}:{title: ReactNode, subtitle: ReactNode}){
    const [activeCategory, setActiveCategory] = useState("1");
    const pathname = usePathname();
    const caroussel = [
    { id: "1", name: "Mariage",    bg: "/images/hero/hero-cover-accueil.png" },
    { id: "2", name: "Maternité",  bg: "/images/hero/hero-cover-maternite.png" },
    { id: "3", name: "Portrait",   bg: "/images/hero/hero-cover-portaits.png" },
    { id: "4", name: "Animalier",  bg: "/images/hero/hero-cover-animalier.png" },
    { id: "5", name: "Corporate",  bg: "/images/hero/hero-cover-corporate.png" },
  ]
    const activeBg = caroussel.find(c => c.id === activeCategory)?.bg;
    return (
        <>x
        <div data-route={pathname} className={`${style.hero} d-flex flex-column`} style={pathname === "/" ? { "--hero-bg": `url(${activeBg})` } as React.CSSProperties : undefined}>
            <div className="container-fluid py-4">
                <Navbar />
            </div>
            <div className="container-fluid flex-grow-1 d-flex align-items-center">
                <div className="row w-100">
                    <div className="col-lg-6 ps-lg-5">
                        <h1>{title}</h1>

                        <p>{subtitle}</p>

              {pathname === "/" ? (
                <div className="d-flex gap-3 mt-5">
                  <ButtonPrimary
                    text="DÉCOUVRIR MON TRAVAIL"
                    styleName="primaryOrange"
                    href="/galerie"
                  />
                  <ButtonSecondary
                    text="CONTACT"
                    styleName="secondaryBlack"
                    href="/contact"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            {pathname === "/" ?
                <div className="container-fluid pb-4">
                    <div className="d-none d-lg-flex justify-content-center gap-5">
                    {caroussel.map((button) =>
                        <div
                        key={button.id}
                        onClick={() => setActiveCategory(button.id)}
                        className={`d-flex flex-column align-items-center ${style.caroussel}`}
                        >
                        <span className={`${style.carousselButton} ${activeCategory === button.id ? style.carousselButtonActive : ""}`}>
                            {""}
                        </span>
                        {button.name}
                        </div>
                    )}
                    </div>
                </div>
            : ""}
        </div>
        </>
    )
}
