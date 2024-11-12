// my-loader.ts
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params: string[] = [];
  const path = `${src}?${params.join("&")}`;
  return path;
}
