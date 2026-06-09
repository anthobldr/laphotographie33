import Articles from "../components/blog/Articles"
import Hero from "../layouts/Hero"
import heroStyle from "@/app/layouts/Hero.module.css"
export default function Blog(){
    return (
        <>
        <Hero
        title={
            <>
            LE{" "}
            <span className={heroStyle.heroEnLight}>Blog</span>
            </>
        }
        subtitle={
            <>
            Découvrez mes inspirations et les coulisses de mon travail de photographe professionnel.
            </>
        }
        />
        <Articles />
        </>
    )
}