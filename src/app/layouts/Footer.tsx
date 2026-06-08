import Image from "next/image";
import style from "./Footer.module.css";

export default function Footer() {
  const socials = [
    {
      id: 0,
      name: "Instagram",
      picto: "/icons/instagram.svg",
      href: "/icons/instagram.svg",
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
      href: "/icons/facebook.svg",
    },
  ];

  const nav = [
    { id: 0, name: "Accueil", href: "/" },
    { id: 1, name: "A propos", href: "/Apropos" },
    { id: 2, name: "Préstation", href: "/Prestation" },
    { id: 3, name: "Galerie", href: "/Galerie" },
    { id: 4, name: "Contact", href: "/Contact" },
    { id: 5, name: "Blog", href: "/Blog" },
    { id: 6, name: "FAQ", href: "/FAQ" },
  ];

  const theme = [
    { id: 0, name: "Mariage", href: "/Mariage" },
    { id: 1, name: "Maternité", href: "/Maternite" },
    { id: 2, name: "Portraits", href: "/Portraits" },
    { id: 3, name: "Animalier", href: "/Animalier" },
    { id: 4, name: "Corporate", href: "/Corporate" },
  ];
  const info = [
    { id: 0, name: "FAQ", href: "/Mariage" },
    { id: 1, name: "Tarifs", href: "/Maternite" },
    { id: 2, name: "Mentions Légales", href: "/Portraits" },
    { id: 3, name: "Politique de confidentialité", href: "/Animalier" },
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
            <Image
              src="/icons/logo.svg"
              width={169}
              height={50}
              alt="Logo LAPhotographie33"
              loading="lazy"
            />

            <p className="my-4 pe-4">
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
                  <small>{list.name}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
