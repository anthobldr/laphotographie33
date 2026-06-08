import ButtonSecondary from "../ButtonSecondary";

const images = [
  { src: "/images/bento/photo8.jpg" },
  { src: "/images/bento/photo10.png" },
  { src: "/images/bento/photo11.png" },
  { src: "/images/bento/photo12.png" },
  { src: "/images/bento/photos13.png" },
  { src: "/images/bento/photo14.png" },
];

export default function Bento() {
  return (
    <section className="container-fluid py-5">
        <h2 className="text-center text-white pb-5">Des instants vrais et spontanés</h2>
        <div className="container">
            <div className="row g-2 align-items-stretch">
                <div className="col-md-3 d-none d-lg-block">
                    <img src={images[0].src} className="w-100 h-100 object-fit-cover" alt="" />
                </div>
                <div className="col-md-3 d-none d-lg-flex flex-column gap-2">
                    <img src={images[1].src} className="w-100 flex-fill object-fit-cover" alt="" />
                    <img src={images[2].src} className="w-100 flex-fill object-fit-cover" alt="" />
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column gap-2">
                    <img src={images[3].src} className="w-100 flex-fill object-fit-cover" alt="" />
                    <div className="d-flex flex-wrap flex-lg-nowrap gap-2">
                        <img src={images[4].src} className="flex-fill object-fit-cover" alt="" />
                        <img src={images[5].src} className="flex-fill object-fit-cover" alt="" />
                    </div>
                </div>
            </div>
            <div className="my-5">
                <ButtonSecondary text="Découvrir mon travail" />
            </div>
        </div>
    </section>
  );
}