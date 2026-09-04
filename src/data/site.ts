/**
 * Datos globales del sitio: marca, navegación, pilares, universos.
 * Editar acá cambia el sitio entero — no hace falta tocar los componentes.
 */
import { products } from './products';

export const brand = {
  name: 'KOVA',
  sub: 'PETS',
  tagline: 'Smart care, refined living.',
  parentTagline: 'Designed for everyday luxury.',
  parentClaim: 'Intelligent products · Thoughtful design · Refined living',
  domain: 'kovaarg.com.ar',
  location: 'Buenos Aires, Argentina',
  year: 2026,
  // Datos a completar por el cliente:
  email: '[correo]',
  instagram: '[@instagram]',
  whatsapp: '[whatsapp]',
} as const;

export type NavItem = { label: string; href: string };

/** Un link por producto — sale directo del catálogo, no se duplica a mano.
 *  Se usa en el footer (el header no tiene navegación de productos). */
export const productNav: NavItem[] = products.map((p) => ({
  label: p.name,
  href: `/productos/${p.slug}`,
}));

export type Pillar = { name: string; desc: string; icon: string };

export const pillars: Pillar[] = [
  { name: 'Intelligent', desc: 'Tecnología que resuelve.', icon: 'spark' },
  { name: 'Refined', desc: 'Diseño que eleva lo cotidiano.', icon: 'gem' },
  { name: 'Thoughtful', desc: 'Elegido con intención.', icon: 'compass' },
  { name: 'Trusted', desc: 'Calidad en la que podés confiar.', icon: 'shield' },
];

export type Universe = { name: string; status: string; active: boolean };

export const universes: Universe[] = [
  { name: 'KOVA PETS', status: 'Disponible', active: true },
  { name: 'KOVA HOME', status: 'Próximamente', active: false },
  { name: 'KOVA BEAUTY', status: 'Próximamente', active: false },
  { name: 'KOVA WELLNESS', status: 'Próximamente', active: false },
];
