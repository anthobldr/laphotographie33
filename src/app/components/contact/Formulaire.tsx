import ButtonPrimary from "../ButtonPrimary";
import style from "./Contact.module.css";

export default function Formulaire() {
  const i = 1; // ici pour changer le 1/3 des étapes du formulaire

  return (
    <section className="d-flex flex-column gap-5 text-white my-5 py-5">
      <div className="d-flex flex-column align-items-center">
        <h2>Et si nous écrivions votre histoire en images ?</h2>
        <p className="PlayfairDisplay">
          <i>Parlez-moi de votre projet, je vous réponds sous 48h.</i>
        </p>
      </div>
      <div className="d-flex text-start mx-5">
        <div className="col-6">
          <h3>Derrière chaque photo, une rencontre</h3>
        </div>
        <div className="col-6">
          <h3>
            Mariage, portrait, famille ou événement professionnel. <br />
            <span className={`${style.coloredText}`}>Racontez-moi</span> votre
            projet.
          </h3>
          <small>{`${i}/3`}</small>
          <form className="py-5" action="">
            {/* 1/3 du formulaire */}
            <div className="" id="1of3">
              <select
                className="py-3 form-select"
                aria-label="Default select example"
              >
                <option defaultValue={"Type de prestation"}>
                  Type de prestation
                </option>
                <option value="1">Mariage</option>
                <option value="2">Portraits</option>
                <option value="3">Maternité</option>
                <option value="4">Animalier</option>
                <option value="5">Corporate</option>
              </select>
              <div className="d-flex flex-row my-4">
                {" "}
                <div className="d-flex flex-row  justify-content-between w-100 ">
                  <div className="d-flex flex-row">
                    <div>
                      <label htmlFor="dateFrom">Du</label>
                      <input
                        className={`py-3 form-control ${style.formCustomL}`}
                        type="date"
                        placeholder="Date debut"
                        aria-label="dateFrom"
                      ></input>
                    </div>
                    <div>
                      <label htmlFor="dateTo">Au</label>
                      <input
                        className={`py-3 form-control ${style.formCustomR}`}
                        type="date"
                        placeholder="Date fin"
                        aria-label="dateTo"
                      ></input>
                    </div>
                  </div>
                  <div className="w-100 mx-5">
                    <label htmlFor="budget" className="form-label">
                      Budget
                    </label>
                    <div className="d-flex flex-row gap-4">
                      <input
                        type="range"
                        className="py-3 form-range w-100"
                        id="Budget"
                        min="500"
                        max="5000"
                        step="500"
                      />
                      <output
                        className="align-self-center"
                        htmlFor="budget"
                        id="rangeValue"
                        aria-hidden="true"
                      >
                        5000€
                      </output>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex row py-3">
                <ButtonPrimary
                  text="Planifions votre Séance"
                  styleName="primaryOrange"
                  href=""
                  fullWidth
                ></ButtonPrimary>
              </div>
            </div>

            {/* 2/3 du formulaire */}
            <div className={`d-flex flex-column gap-5 d-none`} id="2of3">
              <div className="d-flex flex-row ">
                <div className="col-6">
                  <input
                    className={`py-3 form-control ${style.formCustomL}`}
                    type="text"
                    placeholder="Nom"
                    aria-label="FirstName"
                  ></input>
                </div>
                <div className="col-6">
                  <input
                    className={`py-3 form-control ${style.formCustomR}`}
                    type="text"
                    placeholder="Prénom"
                    aria-label="Name"
                  ></input>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="col-6">
                  <input
                    className={`py-3 form-control ${style.formCustomL}`}
                    type="text"
                    placeholder="Email"
                    aria-label="Email"
                  ></input>
                </div>
                <div className="col-6">
                  <input
                    className={`py-3 form-control ${style.formCustomR}`}
                    type="text"
                    placeholder="Téléphone"
                    aria-label="Phone"
                  ></input>
                </div>
              </div>
              <div className="d-flex row  py-3">
                <ButtonPrimary
                  text="Encore un peu"
                  styleName="primaryOrange"
                  href=""
                  fullWidth
                ></ButtonPrimary>
              </div>
            </div>

            {/* 3/3 du formulaire */}
            <div className={`d-flex flex-column gap-5 d-none`} id="3of3">
              <select
                className="py-3 form-select"
                aria-label="Default select example"
              >
                <option selected>Comment avez-vous connu Aurélien ?</option>
                <option value="01">Via Instagram</option>
                <option value="02">Facebook</option>
                <option value="03">LinkedIn</option>
                <option value="04">Amis</option>
                <option value="05">Autre</option>
              </select>
              <textarea
                class="py-3 form-control"
                placeholder="Attentes Spécifiques"
                id="textArea"
                rows="3"
              ></textarea>
              <div className="d-flex row gap-5  py-3">
                <ButtonPrimary
                  text="C'est bon, c'est terminé"
                  styleName="primaryOrange"
                  href=""
                  fullWidth
                ></ButtonPrimary>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
