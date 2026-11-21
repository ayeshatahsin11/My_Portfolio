// Put your Cloudinary cloud name here (Dashboard → Cloud name)
const CLOUD_NAME = "dygourdd";

// Pass a Cloudinary Public ID (or a full http link, or a "/local.png" path).
// f_auto + q_auto = Cloudinary picks the best format and quality for each visitor.
export function img(src, width = 1200) {
  if (!src) return "";
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${src}`;
}