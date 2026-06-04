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
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {nav.map((list) =>
                        <li key={list.id} className="nav-item">
                            <a className="nav-link active" href={list.href}>{list.name}</a>
                        </li>
                        )}
                    </ul>
                </div>
                <ButtonSecondary text="CONTACTER-MOI" />
            </div>
        </nav>
    )
}