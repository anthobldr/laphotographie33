import Image from "next/image"
import ButtonPrimary from "../ButtonPrimary"
export default function GalerieBento(){
    const categorie = [
        {title: "MARIAGE"},
        {title: "PORTAITS"},
        {title: "MATERNITÉ"},
        {title: "ANIMALIER"},
        {title: "CORPORATE"},
    ]
    return (
        <section className="container-fluid bg-body py-5">
            <h2 className="ps-5">Galerie Photo</h2>
            <div className="d-flex py-3 ps-5">
                {categorie.map((categorie) =>
                    <span key={categorie.title} className="text-uppercase pe-3">{categorie.title}</span>
                )}
            </div>
            <div className="px-5">
                <div className="row g-1 mb-1" style={{ height: 280 }}>
                    <div className="col-4 h-100 overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 01" fill />
                    </div>
                    <div className="col-3 h-100 overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 02" fill />
                    </div>
                    <div className="col-3 h-100 d-flex flex-column gap-1">
                        <div className="flex-fill overflow-hidden position-relative">
                            <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 03" fill />
                        </div>
                        <div className="flex-fill overflow-hidden position-relative">
                            <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 04" fill />
                        </div>
                    </div>
                    <div className="col-2 h-100 d-flex flex-column gap-1">
                        <div className="flex-fill overflow-hidden position-relative">
                            <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 03" fill />
                        </div>
                    </div>
                </div>
                <div className="row g-1" style={{ height: 380 }}>

                    <div className="col-6 h-100 overflow-hidden position-relative">
                    <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 05" fill />
                    </div>

                    <div className="col-3 h-100 overflow-hidden position-relative">
                    <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 06" fill />
                    </div>

                    <div className="col-3 h-100 d-flex flex-column gap-1">
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 07" fill />
                    </div>
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Image 08" fill />
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center mt-5">
            <ButtonPrimary text="VOIR PLUS DE PHOTOS" styleName="primaryOrange" />
        </div>
    </section>
    )
}