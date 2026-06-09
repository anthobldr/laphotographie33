import Image from "next/image"
import style from "./css/Accueil.module.css"

const partenaires = [
  { src: "/images/partenaire/only_you.webp",     alt: "Logo Only You",     width: 150, height: 50 },
  { src: "/images/partenaire/talence.webp",       alt: "Logo Talence",       width: 150, height: 50 },
  { src: "/images/partenaire/haute_gironde.webp", alt: "Logo Haute-Gironde", width: 150, height: 50 },
  { src: "/images/partenaire/sud_ouest.webp",     alt: "Logo Sud Ouest",     width: 100, height: 50 },
  { src: "/images/partenaire/imswell.webp",       alt: "Logo Imswell",       width:  65, height: 50 },
]

export default function Partenaire() {
  return (
    <>
      <div id={style.partenaire} className="container-fluid">
        <div className="row g-0">

          <div className="col-3 border-end d-flex align-items-center justify-content-center p-3">
            RÉFÉRENCE
          </div>

          <div className="col-9 p-0">

            <div className="row g-0 border-bottom">
              <div className="col-4 border-end d-flex align-items-center justify-content-center p-3">
                <Image src={partenaires[0].src} width={partenaires[0].width} height={partenaires[0].height} alt={partenaires[0].alt} loading="lazy" />
              </div>
              <div className="col-4 border-end d-flex align-items-center justify-content-center p-3">
                <Image src={partenaires[1].src} width={partenaires[1].width} height={partenaires[1].height} alt={partenaires[1].alt} loading="lazy" />
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center p-3">
                <Image src={partenaires[2].src} width={partenaires[2].width} height={partenaires[2].height} alt={partenaires[2].alt} loading="lazy" />
              </div>
            </div>

            <div className="row g-0">
              <div className="col-4 border-end d-flex align-items-center justify-content-center p-3">
                <Image src={partenaires[3].src} width={partenaires[3].width} height={partenaires[3].height} alt={partenaires[3].alt} loading="lazy" />
              </div>
              <div className="col-4 border-end d-flex align-items-center justify-content-center p-3">
                <Image src={partenaires[4].src} width={partenaires[4].width} height={partenaires[4].height} alt={partenaires[4].alt} loading="lazy" />
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center p-3">
                C.O.M. Prod.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}