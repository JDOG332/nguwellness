/** @type {import('next').NextConfig} */
// Static export: the whole site builds to plain files in /out, which Cloudflare Pages serves for free.
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
