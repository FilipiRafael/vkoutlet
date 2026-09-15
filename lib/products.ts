export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  team: string;
  description: string;
  price: number;
  compareAt: number;
  comboPrice: number | null;
  images: ProductImage[];
  whatsappText: string;
};

export const products: Product[] = [
  {
    id: "brasil-10",
    slug: "brasil-10",
    name: "Brasil 10",
    team: "Seleção",
    description:
      "O 10 no peito, Ronaldinho nas costas. Peça de acervo, importada, pronta entrega. Frente e costas.",
    price: 120,
    compareAt: 150,
    comboPrice: 100,
    images: [
      {
        src: "/images/products/brasil-ronaldinho-frente.jpg",
        alt: "Camisa do Brasil amarela, número 10 no peito",
      },
      {
        src: "/images/products/brasil-ronaldinho-costas.jpg",
        alt: "Camisa do Brasil, costas com Ronaldinho 10",
      },
    ],
    whatsappText:
      "Fala! Vi a camisa do Brasil 10 (Ronaldinho) na vkoutlet. Quero saber tamanho e disponibilidade.",
  },
  {
    id: "palmeiras-gola",
    slug: "palmeiras-gola",
    name: "Palmeiras gola",
    team: "Palmeiras",
    description:
      "Gola verde e vermelha, corte clássico. Importada, à pronta entrega. Tamanho GG — confirma no zap se quiser outro.",
    price: 120,
    compareAt: 150,
    comboPrice: 100,
    images: [
      {
        src: "/images/products/palmeiras-gola.jpg",
        alt: "Camisa branca do Palmeiras com gola verde e vermelha",
      },
    ],
    whatsappText:
      "Fala! Vi a camisa do Palmeiras (gola) na vkoutlet. Quero saber tamanho e disponibilidade.",
  },
  {
    id: "palmeiras-jacquard",
    slug: "palmeiras-jacquard",
    name: "Palmeiras jacquard",
    team: "Palmeiras",
    description:
      "Manga verde, corpo em textura. Pra usar no sábado e não parecer uniforme de pelada.",
    price: 120,
    compareAt: 150,
    comboPrice: 100,
    images: [
      {
        src: "/images/products/palmeiras-jacquard.jpg",
        alt: "Camisa do Palmeiras com manga verde e textura jacquard",
      },
    ],
    whatsappText:
      "Fala! Vi a camisa do Palmeiras (jacquard) na vkoutlet. Quero saber tamanho e disponibilidade.",
  },
  {
    id: "corinthians-preta",
    slug: "corinthians-preta",
    name: "Corinthians preta",
    team: "Corinthians",
    description:
      "Manga raglan, escudo no peito. Preta com branco. Importada, pronta, sem firula.",
    price: 120,
    compareAt: 150,
    comboPrice: 100,
    images: [
      {
        src: "/images/products/corinthians-preta.jpg",
        alt: "Camisa preta do Corinthians com manga branca",
      },
    ],
    whatsappText:
      "Fala! Vi a camisa do Corinthians preta na vkoutlet. Quero saber tamanho e disponibilidade.",
  },
  {
    id: "corinthians-branca",
    slug: "corinthians-branca",
    name: "Corinthians branca",
    team: "Corinthians",
    description:
      "Gola V, filete preto no ombro. Leve e reta. A branca que não some no guarda-roupa.",
    price: 120,
    compareAt: 150,
    comboPrice: 100,
    images: [
      {
        src: "/images/products/corinthians-branca.jpg",
        alt: "Camisa branca do Corinthians com filete preto",
      },
    ],
    whatsappText:
      "Fala! Vi a camisa do Corinthians branca na vkoutlet. Quero saber tamanho e disponibilidade.",
  },
  {
    id: "sao-paulo-listrada",
    slug: "sao-paulo-listrada",
    name: "São Paulo listrada",
    team: "São Paulo",
    description:
      "Listra vertical, gola dourada. O manto tricolor, pronta entrega.",
    price: 120,
    compareAt: 150,
    comboPrice: 100,
    images: [
      {
        src: "/images/products/sao-paulo-listrada.jpg",
        alt: "Camisa listrada do São Paulo em vermelho, preto e branco",
      },
    ],
    whatsappText:
      "Fala! Vi a camisa do São Paulo listrada na vkoutlet. Quero saber tamanho e disponibilidade.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
