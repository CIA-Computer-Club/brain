function B(){document.querySelectorAll("figure[data-rehype-pretty-code-figure]").forEach(t=>{t.classList.add("group");const n=t.firstChild;n?.nextSibling;const o=document.createElement("button");o.textContent="Copy",o.classList.add("bg-background","appearance-none","text-base","px-3","py-1","rounded-lg","duration-200","opacity-0","group-hover:opacity-100","hover:text-primary","text-foreground","absolute","top-2","right-2");const r=t.querySelector("code")?.innerText??"something went wrong, and i don't know what it is 😂";o.addEventListener("click",()=>{navigator.clipboard.writeText(r),o.textContent="Copied!",setTimeout(()=>{o.textContent="Copy"},2e3)}),n.appendChild(o),n.classList.add("relative")})}B();document.addEventListener("astro:after-swap",()=>{B()});function $(){if(window.innerWidth<1024)return;const e=localStorage.getItem("sidebar-open"),t=document.getElementById("sidebar");e==="true"?t.setAttribute("aria-expanded","true"):t.removeAttribute("aria-expanded")}function _(){const e=document.getElementById("sidebar");document.getElementById("sidebar-toggle").addEventListener("click",()=>{e.ariaExpanded==="true"?(document.body.classList.remove("max-lg:overflow-clip"),e.removeAttribute("aria-expanded"),localStorage.removeItem("sidebar-open")):(e.setAttribute("aria-expanded","true"),document.body.classList.add("max-lg:overflow-clip"),localStorage.setItem("sidebar-open","true"))})}$();_();document.addEventListener("astro:after-swap",()=>{$(),_()});const ne="astro:before-preparation",oe="astro:after-preparation",re="astro:before-swap",ie="astro:after-swap",se=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,n,o,r,a,u,d,i,m){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=u,this.sourceElement=d,this.info=i,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class ae extends U{formData;loader;constructor(t,n,o,r,a,u,d,i,m){super(ne,{cancelable:!0},t,n,o,r,a,u,d),this.formData=i,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ce extends U{direction;viewTransition;swap;constructor(t,n,o){super(re,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=n,this.swap=o.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function le(e,t,n,o,r,a,u,d){const i=new ae(e,t,n,o,r,a,window.document,u,d);return document.dispatchEvent(i)&&(await i.loader(),i.defaultPrevented||(se(oe),i.navigationType!=="traverse"&&I({scrollX,scrollY}))),i}async function ue(e,t,n){const o=new ce(e,t,n);return document.dispatchEvent(o),o.swap(),o}const de=history.pushState.bind(history),E=history.replaceState.bind(history),I=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},R=!!document.startViewTransition,P=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),W=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let L,p,A=!1,V;const X=e=>document.dispatchEvent(new Event(e)),Y=()=>X("astro:page-load"),fe=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},w="data-astro-transition-persist",K="data-astro-transition",j="data-astro-transition-fallback";let C,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):P()&&(E({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const me=(e,t)=>{let n=!1,o=!1;return(...r)=>{if(n){o=!0;return}e(...r),n=!0,setTimeout(()=>{o&&(o=!1,e(...r)),n=!1},t)}};async function he(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function G(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function we(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const o of t.attributes){if(o.name==="src"){const r=new Promise(a=>{n.onload=a});e=e.then(()=>r)}n.setAttribute(o.name,o.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const z=(e,t,n,o,r)=>{const a=W(t,e),u=document.title;document.title=o;let d=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const i=history.state;E({...n.state,index:i.index,scrollX:i.scrollX,scrollY:i.scrollY},"",e.href)}else de({...n.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(L=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const i=history.state;location.href=e.href,history.state||E(i,"")}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=u};function ge(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${n.getAttribute(w)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function M(e,t,n,o){const r=(s,f)=>{const h=s.getAttribute(w),y=h&&f.head.querySelector(`[${w}="${h}"]`);if(y)return y;if(s.matches("link[rel=stylesheet]")){const b=s.getAttribute("href");return f.head.querySelector(`link[rel=stylesheet][href="${b}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${w}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const f=s.selectionStart,h=s.selectionEnd;return{activeElement:s,start:f,end:h}}return{activeElement:s}}else return{activeElement:null}},u=({activeElement:s,start:f,end:h})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=f,s.selectionEnd=h))},d=s=>{const f=document.documentElement,h=[...f.attributes].filter(({name:c})=>(f.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...h].forEach(({name:c,value:l})=>f.setAttribute(c,l));for(const c of document.scripts)for(const l of s.newDocument.scripts)if(!c.src&&c.textContent===l.textContent||c.src&&c.type===l.type&&c.src===l.src){l.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const l=r(c,s.newDocument);l?l.remove():c.remove()}document.head.append(...s.newDocument.head.children);const y=document.body,b=a();document.body.replaceWith(s.newDocument.body);for(const c of y.querySelectorAll(`[${w}]`)){const l=c.getAttribute(w),k=document.querySelector(`[${w}="${l}"]`);k&&k.replaceWith(c)}u(b)};async function i(s){function f(c){const l=c.effect;return!l||!(l instanceof KeyframeEffect)||!l.target?!1:window.getComputedStyle(l.target,l.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(j,s);const b=document.getAnimations().filter(c=>!h.includes(c)&&!f(c));return Promise.all(b.map(c=>c.finished))}if(!A)document.documentElement.setAttribute(K,e.direction),o==="animate"&&await i("old");else throw new DOMException("Transition was skipped");const m=document.title,g=await ue(e,p,d);z(g.to,g.from,t,m,n),X(ie),o==="animate"&&!A&&i("new").then(()=>V())}async function J(e,t,n,o,r){if(!P()||location.origin!==n.origin){location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&I({scrollX,scrollY}),W(t,n)&&n.hash){z(n,t,o,document.title,r);return}const u=await le(t,n,e,a,o.sourceElement,o.info,o.formData,d);if(u.defaultPrevented){location.href=n.href;return}async function d(i){const m=i.to.href,g={};if(i.formData){g.method="POST";const h=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");g.body=h?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const s=await he(m,g);if(s===null){i.preventDefault();return}if(s.redirected&&(i.to=new URL(s.redirected)),C??=new DOMParser,i.newDocument=C.parseFromString(s.html,s.mediaType),i.newDocument.querySelectorAll("noscript").forEach(h=>h.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const f=ge(i.newDocument);f.length&&await Promise.all(f)}if(A=!1,R)p=document.startViewTransition(async()=>await M(u,o,r));else{const i=(async()=>{await new Promise(m=>setTimeout(m)),await M(u,o,r,G())})();p={updateCallbackDone:i,ready:i,finished:new Promise(m=>V=m),skipTransition:()=>{A=!0}}}p.ready.then(async()=>{await we(),Y(),fe()}),p.finished.then(()=>{document.documentElement.removeAttribute(K),document.documentElement.removeAttribute(j)}),await p.ready}async function H(e,t){await J("forward",L,new URL(e,location.href),t??{})}function pe(e){if(!P()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>T?"forward":"back";T=n,J(o,L,new URL(location.href),{},t)}const N=()=>{I({scrollX,scrollY})};{(R||G()!=="none")&&(L=new URL(location.href),addEventListener("popstate",pe),addEventListener("load",Y),"onscrollend"in window?addEventListener("scrollend",N):addEventListener("scroll",me(N,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const Q=new Set,S=new WeakSet;let D,Z,F=!1;function ye(e){F||(F=!0,D??=e?.prefetchAll??!1,Z??=e?.defaultStrategy??"hover",be(),Te(),ve(),Ae())}function be(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&x(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function Te(){let e;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),O(()=>{for(const o of document.getElementsByTagName("a"))S.has(o)||v(o,"hover")&&(S.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{x(r,{with:"fetch"})},80)}function n(){e&&(clearTimeout(e),e=0)}}function ve(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))S.has(t)||v(t,"viewport")&&(S.add(t),e??=Ee(),e.observe(t))})}function Ee(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),x(r.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(r))}})}function Ae(){O(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&x(e.href,{with:"link"})})}function x(e,t){const n=t?.ignoreSlowConnection??!1;if(!Se(e,n))return;if(Q.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Se(e,t){if(!navigator.onLine||!t&&ee())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Q.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||D)&&ee()?!0:n==null&&D||n===""?t===Z:n===t}function ee(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Le(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(R||Le()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),H(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o);let a=o?.getAttribute("formaction")??n.action??location.pathname;const u=o?.getAttribute("formmethod")??n.method;if(u==="dialog")return;const d={sourceElement:o??n};if(u==="get"){const i=new URLSearchParams(r),m=new URL(a);m.search=i.toString(),a=m.toString()}else d.formData=r;e.preventDefault(),H(a,d)}),ye({prefetchAll:!0}));function te(){document.querySelector("#theme-toggle").addEventListener("change",t=>{console.log(t);const n=window.document.documentElement.classList.contains("dark"),o=window.localStorage.getItem("theme"),r=n&&o==="dark";console.log(r),r?(window.localStorage.setItem("theme","light"),window.document.documentElement.classList.remove("dark")):(window.localStorage.setItem("theme","dark"),window.document.documentElement.classList.add("dark"))})}te();document.addEventListener("astro:after-swap",()=>{te()});
