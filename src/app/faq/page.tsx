import Hero from "../layouts/Hero";
import Experience from "../components/Faq/experience";
import Question from "../components/Faq/question";
import style from "@/app/layouts/Hero.module.css";

export default function FAQ() {
  return (
    <>
      <Hero
        title={
          <>
            <span className={`${style.heroEnLight}`}>FAQ</span>
          </>
        }
        subtitle=""
      />
      <Experience></Experience>
      <Question></Question>
    </>
  );
}
