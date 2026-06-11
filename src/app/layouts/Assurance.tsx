export default function Assurance({title, subtitle}:{title:string, subtitle:string}){
    return(
        <section className="container py-5">
            <h2 className="text-white text-center pb-3">{title}</h2>
            <p className=" text-white fs-6">{subtitle}</p>
        </section>
    )
}