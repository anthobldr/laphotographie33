import Image from "next/image";
import styles from "./BentoGallery.module.css";
import { photos } from "./photos";

export default function BentoGallery() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.gallery}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`${styles.item} ${styles[photo.size]}`}
          >
            <Image
              src={photo.image}
              alt={`Photo ${photo.id}`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}