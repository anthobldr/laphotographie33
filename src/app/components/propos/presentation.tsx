import Image from "next/image";
export default function Presentation() {
  return (
    <section className=" d-flex m-5 p-5 text-white">
      <div className="col-6">
        <Image
          src="/images/propos/aurelien.png"
          width={687}
          height={828}
          alt="Photo Aurelien"
          loading="lazy"
        />
      </div>
      <div className="col-6 align-content-center">
        <h2>
          La <span>Photographie</span>, comme un langage.
        </h2>
        <p>
          Photographe passionné depuis plus de 15 ans, je suis autodidacte et
          toujours curieux d’explorer de nouveaux univers.
        </p>
        <p>
          Je cherche sans cesse à évoluer, tout en gardant mon style et ma
          sensibilité. De la nature aux étoiles, en passant par l’animalier, les
          portraits ou l’événementiel, chaque image est pour moi une manière de
          raconter une histoire.​
        </p>
        <p>
          Après avoir photographié durant des années les moments forts de mes
          proches: mariages, grossesses, baptêmes, j’ai eu envie de proposer ma
          vision à tous ceux qui souhaitent garder une trace de leurs plus beaux
          instants.
        </p>
        <p>
          Aujourd’hui, je suis là pour capturer vos souvenirs avec authenticité
          et émotion.
        </p>
      </div>
    </section>
  );
}
