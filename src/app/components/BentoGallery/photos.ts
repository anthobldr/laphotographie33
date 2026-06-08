export type PhotoSize = "wide" | "large" | "portrait" | "small";

export interface Photo {
  id: number;
  image: string;
  size: PhotoSize;
}

export const photos: Photo[] = [
  { id: 1, image: "/images/bento/photo1.jpg", size: "wide" },
  { id: 2, image: "/images/bento/photo2.jpg", size: "wide" },
  { id: 3, image: "/images/bento/photo3.jpg", size: "portrait" },
  { id: 4, image: "/images/bento/photo4.jpg", size: "portrait" },
  { id: 5, image: "/images/bento/photo5.jpg", size: "small" },
  { id: 6, image: "/images/bento/photo9.jpg", size: "small" },
  { id: 7, image: "/images/bento/photo6.jpg", size: "large" },
  { id: 8, image: "/images/bento/photo7.jpg", size: "large" },
  { id: 9, image: "/images/bento/photo8.jpg", size: "wide" },
];
