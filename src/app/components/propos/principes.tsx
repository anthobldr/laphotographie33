import style from "./Propos.module.css";

export default function Principes() {
  const principes = [
    {
      id: "1",
      number: "01",
      title: "Écoute",
      desc: "Avant de photographier, comprendre. Votre histoire, votre rythme, ce que vous voulez préserver.",
    },
    {
      id: "2",
      number: "02",
      title: "Discrétion",
      desc: "Je m'efface. La meilleure photo est celle où l'on oublie que le photographe est là.",
    },
    {
      id: "3",
      number: "03",
      title: "Exigence",
      desc: "Sélection rigoureuse, post-production sobre, livraison soignée. Le détail jusqu'au bout.",
    },
  ];

  return (
    <section className="p-5 bg-white">
      <div>
        <h2 className="ls-2">
          Trois principes, <br />
          <i>aucune concession</i>
        </h2>
      </div>
      <div className="d-flex flex-column flex-lg-row border border-1 border-black my-5 justify-content-lg-evenly">
        {principes.map((list) => (
          <div
            key={list.id}
            className={`col-12 col-lg-4 p-3 p-md-5 ${style.borderMobile}`}
          >
            <span className="fs-1 PlayfairDisplay text-muted">
              {list.number}
            </span>
            <h3 className="mt-2 fs-1">{list.title}</h3>
            <p className="fs-6 ls-2">{list.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
