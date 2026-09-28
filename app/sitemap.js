import { SITE } from "../data/site";
import { visibleClinicians } from "../data/clinicians";
import { TOPICS } from "../data/topics";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/therapists", "/insurance", "/faq", "/contact", "/dayton", "/rocky-river", "/telehealth", "/hiring", "/good-faith-estimate", "/privacy-notice", "/privacy"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 })),
    ...visibleClinicians.map((t) => ({ url: `${SITE.url}/therapists/${t.slug}`, changeFrequency: "monthly", priority: 0.8 })),
    ...TOPICS.map((t) => ({ url: `${SITE.url}/therapy/${t.slug}`, changeFrequency: "monthly", priority: 0.8 })),
  ];
}
