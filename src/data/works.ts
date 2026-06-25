export type CeramicWork = {
  id: number;
  title: string;
  titleCn?: string;
  year: string;
  clay?: string;
  glaze?: string;
  firing?: string;
  dimensions: string;
  status?: "reserved" | "not-available";
  image?: string;
  images?: string[];
  coverImageIndex?: number;
  tone: "warm" | "ash" | "dark" | "celadon" | "white";
};

export const works: CeramicWork[] = [
  {
    id: 1,
    title: "Bamboo Cup",
    titleCn: "竹节杯",
    year: "2026",
    clay: "Soldate 60",
    firing: "Cone 10",
    dimensions: "3 x 3 x 4",
    status: "not-available",
    tone: "ash",
    images: [
      "/images/1-bamboo-cup-1.jpg",
      "/images/1-bamboo-cup-2.jpg",
      "/images/1-bamboo-cup-3.jpg",
      "/images/1-bamboo-cup-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Shino Gaiwan",
    titleCn: "志野盖碗",
    year: "2026",
    clay: "Soldate 60",
    glaze: "Spanish Shino",
    firing: "Cone 10",
    dimensions: "5 x 5 x 3",
    status: "reserved",
    tone: "white",
    images: [
      "/images/2-gaiwan-1.jpg",
      "/images/2-gaiwan-2.jpg",
      "/images/2-gaiwan-3.jpg",
      "/images/2-gaiwan-4.jpg",
      "/images/2-gaiwan-5.jpg",
      "/images/2-gaiwan-6.jpg",
    ],
  },
];
