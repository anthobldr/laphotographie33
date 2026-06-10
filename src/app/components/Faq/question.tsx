import style from "./Faq.module.css";
import ButtonFaq from "./ButtonFaq";

function AccordionFaq({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  return (
    <div className={`${style.accordionSize}`}>
      <h2 className="accordion-header  p-0">
        <div className=" ">
          <button
            className="accordion-item   text-black bg-white fs-5 d-flex justify-content-between align-items-center border-0  w-100  p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${id}`}
            aria-expanded="true"
            aria-controls={id}
          >
            <span className="fs-6 ps-lg-5 text-center w-100">{question}</span>
            <div className="bg-black">
              <ButtonFaq />
            </div>
          </button>
        </div>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse "
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body rounded-3 border-top border-black">
          <p className="fs-6 p-4 text-black bg-white">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Question() {
  const questions = [
    {
      id: "Collapse1",
      question: "Je ne suis pas à l’aise face à l'objectif, comment faire ?",
      answer:
        "C'est la crainte de la majorité de mes clients, et c'est là que réside mon savoir-faire. Mon approche repose sur l'écoute, la bienveillance et la spontanéité. Oubliez les poses figées : nous échangeons, nous marchons, nous rions. Je privilégie les instants de vie authentiques. Mon plus beau moteur est de vous aider à prendre confiance et de vous faire réaliser à quel point vous êtes beaux.",
    },
    {
      id: "Collapse2",
      question: "Pourquoi faire appel à un photographe professionnel ?",
      answer:
        "Derrière chaque image livrée se cache bien plus qu'un simple déclenchement. Le tarif d'une prestation englobe le temps passé en amont pour préparer votre séance, un matériel professionnel de haute technicité (boîtiers, objectifs de pointe, sauvegardes sécurisées), les frais de déplacement et les charges de l'entreprise. Enfin, une grande partie du travail invisible réside dans le post-traitement : le tri minutieux et le développement artistique de chaque cliché pour lui donner cette signature chaleureuse et lumineuse unique. Choisir un professionnel, c'est investir dans un patrimoine émotionnel durable.",
    },
    {
      id: "Collapse3",
      question: "Quel est le délai pour recevoir mes photos ?",
      answer:
        "Après notre séance ou votre événement, je prends le temps de sublimer chaque image. Vos clichés seront disponibles sur une galerie en ligne privée sous un délai d'environ 10 à 15 jours ouvrés.",
    },
    {
      id: "Collapse4",
      question: "Suis-je obligé(e) de voir mes photos diffusées sur internet ?",
      answer:
        "Absolument pas. Votre vie privée est précieuse. La diffusion de vos images (sur mon site ou mon compte Instagram) se fait uniquement et exclusivement avec votre accord préalable.",
    },
    {
      id: "Collapse5",
      question: "Les frais de déplacement sont-ils inclus dans le forfait ?",
      answer:
        "Les déplacements sont inclus dans un rayon de 20 km autour de mon domicile (Saint-André-de-Cubzac). Au-delà, une majoration kilométrique transparente s'applique au cas par cas, définie dès la signature du devis.",
    },
    {
      id: "Collapse6",
      question: "Les horaires de la séance sont-ils fixes ?",
      answer:
        "Le respect du planning est important pour capter les meilleures lumières (notamment les couchers de soleil). Cependant, je sais que l'humain et l'imprévu font partie de l'expérience : j'accepte ainsi 30 minutes de dépassement gracieux sur l'heure initialement prévue. Au-delà, un surcoût de 100 € par heure entamée sera appliqué.",
    },
  ];

  const questionsMariage = [
    {
      id: "CollapseMarriage1",
      question: "Que fait-on s'il pleut le jour J ?",
      answer:
        "On lâche prise ! La météo est la seule chose que nous ne maîtrisons pas, mais elle n'enlève rien à la magie et à l'amour de votre journée. Une belle lumière diffuse sous les nuages, des reflets dans l'eau ou de jolis parapluies transparents apportent une esthétique unique, très cinématographique et authentique. Nous vivons l'instant présent, quelle que soit la météo, et nous en faisons une force.",
    },
    {
      id: "CollapseMarriage2",
      question: "Combien de photos vais-je obtenir pour mon mariage ?",
      answer:
        "Chaque mariage est unique, mais pour une présence sur une journée complète, je livre en moyenne 400 clichés triés, retouchés en haute définition et prêts à être partagés avec vos proches.",
    },
    {
      id: "CollapseMarriage3",
      question:
        "Est-il possible de vous réserver pour une partie de la journée ?",
      answer:
        "Oui, tout à fait. Parce que chaque union est différente, je propose différents niveaux de prestations et forfaits modulables pour m'adapter à vos attentes, que vous souhaitiez ma présence uniquement pour les cérémonies ou des préparatifs jusqu'à la pièce montée.",
    },
  ];
  return (
    <section className="container py-5 text-white">
      <div className="d-flex flex-column text-center gap-5">
        <div className="d-flex flex-column justify-content-center gap-5">
          <h2 className="align-self-center">Questions Fréquentes</h2>
          <div className="d-flex flex-column col-12 align-items-center gap-5 ">
            {questions.map((list) => (
              <AccordionFaq key={list.id} {...list} />
            ))}
          </div>
        </div>
        <div className="d-flex flex-column text-center gap-5">
          <h2 className="align-self-center">
            Question Spécifiques &quot;Mariage&quot;
          </h2>
          <div className="d-flex flex-column col-12 align-items-center gap-5 ">
            {questionsMariage.map((list) => (
              <AccordionFaq key={list.id} {...list} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
