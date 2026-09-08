/**
 * Catálogo KOVA PETS.
 * Para agregar un producto: sumar un objeto a esta lista. La home, la
 * grilla de /productos y las fichas /productos/<slug> lo toman de acá.
 *
 * `photo` es opcional a propósito: mientras no haya foto real de un
 * producto (como PLAY todavía), la tarjeta cae sola al ícono de
 * placeholder — no hace falta tocar ProductCard.astro para eso.
 *
 * `specs` son las filas de la ficha de producto. Los valores dicen
 * "[a completar]" hasta que el cliente pase los datos técnicos reales —
 * las etiquetas ya sirven de guía de qué hace falta.
 */
import type { ImageMetadata } from 'astro';
import photoFeed from '../img/producto-feed.webp';
import photoFlow from '../img/producto-flow.webp';
import photoTrack from '../img/producto-track.webp';

export interface ProductSpec {
  label: string;
  value: string;
}

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
  /** Nombre del ícono en components/Icon.astro (placeholder mientras no hay foto) */
  icon: 'feed' | 'flow' | 'play' | 'track';
  /** Universo al que pertenece — hoy todos 'pets' (ver src/data/site.ts) */
  universe: string;
  /** Categoría dentro del universo — para el filtro de /productos */
  category: string;
  /** Foto real del producto — src/img/producto-<slug>.webp. Si falta, se usa el placeholder. */
  photo?: ImageMetadata;
  /** Filas de la tabla de especificaciones en la ficha de producto */
  specs: ProductSpec[];
  /** Si aparece o no en la grilla de la home */
  featured: boolean;
}

const TBD = '[a completar]';

export const products: Product[] = [
  {
    slug: 'feed',
    name: 'FEED',
    tagline: 'Comedero inteligente con cámara',
    description: 'Raciones precisas, video en vivo y voz — desde tu teléfono.',
    price: null,
    icon: 'feed',
    universe: 'pets',
    category: 'Alimentación',
    photo: photoFeed,
    specs: [
      { label: 'Capacidad de la tolva', value: TBD },
      { label: 'Cámara', value: TBD },
      { label: 'Audio', value: TBD },
      { label: 'Conectividad', value: TBD },
      { label: 'Alimentación', value: TBD },
      { label: 'App', value: TBD },
      { label: 'Dimensiones', value: TBD },
      { label: 'Contenido de la caja', value: TBD },
      { label: 'Garantía', value: TBD },
    ],
    featured: true,
  },
  {
    slug: 'flow',
    name: 'FLOW',
    tagline: 'Fuente de agua de 3,5 L',
    description: 'Filtrado continuo y flujo silencioso que invita a beber más.',
    price: null,
    icon: 'flow',
    universe: 'pets',
    category: 'Hidratación',
    photo: photoFlow,
    specs: [
      { label: 'Capacidad', value: '3,5 L' },
      { label: 'Filtrado', value: TBD },
      { label: 'Nivel de ruido', value: TBD },
      { label: 'Alimentación', value: TBD },
      { label: 'Materiales', value: TBD },
      { label: 'Dimensiones', value: TBD },
      { label: 'Contenido de la caja', value: TBD },
      { label: 'Garantía', value: TBD },
    ],
    featured: true,
  },
  {
    slug: 'play',
    name: 'PLAY',
    tagline: 'Juguete láser interactivo',
    description: 'Juego autónomo, con ritmos que imitan una presa real.',
    price: null,
    icon: 'play',
    universe: 'pets',
    category: 'Juego',
    specs: [
      { label: 'Modos de juego', value: TBD },
      { label: 'Temporizador', value: TBD },
      { label: 'Alimentación', value: TBD },
      { label: 'Autonomía', value: TBD },
      { label: 'Dimensiones', value: TBD },
      { label: 'Contenido de la caja', value: TBD },
      { label: 'Garantía', value: TBD },
    ],
    featured: true,
  },
  {
    slug: 'track',
    name: 'TRACK',
    tagline: 'Collar con GPS',
    description: 'Ubicación en tiempo real y zonas seguras, en un collar liviano.',
    price: null,
    icon: 'track',
    universe: 'pets',
    category: 'Seguridad',
    photo: photoTrack,
    specs: [
      { label: 'Conectividad', value: TBD },
      { label: 'Autonomía de batería', value: TBD },
      { label: 'Resistencia al agua', value: TBD },
      { label: 'Peso', value: TBD },
      { label: 'Talles de collar', value: TBD },
      { label: 'App', value: TBD },
      { label: 'Contenido de la caja', value: TBD },
      { label: 'Garantía', value: TBD },
    ],
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

/** Productos de un universo (para el drawer del header y las fichas). */
export function productsByUniverse(slug: string): Product[] {
  return products.filter((p) => p.universe === slug);
}

/** Categorías presentes en un universo, en orden de aparición (para el filtro). */
export function categoriesForUniverse(slug: string): string[] {
  return [...new Set(productsByUniverse(slug).map((p) => p.category))];
}
