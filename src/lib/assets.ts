export type ImageAsset = string | { src: string };

export const assetSrc = (asset: ImageAsset) => (typeof asset === "string" ? asset : asset.src);
