import style from "./Propos.module.css";

export default function Chiffres() {
  const chiffres = [
    { id: "1", number: "500", subject: "Séances Réalisées" },
    { id: "2", number: "50.000", subject: "Photos Livrées" },
    { id: "3", number: "15", subject: "Années d'Experience" },
  ];

  return (
    <section className="p-5 text-white">
      <div>
        <h2 className="ls-2">
          Une décennie au service <br />
          des plus beaux instants.
        </h2>
      </div>

      <div className="d-flex flex-column flex-lg-row  my-5 justify-content-lg-evenly">
        {chiffres.map((list) => (
          <div
            key={list.id}
            className="col-12 col-lg-4 p-3 p-md-5 text-center border  border-white "
          >
            <h3 className={`mt-2 ls-2 ${style.numbers}`}>
              {list.number}
              <i>+</i>
            </h3>
            <span className="fs-4 ls-2 PlayfairDisplay  text-white-50 text-uppercase">
              {list.subject}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
