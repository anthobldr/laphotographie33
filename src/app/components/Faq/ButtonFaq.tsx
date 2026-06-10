import style from "./Faq.module.css";

export default function ButtonFaq() {
  return (
    <div className={`${style.btnFaq}`}>
      <img
        src="./icons/arrowDown.svg"
        width={30}
        height={30}
        alt="Down arrow"
      />
    </div>
  );
}
