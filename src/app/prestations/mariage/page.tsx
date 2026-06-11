import Hero from "@/app/layouts/Hero"
import Assurance from "@/app/layouts/Assurance"
import style from "@/app/layouts/Hero.module.css"
import AssuranceCard from "@/app/layouts/AssuranceCard"
import PrestationsBento from "@/app/components/prestations/PrestationsBento"
import PrestationsTarifs from "@/app/components/prestations/PrestationsTarifs"
import Avis from "@/app/layouts/Avis"
export default function Mariage(){
    const cards = [
        {icon: "/icons/camera.svg", title: "Reportage complet", desc: "Des préparatifs à la soirée, chaque instant est capturé avec naturel et élégance."},
        {icon: "/icons/heart.svg", title: "Émotions", desc: "Des images spontanées et sincères qui racontent votre histoire avec authenticité."},
        {icon: "/icons/calendar.svg", title: "Accompagnement", desc: "Un accompagnement personnalisé avant, pendant et après votre mariage."},
        {icon: "/icons/picture.svg", title: "Qualité premium", desc: "Des photographies soigneusement retouchées pour un rendu intemporel et raffiné."},
    ]
    const formule = [
        {
            price: "1 600€",
            details: [
            "✔ 200 photos",
            "✔ 4h de présence",
            "✔ Accompagnement/conseils",
            "✔ Retouches",
            "✔ Cérémonie religieuse/laïque ou civile",
            "✔ Vin d'honneur",
            "✔ Photos de groupe"
            ]
        },
        {
            price: "1 900€",
            details: [
            "✔ 300 photos",
            "✔ 7h de présence",
            "✔ Accompagnement/conseils",
            "✔ Retouches",
            "✔ Cérémonie religieuse/laïque ou civile",
            "✔ Vin d'honneur",
            "✔ Photos de groupe",
            "✔ Photos de couple"
            ]
        },
        {
            price: "2 900€",
            details: [
            "✔ Aucune limite de photos",
            "✔ 12h de présence",
            "✔ Accompagnement/conseils",
            "✔ Retouches",
            "✔ Préparatifs",
            "✔ Cérémonie religieuse/laïque ou civile",
            "✔ Vin d'honneur",
            "✔ Photos de groupe",
            "✔ Photos de couple",
            "✔ Ouverture de bal"
            ]
        }
    ];
    return (
        <>
        <Hero
            title={
                <>
                VOS{" "}
                <span className={style.heroEnLight}>Moments</span>
                <br />
                LES PLUS{" "}
                <span className={style.heroEnLight}>Précieux</span>
                </>
            }
            subtitle={
                <>
                Laissez-vous surprendre par votre propre beauté à travers
                un regard bienveillant, à la frontière entre authenticité
                et poésie lumineuse.
                </>
        }
        />
        <Assurance title="MARIAGE" subtitle="Votre mariage mérite un écrin à la hauteur de vos émotions. Spécialiste du reportage de mariage haut de gamme, je vous accompagne de la ferveur des préparatifs jusqu'à la magie de la première danse. Mon œil se fait discret pour capturer les éclats de rire complices, les larmes volées et l'intensité des regards. Sublimées par des ambiances chaleureuses et dorées, vos photos traverseront le temps avec élégance." />
        <AssuranceCard cardsList={cards}/>
        <PrestationsBento />
        <PrestationsTarifs Prestations={formule}/>
        <Avis />
        </>
    )
}