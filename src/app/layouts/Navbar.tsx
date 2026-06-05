import ButtonSecondary from "../components/ButtonSecondary"
import style from "./Navbar.module.css"
export default function Navbar(){
    const nav = [
        {
            id: "1",
            name: "Accueil", 
            href: "/"
        },
        {
            id: "2",
            name: "À propos", 
            href: "/propos"
        },
        {
            id: "3",
            name: "Prestations", 
            href: "/prestations"
        },
        {
            id: "4",
            name: "Galerie", 
            href: "/galerie"
        },
        {
            id: "5",
            name: "Blog", 
            href: "/blog"
        },
        {
            id: "6",
            name: "FAQ", 
            href: "/faq"
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LAPHOTOGRAPHIE33</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
                    <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                        {nav.map((list) =>
                        <li key={list.id} className={`nav-item ${style.navItem}`}>
                            <a className="nav-link active" href={list.href}>{list.name}</a>
                        </li>
                        )}
                    </ul>
                </div>
                <div className="d-none d-lg-block">
                    <ButtonSecondary text="CONTACTEZ-MOI" styleName="secondaryBlack"/>
                </div>
            </div>
        </nav>
    )
}