import Image from "next/image";
import style from "./Layouts.module.css";

const prestations = [
  {
    title: "MARIAGE",
    price: "500€",
    src: "/images/bento/photo1.jpg",
    width: 1000,
    height: 400,
    full: true,
    href: "/prestations//mariage",
  },
  {
    title: "MATERNITÉ",
    price: "500€",
    src: "/images/prestations/maternite.png",
    width: 650,
    height: 300,
    full: false,
    href: "/prestations//maternite",
  },
  {
    title: "PORTRAITS",
    price: "500€",
    src: "/images/prestations/photos13.png",
    width: 650,
    height: 300,
    full: false,
    href: "/prestations/portraits",
  },
  {
    title: "ANIMALIER",
    price: "500€",
    src: "/images/prestations/animalier.jpg",
    width: 650,
    height: 300,
    full: false,
    href: "/prestations//animalier",
  },
  {
    title: "CORPORATE",
    price: "500€",
    src: "/images/prestations/corporate.jpg",
    width: 650,
    height: 300,
    full: false,
    href: "/prestations//corporate",
  },
];

function PrestationCard({
  title,
  price,
  src,
  width,
  height,
  full,
  href,
}: {
  title: string;
  price: string;
  src: string;
  width: number;
  height: number;
  full: boolean;
  href: string;
}) {
  return (
    <a
      href={href}
      className={`col-12 ${full ? "" : "col-lg-6"} text-decoration-none`}
    >
      <Image
        src={src}
        className="w-100 object-fit-cover"
        width={width}
        height={height}
        alt={title}
      />
      <div
        className={`py-2 d-flex justify-content-between text-white bg-black`}
      >
        <span className={`ps-4 ${style.prestationsTitle}`}>{title}</span>
        <span className="pe-4">
          À partir de <b>{price}</b>
        </span>
      </div>
    </a>
  );
}

export default function PrestationsList() {
  return (
    <div className="row g-4 justify-content-between">
      {prestations.map((p) => (
        <PrestationCard key={p.title} {...p} />
      ))}
    </div>
  );
}
