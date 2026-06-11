import style from "./Button.module.css";
import Link from "next/link";
export default function ButtonPrimary({
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
        className={`btn rounded-0 px-4 py-3 ${styleName === "primaryOrange" ? style.primaryOrange : style.primaryLight}`}
      >
        {text}
      </button>
    </Link>
  );
}
