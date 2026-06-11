import Image from "next/image";
import style from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      id: 0,
      name: "Instagram",
      picto: "/icons/instagram.svg",
      href: "https://www.instagram.com/aurelien_lambert",
    },
    {
      id: 1,
      name: "LinkedIn",
      picto: "/icons/linkedin.svg",
      href: "/icons/linkedin.svg",
    },
    {
      id: 2,
      name: "Facebook",
      picto: "/icons/facebook.svg",
      href: "https://www.facebook.com/LAphotographie33?mibextid=wwXIfr&rdid=j4nUvW3npZkVNYF1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16X9MSDiLo%2F%3Fmibextid%3DwwXIfr#",
    },
  ];

  const nav = [
    { id: 0, name: "Accueil", href: "/" },
    { id: 1, name: "À propos", href: "/propos" },
    { id: 2, name: "Prestations", href: "/prestations" },
    { id: 3, name: "Galerie", href: "/galerie" },
    { id: 4, name: "Contact", href: "/contact" },
    { id: 5, name: "Blog", href: "/blog" },
  ];

  const theme = [
    { id: 0, name: "Mariage", href: "/prestations/mariage" },
    { id: 1, name: "Maternité", href: "/prestations/maternite" },
    { id: 2, name: "Portraits", href: "/prestations/portraits" },
    { id: 3, name: "Animalier", href: "/prestations/animalier" },
    { id: 4, name: "Corporate", href: "/prestations/corporate" },
  ];
  const info = [
    { id: 0, name: "FAQ", href: "/faq" },
    { id: 2, name: "Mentions Légales", href: "/mentions-legales" },
    {
      id: 3,
      name: "Politique de confidentialité",
      href: "/politique-de-confidentialite",
    },
  ];
  const contact = [
    { id: 0, name: "06 51 51 27 71", picto: "/icons/phone.svg" },
    { id: 1, name: "laphotographie33@gmail.com", picto: "/icons/email.svg" },
    { id: 2, name: "Saint-André-De-Cubzac, France", picto: "/icons/pin.svg" },
  ];

  return (
    <footer className="bg-black text-white px-5 py-5 border-top border-white">
      <div className="container-fluid">
        <div className="row gy-5">
          <div className="col-12 col-lg-4 align-items-center align-items-lg-start  text-center text-lg-start">
            <Link href={"/"}>
              <Image
                src="/images/logo.webp"
                width={486 / 3}
                height={132 / 3}
                alt="Logo LAPhotographie33"
                loading="lazy"
                style={{ filter: "invert(1)" }}
              />
            </Link>

            <p className="my-4 pe-4 fs-6">
              Photographe professionnel à Bordeaux, je capture les émotions et
              les instants qui rendent chaque histoire unique. Mariages,
              baptêmes, événements sportifs, séances canines ou équines : des
              images authentiques pour des souvenirs inoubliables.
            </p>

            <ul className="list-unstyled d-flex gap-3 mb-0 justify-content-center justify-content-lg-start">
              {socials.map((list) => (
                <li key={list.id}>
                  <a href={list.href}>
                    <Image
                      src={list.picto}
                      width={28}
                      height={28}
                      alt={list.name}
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h4 className={style.footerTitle}>NAVIGATION</h4>
            <ul className="list-unstyled mt-4">
              {nav.map((list) => (
                <li key={list.id} className="mb-2">
                  <a
                    href={list.href}
                    className={`text-decoration-none text-reset ${style.linkHoverAnimation}`}
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h4 className={style.footerTitle}>THÉMATIQUES</h4>
            <ul className="list-unstyled mt-4">
              {theme.map((list) => (
                <li key={list.id} className="mb-2">
                  <a
                    href={list.href}
                    className={`text-decoration-none text-reset ${style.linkHoverAnimation}`}
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h4 className={style.footerTitle}>INFOS</h4>
            <ul className="list-unstyled mt-4">
              {info.map((list) => (
                <li key={list.id} className="mb-2 ">
                  <a
                    href={list.href}
                    className={`text-decoration-none text-reset ${style.linkHoverAnimation}`}
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h4 className={style.footerTitle}>CONTACT</h4>
            <ul className="list-unstyled mt-4">
              {contact.map((list) => (
                <li
                  key={list.id}
                  className="mb-3 d-flex align-items-start gap-2"
                >
                  <Image
                    src={list.picto}
                    width={24}
                    height={24}
                    alt={list.name}
                    loading="lazy"
                  />
                  <small className="text-break">{list.name}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
