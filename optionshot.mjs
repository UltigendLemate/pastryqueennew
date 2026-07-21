import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const routes = process.argv.slice(2);
if (routes.length === 0) routes.push("/", "/option-1", "/option-3");
const sizes = [
  [390, 844, "phone"],
  [1440, 900, "mac"],
  [1920, 1080, "desktop"],
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--use-gl=angle", "--use-angle=swiftshader", "--hide-scrollbars"],
});

for (const route of routes) {
  const slug = route === "/" ? "home" : route.replace(/\//g, "");
  for (const [w, h, name] of sizes) {
    const p = await browser.newPage();
    await p.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
    const res = await p.goto("http://localhost:3001" + route, { waitUntil: "networkidle2", timeout: 60000 });
    if (!res || res.status() >= 400) {
      console.log("SKIP", route, name, res && res.status());
      await p.close();
      continue;
    }
    await sleep(4000); // let the hero assemble + settle
    await p.screenshot({ path: `/tmp/pqi-shots/${slug}-${name}.png` });
    console.log("captured", slug, name);
    await p.close();
  }
}
await browser.close();
