import puppeteer from "puppeteer-core";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const b = await puppeteer.launch({ executablePath: CHROME, headless: "new", args:["--no-sandbox","--use-gl=angle","--use-angle=swiftshader","--hide-scrollbars"] });
async function shot(w,h,sel,name){
  const p = await b.newPage();
  await p.setViewport({ width:w, height:h, deviceScaleFactor:1 });
  await p.goto("http://localhost:3001",{waitUntil:"networkidle2",timeout:60000});
  await sleep(1200);
  const H=await p.evaluate(()=>document.body.scrollHeight);
  for(let y=0;y<H;y+=h*0.7){await p.evaluate(t=>window.lenis?window.lenis.scrollTo(t,{immediate:true}):scrollTo(0,t),y);await sleep(80);}
  await p.evaluate(s=>{const e=document.querySelector(s);const t=e.getBoundingClientRect().top+window.scrollY;window.lenis?window.lenis.scrollTo(t,{immediate:true}):scrollTo(0,t);},sel);
  await sleep(1500);
  await p.screenshot({path:`/tmp/pqi-shots/${name}.png`});
  console.log("shot",name); await p.close();
}
await shot(1440,1600,"#gallery","gal2-desktop");
await shot(390,844,"#gallery","gal2-mobile");
await shot(1440,1000,"#story","story-stats");
await b.close();
