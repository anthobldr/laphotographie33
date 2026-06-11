import style from "./Contact.module.css";

export default function ChiffresContact() {
  const Chiffres = [
    { id: "1", chiffres: "15+", desc: "Ans à capturer vos émotions" },
    { id: "2", chiffres: "500+", desc: "Séances réalisées" },
    { id: "3", chiffres: "50.000+", desc: "Photos livrées" },
    { id: "4", chiffres: "100%", desc: "Passion" },
  ];

  return (
    <section className=" d-flex flex-row flex-wrap text-center bg-white ">
      {Chiffres.map((list) => (
        <div
          key={list.id}
          className="col-6 border border-1 border-dark border-opacity-25 "
        >
          <p className={`PlayfairDisplay ${style.fontSizeBannerChiffre} m-0`}>
            <b>{list.chiffres}</b>
            <br />
            <span className={`${style.fontSizeBanner} `}>{list.desc}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
