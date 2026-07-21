import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  args: ["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--hide-scrollbars"] });
for (const [w,h,name] of [[1440,820,"desktop"],[390,844,"mobile"]]) {
  const p = await browser.newPage();
  await p.setViewport({ width:w, height:h, deviceScaleFactor:1 });
  await p.goto("http://localhost:3001", { waitUntil:"networkidle2", timeout:60000 });
  await sleep(4200); // let the draw-on finish
  await p.screenshot({ path:`/tmp/pqi-shots/bird-${name}.png` });
  console.log("captured", name);
  await p.close();
}
await browser.close();
