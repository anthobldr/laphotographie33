export default function Propos() {
    return (
        <section className="container py-5">
            <div className="row align-items-center g-4">
                <div className="col-12 col-lg-6 text-center mb-3 mb-lg-0">
                    <img src="/images/propos/aurelien.png" alt="Aurélien, photographe" className="img-fluid" loading="lazy"/>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                    <small className="text-uppercase text-white mb-3">
                        Derrière l'objectif
                    </small>
                    <h2 className="text-white fw-bold">
                        L'art de saisir <br />
                        <i>l'instant juste</i>
                    </h2>
                    <p className="py-4 py-md-5 text-white fs-6">
                        Photographe passionné installé en Gironde, je consacre mon travail
                        à révéler la sincérité d'un regard, la douceur d'un geste,
                        l'intensité d'un instant. Chaque séance est une rencontre, une
                        histoire que nous écrivons ensemble.
                    </p>
                </div>
            </div>
        </section>
    );
}