import style from "./Faq.module.css";

export default function ButtonFaq() {
  return (
    <button className={`${style.btnFaq}`}>
      <img src="./icons/arrowDown.svg" alt="Down arrow" />
    </button>
  );
}
