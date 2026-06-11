import style from "./Button.module.css";
import Link from "next/link";

export default function ButtonSecondary({
  text,
  styleName,
  href,
}: {
  text: string;
  styleName?: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <button
        className={`btn rounded-0 px-4 py-3 text-uppercase ${styleName === "secondaryBlack" ? style.secondaryBlack : style.secondaryWhite}`}
      >
        {text}
      </button>
    </Link>
  );
}
