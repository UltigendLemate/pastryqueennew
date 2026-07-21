import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args:["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--hide-scrollbars"] });
const p = await b.newPage();
await p.setViewport({ width:1440, height:900, deviceScaleFactor:1 });
await p.goto("http://localhost:3001",{waitUntil:"networkidle2",timeout:60000});
await sleep(1200);
const H=await p.evaluate(()=>document.body.scrollHeight);
for(let y=0;y<H;y+=620){await p.evaluate(t=>window.lenis?window.lenis.scrollTo(t,{immediate:true}):scrollTo(0,t),y);await sleep(90);}
for(const s of ["#story","#organisers","#sponsors"]){
  await p.evaluate(x=>{const e=document.querySelector(x);const t=e.getBoundingClientRect().top+window.scrollY;window.lenis?window.lenis.scrollTo(t,{immediate:true}):scrollTo(0,t);},s);
  await sleep(2000);
  await p.screenshot({path:`/tmp/pqi-shots/sec-${s.slice(1)}.png`});
  console.log("shot",s);
}
await b.close();
