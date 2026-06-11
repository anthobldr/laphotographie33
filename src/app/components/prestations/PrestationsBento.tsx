import Image from "next/image"
import ButtonPrimary from "../ButtonPrimary"

export default function PrestationsBento() {
  return (
    <section className="container-fluid bg-body py-5">
        <h2 className="text-center pb-5">Quelques moments capturés</h2>
        <div className="px-5">
            <div className="row g-1 mb-1" style={{ height: 280 }}>
                <div className="col-6 h-100 overflow-hidden position-relative">
                    <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Couple dans la brume" fill />
                </div>
                <div className="col-4 h-100 overflow-hidden position-relative">
                    <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Mariée et demoiselles d'honneur" fill />
                </div>
                <div className="col-2 h-100 d-flex flex-column gap-1">
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Détail alliance" fill />
                    </div>
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Couple au coucher de soleil" fill />
                    </div>
                </div>
            </div>
            <div className="row g-1" style={{ height: 380 }}>
                <div className="col-1 h-100 d-flex flex-column gap-1">
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Préparatifs costume" fill />
                    </div>
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Danse lumières" fill />
                    </div>
                </div>
                <div className="col-3 h-100 overflow-hidden position-relative">
                    <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Alliances noir et blanc" fill />
                </div>
                <div className="col-5 h-100 overflow-hidden position-relative">
                    <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Couple devant le château" fill />
                </div>
                <div className="col-3 h-100 d-flex flex-column gap-1">
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Baiser lune" fill />
                    </div>
                    <div className="flex-fill overflow-hidden position-relative">
                        <Image className="object-fit-cover" src="/images/bento/Photo2.jpg" alt="Couple dans l'escalier" fill />
                    </div>
                </div>
            </div>
            <div className="text-center pt-5">
                <ButtonPrimary text="EN SAVOIR PLUS" styleName="primaryOrange" />
            </div>
        </div>
    </section>
  )
}