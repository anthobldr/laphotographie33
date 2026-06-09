import style from "./Faq.module.css";

function ExperienceCard({
  id,
  title,
  subtitle,
  desc,
}: {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <div className="d-flex flex-row flex-lg-column col-12 col-lg-3">
      <div
        className={`col-2 col-lg-12  d-flex justify-content-center justify-content-lg-start ${style.ligne}`}
      >
        <span
          className={`fs-3 fw-bold rounded-circle ${style.roundedCustom} ${style.backgroundExp}`}
        >
          {id}
        </span>
      </div>
      <div className="col-10 col-lg-12">
        <h3 className="mt-lg-3">{title}</h3>

        <small>
          <i>{subtitle}</i>
        </small>
        <br />
        <br />
        <p className="fs-6 ls-2 pe-lg-5">{desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      id: "1",
      title: "L'Échange & La Préparation",
      subtitle: "Tout commence par une discussion.",
      desc: "La séance se déroule souvent en fin de journée pour bénéficier de la 'Golden Hour' (l'heure dorée). Pas de poses complexes : nous marchons, nous discutons, vous riez. C'est dans cette spontanéité que naissent les plus beaux clichés.",
    },
    {
      id: "2",
      title: "Le Shooting",
      subtitle: "Pas de stress, nous prenons le temps. ",
      desc: "Autour d’un café ou au téléphone, pour comprendre vos attentes, vos craintes et vos envies. Nous choisissons ensemble le lieu idéal et je vous guide sur le choix des tenues.",
    },
    {
      id: "3",
      title: "Le Post-traitement",
      subtitle: "C'est en coulisses que la magie opère.",
      desc: "Je sélectionne et retravaille minutieusement chaque image pour lui donner cette signature chaleureuse, dorée et authentique qui caractérise mon travail.",
    },
    {
      id: "4",
      title: "La Découverte",
      subtitle: "Enfin, vos souvenirs prennent vie.",
      desc: "Vous recevez vos clichés sur une galerie privée en ligne en haute définition, prêts à être partagés, imprimés et aimés.",
    },
  ];

  return (
    <section className=" mx-lg-5 p-3 p-lg-5 text-white">
      <h2 className="text-center mb-5">
        Comment se déroule votre expérience avec Aurélien LAMBERT ?
      </h2>
      <div className="d-flex flex-column flex-lg-row py-5 gap-5 gap-lg-0">
        {experiences.map((list) => (
          <ExperienceCard key={list.id} {...list} />
        ))}
      </div>
    </section>
  );
}
