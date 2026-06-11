import ButtonPrimary from "../ButtonPrimary";
import style from "./css/Prestations.module.css";

type Prestation = {
  name?: string;
  price: string;
  details: string[];
};

export default function PrestationsTarifs({
  Prestations,
}: {
  Prestations: Prestation[];
}) {
  const formulesNames = ["Essentielle", "Sérénité", "Complète"];

  return (
    <section className="container-fluid pb-5">
      <h2 className="text-center text-white py-5">
        Des prestations adaptées à chaque histoire
      </h2>
      <div className="row d-none d-lg-flex justify-content-lg-center gap-5 align-items-stretch">
        {Prestations.map((prestation, i) => (
          <div
            key={i}
            className="col-lg-3 d-flex flex-column border rounded text-center py-4"
          >
            <small className="text-center text-white">Formule</small>
            <h3 className="text-white text-center pb-3">
              {prestation.name ?? formulesNames[i] ?? `Formule ${i + 1}`}
            </h3>
            <div className="d-flex flex-column">
              <small className="text-white">À partir de</small>
              <span className={`fs-2 ${style.prestationsPrice}`}>
                <b>{prestation.price}</b>
              </span>
            </div>
            <hr className="mx-5 mb-4" />
            <div className="d-flex justify-content-center" style={{ flex: 1 }}>
              <ul className="list-unstyled text-start">
                {prestation.details.map((detail, i) => (
                  <li key={i} className="text-white">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-3">
              <ButtonPrimary
                text="RESERVER CETTE FORMULE"
                styleName="primaryOrange"
                href=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
