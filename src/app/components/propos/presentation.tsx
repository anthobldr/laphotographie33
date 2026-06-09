import Image from "next/image";

export default function Presentation() {
  return (
    <section className="m-3 p-3 m-lg-5 p-lg-5 text-white">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <div
            className="position-relative w-100"
            style={{ aspectRatio: "647/828" }}
          >
            <Image
              src="/images/propos/aurelien.png"
              alt="Photo Aurélien"
              fill
              className="object-fit-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="d-flex flex-column col-12 col-lg-6 gap-3 gap-lg-5 my-4 my-lg-0">
          <h2 className="fs-3">La <span className="Miama">Photographie</span>, comme un langage.</h2>
          <div>
            <p>
              Photographe passionné depuis plus de 15 ans, je suis autodidacte
              et toujours curieux d&#39;explorer de nouveaux univers.
            </p>
            <p>
              Je cherche sans cesse à évoluer, tout en gardant mon style et ma
              sensibilité. De la nature aux étoiles, en passant par
              l&#39;animalier, les portraits ou l&#39;événementiel, chaque image
              est pour moi une manière de raconter une histoire.
            </p>
            <p>
              Après avoir photographié durant des années les moments forts de
              mes proches : mariages, grossesses, baptêmes, j&#39;ai eu envie de
              proposer ma vision à tous ceux qui souhaitent garder une trace de
              leurs plus beaux instants.
            </p>
            <p>
              Aujourd&#39;hui, je suis là pour capturer vos souvenirs avec
              authenticité et émotion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
