import Image from "next/image"
import ButtonPrimary from "../ButtonPrimary"
import style from "./css/Blog.module.css"
import BlogSidebar from "./BlogSidebar"

const categorie = [
    {title: "TOUS LES ARTICLES"},
    {title: "CONSEILS PHOTO"},
    {title: "MARIAGE"},
    {title: "PORTAITS"},
    {title: "COULISSES"},
]
const articles = [
    {img: "article_1.jpg", categorie: "MARIAGE", title: "Comment préparer sa séance photo de mariage ?", desc: "Tous mes conseils pour préparer votre mariage et vivre une expérience photo seine et inoubliable.", date: "3 JUIN 2026"},
    {img: "article_2.jpg", categorie: "CONSEILS PHOTO", title: "Pourquoi choisir un photographe professionnel ?", desc: "Les garanties d’un travail de qualité et l’importance d’un regard artistique pour vos photos.", date:"3 JUIN 2026"},
    {img: "article_3.jpg", categorie: "MARIAGE", title: "Mes conseils pour des photos de mariage réussies", desc: "Lumière, timing, organisation: tous mes conseils pour des souvenirs inoubliables.", date:"3 JUIN 2026"},
]
const articlesCounts = articles.reduce((compteur, article) => {
    compteur[article.categorie] = (compteur[article.categorie] || 0) + 1
    return compteur
}, {} as Record<string, number>)

function ArticleCard({categorie, img, title, desc, date}:{categorie:string, img:string, title:string, desc:string, date:string}){
    return (
        <div className="row">
            <div className="col-12 col-lg bg-body-tertiary p-0">
                <Image src={"/images/blog/"+img} width={1000} height={350} alt="" className="w-100 object-fit-cover" />
            </div>
            <div className="col-12 col-lg-6 bg-body-tertiary d-flex flex-column justify-content-center">
                <div className="container d-flex flex-column gap-3 py-5 py-lg-0">
                    <small className={style.articleCategorie}>{categorie}</small>
                    <h3>{title}</h3>
                    <p className="fs-6">{desc}</p>
                    <div className="d-flex flex-column gap-2">
                        <small>{date}</small>
                        <ButtonPrimary text="LIRE L'ARTICLE" styleName="primaryOrange" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Articles(){
    return (
        <section className="container-fluid bg-body">
            <div className="d-flex ps-5 gap-5 py-4">
                {categorie.map((cat) => (
                    <span key={cat.title} className="PlayfairDisplay">
                        {cat.title}
                    </span>
                ))}
            </div>

            <div className="row ps-lg-5 px-4 pb-5">
                <div className="col-12 col-lg-8 d-flex flex-column gap-4">
                    {articles.map((article) => (
                        <ArticleCard key={article.title} {...article} />
                    ))}
                </div>
                <BlogSidebar articles={articles} articlesCounts={articlesCounts} />
            </div>
        </section>
    )
}