// generate-sitemap.js

import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import path from "path";
import { fileURLToPath } from "url";

console.log("🚀 Generating sitemap...");

// ES module-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure public folder exists
const publicPath = path.join(__dirname, "public");
fs.mkdirSync(publicPath, { recursive: true });

// Define your routes
const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/not-found", changefreq: "monthly", priority: 1.0 },
  { url: "/hiring-form", changefreq: "monthly", priority: 1.0 },
  { url: "/courses/robotics", changefreq: "monthly", priority: 0.8 },
  { url: "/courses/iot", changefreq: "monthly", priority: 0.8 },
  {
    url: "/workshops/bluetooth-driving-car",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/workshops/self-driving-car", changefreq: "monthly", priority: 0.8 },
  { url: "/workshops/home-automation", changefreq: "monthly", priority: 0.8 },
  {
    url: "/workshops/obstacle-detection",
    changefreq: "monthly",
    priority: 0.8,
  },
  { url: "/workshops/smoke-detection", changefreq: "monthly", priority: 0.8 },
  { url: "/workshops/bluetooth-control", changefreq: "monthly", priority: 0.8 },
];

(async () => {
  try {
    const sitemapStream = new SitemapStream({
      hostname: "https://talentsjunction.com",
    });

    // Write all the links
    links.forEach((link) => sitemapStream.write(link));
    sitemapStream.end(); // Important to end the stream!

    const xml = await streamToPromise(sitemapStream).then((data) =>
      data.toString()
    );

    const filePath = path.join(publicPath, "sitemap.xml");
    fs.writeFileSync(filePath, xml);

    console.log("✅ Sitemap created at public/sitemap.xml");
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
})();
