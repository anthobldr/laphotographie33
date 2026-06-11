"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ButtonSecondary from "../components/ButtonSecondary";
import style from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();
  const withePages = ["/propos", "/blog", "/faq"];
  const isWhiteNavbar = withePages.includes(pathname);
  const nav = [
    {
      id: "1",
      name: "Accueil",
      href: "/",
    },
    {
      id: "2",
      name: "À propos",
      href: "/propos",
    },
    {
      id: "3",
      name: "Prestations",
      href: "/prestations",
    },
    {
      id: "4",
      name: "Galerie",
      href: "/galerie",
    },
    {
      id: "5",
      name: "Blog",
      href: "/blog",
    },
    {
      id: "6",
      name: "FAQ",
      href: "/faq",
    },
  ];
  return (
    <nav data-route={pathname} className={`navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {isWhiteNavbar ? (
            <Image
              src="/images/logo.webp"
              width={486 / 3}
              height={132 / 3}
              alt="Logo LAPhotographie33"
              loading="lazy"
              style={{ filter: "invert(1)" }}
            />
          ) : (
            <Image
              src="/images/logo.webp"
              width={486 / 3}
              height={132 / 3}
              alt="Logo LAPhotographie33"
              loading="lazy"
            />
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarScroll"
        >
          <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
            {nav.map((list) => (
              <li key={list.id} className={`nav-item ${style.navItem}`}>
                <Link
                  className={`nav-link active ${isWhiteNavbar ? "text-white" : ""}`}
                  href={list.href}
                >
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-none d-lg-block">
          {isWhiteNavbar ? (
            <ButtonSecondary
              text="CONTACTEZ-MOI"
              styleName="secondaryWhite"
              href="/contact"
            />
          ) : (
            <ButtonSecondary
              text="CONTACTEZ-MOI"
              styleName="secondaryBlack"
              href="/contact"
            />
          )}
        </div>
      </div>
    </nav>
  );
}
