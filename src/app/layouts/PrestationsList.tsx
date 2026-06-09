import Image from "next/image"
import ButtonSecondary from "../components/ButtonSecondary"
import style from "./Layouts.module.css"

const prestations = [
  { title: "MARIAGE",   price: "500€", src: "/images/bento/photo1.jpg",           width: 1000, height: 400, full: true  },
  { title: "MATERNITÉ", price: "500€", src: "/images/prestations/maternite.png",   width: 650,  height: 300, full: false },
  { title: "PORTRAITS", price: "500€", src: "/images/bento/photo15.png",           width: 650,  height: 300, full: false },
  { title: "ANIMALIER", price: "500€", src: "/images/prestations/animalier.jpg",   width: 650,  height: 300, full: false },
  { title: "CORPORATE", price: "500€", src: "/images/prestations/corporate.jpg",   width: 650,  height: 300, full: false },
]

function PrestationCard({ title, price, src, width, height, full }:{title:string, price:string, src:string, width:number, height:number, full:boolean}) {
  return (
    <div className={`col-12 ${full ? "" : "col-lg-6"}`}>
      <Image src={src} className="w-100 object-fit-cover" width={width} height={height} alt={title} />
      <div className={`py-2 d-flex justify-content-between text-white ${style.prestationsBanner}`}>
        <span className={`ps-4 ${style.prestationsTitle}`}>{title}</span>
        <span className="pe-4">À partir de <b>{price}</b></span>
      </div>
    </div>
  )
}

export default function PrestationsList() {
  return (
    <div className="row g-4 justify-content-between">
      {prestations.map((p) => (
        <PrestationCard key={p.title} {...p} />
      ))}
    </div>
  )
}