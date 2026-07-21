import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new",
  args: ["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--hide-scrollbars"] });
const p = await browser.newPage();
await p.setViewport({ width: 1440, height: 1500, deviceScaleFactor: 1 });
await p.goto("http://localhost:3001", { waitUntil: "networkidle2", timeout: 60000 });
await sleep(1200);
const h = await p.evaluate(()=>document.body.scrollHeight);
for (let y=0;y<h;y+=900){ await p.evaluate(t=>window.lenis?window.lenis.scrollTo(t,{immediate:true}):scrollTo(0,t),y); await sleep(90);}
await p.evaluate(()=>{const el=document.querySelector("#gallery");const top=el.getBoundingClientRect().top+window.scrollY;window.lenis?window.lenis.scrollTo(top,{immediate:true}):scrollTo(0,top);});
await sleep(1000);
await p.screenshot({ path: "/tmp/pqi-shots/gallery-full.png" });
console.log("gallery-full captured");
await browser.close();
