import Image from "next/image";
interface Card {
    icon: string;
    title: string;
    desc: string;
}
export default function AssuranceCard({cardsList}:{cardsList: Card[]}) {
  return (
    <section className="pb-5">
      <div className="row g-3">
        {cardsList.map((card) =>
        <div key={card.title} className="col-6 col-lg-3">
          <div className="text-center border rounded py-4 h-100">
            <div className="py-lg-3">
              <Image src="/icons/camera.svg" width={50} height={50} alt="Icon de camera" />
            </div>
            <div className="d-flex flex-column gap-2">
              <h4 className="text-white">{card.title}</h4>
              <p className="fs-6 text-white">{card.desc} </p>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}