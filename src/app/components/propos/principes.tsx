import style from "./Propos.module.css";

export default function Principes() {
  return (
    <section className="p-5 bg-white">
      <div>
        <h2 className="ls-2">
          Trois principes, <br />
          <i>aucune concession</i>
        </h2>
      </div>
      <div className="d-flex flex-column flex-lg-row border border-1 border-black my-5 justify-content-lg-evenly">
        <div className={`col-12 col-lg-4 p-3 p-md-5 ${style.borderMobile}`}>
          <span className="fs-1 PlayfairDisplay text-muted">01</span>
          <h3 className="mt-2 fs-1">Écoute</h3>
          <p className="fs-6 ls-2">
            Avant de photographier, comprendre. Votre histoire, votre rythme, ce
            que vous voulez préserver.
          </p>
        </div>
        <div className={`col-12 col-lg-4 p-3 p-md-5 ${style.borderMobile}`}>
          <span className="fs-1 PlayfairDisplay text-muted">02</span>
          <h3 className="mt-2 fs-1">Discrétion</h3>
          <p className="fs-6 ls-2">
            Je m&#39;efface. La meilleure photo est celle où l&#39;on oublie que
            le photographe est là.
          </p>
        </div>
        <div className={`col-12 col-lg-4 p-3 p-md-5 ${style.borderMobile}`}>
          <span className="fs-1 PlayfairDisplay text-muted">03</span>
          <h3 className="mt-2 fs-1">Exigence</h3>
          <p className="fs-6 ls-2">
            Sélection rigoureuse, post-production sobre, livraison soignée. Le
            détail jusqu&#39;au bout.
          </p>
        </div>
      </div>
    </section>
  );
}
