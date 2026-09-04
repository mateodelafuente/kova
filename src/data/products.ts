/**
 * Catálogo KOVA PETS.
 * Para agregar un producto: sumar un objeto a esta lista. La home y (más
 * adelante) las fichas de producto lo toman de acá automáticamente.
 *
 * `photo` es opcional a propósito: mientras no haya foto real de un
 * producto (como PLAY todavía), la tarjeta cae sola al ícono de
 * placeholder — no hace falta tocar ProductCard.astro para eso.
 */
import type { ImageMetadata } from 'astro';
import photoFeed from '../img/producto-feed.webp';
import photoFlow from '../img/producto-flow.webp';
import photoTrack from '../img/producto-track.webp';

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
  /** Foto real del producto — src/img/producto-<slug>.webp. Si falta, se usa el placeholder. */
  photo?: ImageMetadata;
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
    photo: photoFeed,
    featured: true,
  },
  {
    slug: 'flow',
    name: 'FLOW',
    tagline: 'Fuente de agua de 3,5 L',
    description: 'Filtrado continuo y flujo silencioso que invita a beber más.',
    price: null,
    icon: 'flow',
    photo: photoFlow,
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
    photo: photoTrack,
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);
