import style from "./Button.module.css";

export default function ButtonSecondary({text, styleName}: {text: string; styleName?: string;}) {
  return (
    <button
      className={`btn rounded-0 px-4 py-1 ${styleName === "secondaryBlack" ? style.secondaryBlack : style.secondaryWhite}`}
    >
      {text}
    </button>
  );
}
