import style from "./Propos.module.css";

export default function Chiffres() {
  return (
    <section className="p-5 text-white">
      <div>
        <h2 className="ls-2">
          Une décennie au service <br />
          des plus beaux instants.
        </h2>
      </div>
      <div className="d-flex flex-column flex-lg-row  my-5 justify-content-lg-evenly">
        <div className="col-12 col-lg-4 p-3 p-md-5 text-center border  border-white ">
          <h3 className={`mt-2 ls-2 ${style.numbers}`}>
            500<i>+</i>
          </h3>
          <span className="fs-4 ls-2 PlayfairDisplay  text-white-50 text-uppercase">
            Séances Réalisées
          </span>
        </div>
        <div className="col-12 col-lg-4 p-3 p-md-5 text-center border  border-white">
          <h3 className={`mt-2 ls-2 ${style.numbers}`}>
            50.000<i>+</i>
          </h3>
          <span className="fs-4 ls-2 PlayfairDisplay  text-white-50 text-uppercase">
            Photos Livrées
          </span>
        </div>
        <div className="col-12 col-lg-4 p-3 p-md-5 text-center border  border-white">
          <h3 className={`mt-2 ls-2 ${style.numbers}`}>
            15<i>+</i>
          </h3>
          <span className="fs-4 ls-2 PlayfairDisplay text-white-50 text-uppercase">
            Années d&#39;expérience
          </span>
        </div>
      </div>
    </section>
  );
}
