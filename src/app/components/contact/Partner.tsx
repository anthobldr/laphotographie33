export default function Partner() {
  const Partner = [
    { id: "1", src: "./images/partenaire/onlyyou.webp", alt: "Partner 1" },
    {
      id: "2",
      src: "./images/partenaire/gironde.webp",
      alt: "Partner 1",
    },
    { id: "3", src: "./images/partenaire/sudouest.webp", alt: "Partner 1" },
    { id: "4", src: "./images/partenaire/lignedivine.webp", alt: "Partner 1" },
    { id: "5", src: "./images/partenaire/talence.webp", alt: "Partner 1" },
    { id: "6", src: "./images/partenaire/pessac.webp", alt: "Partner 1" },
    { id: "7", src: "./images/partenaire/33basket.webp", alt: "Partner 1" },
    { id: "8", src: "./images/partenaire/imswell.webp", alt: "Partner 1" },
  ];

  return (
    <section className="py-5 my-5 gap-5 bg-white">
      <h2 className="text-center mb-5 pb-5">À leurs côtés, appareil en main</h2>
      <div className="d-flex flex-wrap justify-content-center align-items-center px-5 mx-5 text-center gap-5">
        {Partner.map((list) => (
          <div key={list.id} className="col-3">
            <img
              className="img-fluid opacity-25"
              src={list.src}
              alt={list.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
