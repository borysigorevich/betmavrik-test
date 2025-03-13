export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e0e0e0" offset="0%" />
      <stop stop-color="#f0f0f0" offset="50%" />
      <stop stop-color="#e0e0e0" offset="100%" />
      <stop stop-color="#d4d4d4" offset="150%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e0e0e0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite" />
</svg>`;

export const toBase64 = (str: string) =>
    typeof window === 'undefined'
        ? Buffer.from(str).toString('base64')
        : window.btoa(str);

export const imagePlaceholder = (w: number, h: number) =>
    `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}` as const;
