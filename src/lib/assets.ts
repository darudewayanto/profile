import type { ImageMetadata } from "astro";

type Glob = Record<string, { default: ImageMetadata }>;

const toMap = (glob: Glob) =>
  Object.fromEntries(
    Object.entries(glob).map(([path, mod]) => [path.split("/").pop()!.replace(/\.\w+$/, ""), mod.default]),
  ) as Record<string, ImageMetadata>;

export const badgeImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/badges/*.png", { eager: true }));
export const brandImg = toMap(import.meta.glob<{ default: ImageMetadata }>("../assets/brand/*.png", { eager: true }));

// Never render a raster logo wider than its source allows at 2x, so nothing upscales and blurs.
export const crispWidth = (img: ImageMetadata, want: number) => Math.min(want, Math.floor(img.width / 2) || img.width);
