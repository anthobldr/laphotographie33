import style from "./Button.module.css";
import Link from "next/link";
export default function ButtonPrimary({
  text,
  styleName,
  href,
  fullWidth = false,
}: {
  text: string;
  styleName?: string;
  href: string;
  fullWidth?: boolean;
}) {
  return (
    <Link href={href}>
      <button
        className={`btn rounded-0 px-4 py-3 ${fullWidth ? "w-100" : ""} ${styleName === "primaryOrange" ? style.primaryOrange : style.primaryLight}`}
      >
        {text}
      </button>
    </Link>
  );
}
