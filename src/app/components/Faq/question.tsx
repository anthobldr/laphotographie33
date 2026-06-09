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
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="true"
          aria-controls={id}
        >
          {question}
        </button>
      </h2>
      <div
        id={id}
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Question() {
  const questions = [
    {
      id: "CollapseOne",
      question: "Je ne suis pas à l’aise face à l'objectif, comment faire ?",
      answer:
        "C'est la crainte de la majorité de mes clients, et c'est là que réside mon savoir-faire. Mon approche repose sur l'écoute, la bienveillance et la spontanéité. Oubliez les poses figées : nous échangeons, nous marchons, nous rions. Je privilégie les instants de vie authentiques. Mon plus beau moteur est de vous aider à prendre confiance et de vous faire réaliser à quel point vous êtes beaux.",
    },
    {
      id: "CollapseTwo",
      question:
        "Pourquoi faire appel à un photographe professionnel a-t-il un coût ?",
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
      question:
        "Suis-je obligé(e) de voir mes photos diffusées sur le site ou les réseaux sociaux ?",
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
      question:
        "Les horaires de la séance sont-ils fixes ? Que se passe-t-il en cas de dépassement ?",
      answer:
        "Le respect du planning est important pour capter les meilleures lumières (notamment les couchers de soleil). Cependant, je sais que l'humain et l'imprévu font partie de l'expérience : j'accepte ainsi 30 minutes de dépassement gracieux sur l'heure initialement prévue. Au-delà, un surcoût de 100 € par heure entamée sera appliqué.",
    },
  ];
  return (
    <section className="container py-5 text-white">
      <div className="d-flex text-center">
        <div className="d-flex flex-column col-6 gap-5">
          <h2>Questions Fréquentes</h2>
          <div className=" d-flex flex-column rounded-3 gap-4">
            {questions.map((list) => (
              <AccordionFaq key={list.id} {...list} />
            ))}
          </div>
        </div>
        <div className="col-6">
          <h2>Question Spécifiques "Mariage"</h2>
          <div></div>
        </div>
      </div>
    </section>
  );
}
