/**
 * Catálogo KOVA PETS.
 * Para agregar un producto: sumar un objeto a esta lista. La home y (más
 * adelante) las fichas de producto lo toman de acá automáticamente.
 */

export interface Product {
  /** Identificador para la URL: /productos/<slug> */
  slug: string;
  name: string;
  /** Frase corta de una línea */
  tagline: string;
  /** Descripción breve para la tarjeta de la home */
  description: string;
  /** Precio en ARS como texto, o null si todavía no está definido */
  price: string | null;
  /** Nombre del ícono en components/Icon.astro */
  icon: 'feed' | 'flow' | 'play' | 'track';
  /** Si aparece o no en la grilla de la home */
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: 'feed',
    name: 'FEED',
    tagline: 'Comedero inteligente con cámara',
    description: 'Raciones precisas, video en vivo y voz — desde tu teléfono.',
    price: null,
    icon: 'feed',
    featured: true,
  },
  {
    slug: 'flow',
    name: 'FLOW',
    tagline: 'Fuente de agua de 3,5 L',
    description: 'Filtrado continuo y flujo silencioso que invita a beber más.',
    price: null,
    icon: 'flow',
    featured: true,
  },
  {
    slug: 'play',
    name: 'PLAY',
    tagline: 'Juguete láser interactivo',
    description: 'Juego autónomo, con ritmos que imitan una presa real.',
    price: null,
    icon: 'play',
    featured: true,
  },
  {
    slug: 'track',
    name: 'TRACK',
    tagline: 'Collar con GPS',
    description: 'Ubicación en tiempo real y zonas seguras, en un collar liviano.',
    price: null,
    icon: 'track',
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
