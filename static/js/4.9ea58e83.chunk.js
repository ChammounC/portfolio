(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{64:function(e,t,r){"use strict";var n=r(0),c=r(4),s=r.n(c),a=r(20),i=r.p+"static/media/gotham-bold.73ce573b.woff2",o=(r(66),r(1));t.a=({children:e,level:t=1,as:r,align:c="auto",weight:l="medium",className:d,...u})=>{const m=Math.min(Math.max(t,0),4),p=r||`h${Math.max(m,1)}`;return Object(o.jsxs)(n.Fragment,{children:["bold"===l&&Object(o.jsxs)(a.a,{children:[Object(o.jsx)("link",{rel:"preload",href:i,as:"font",crossorigin:""}),Object(o.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${i}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(o.jsx)(p,{className:s()(d,"heading",`heading--align-${c}`,`heading--level-${m}`,`heading--weight-${l}`),...u,children:e})]})}},65:function(e,t,r){"use strict";var n=r(4),c=r.n(n),s=(r(68),r(1));t.a=({children:e,size:t="m",as:r="p",align:n="auto",weight:a="auto",secondary:i,className:o,...l})=>Object(s.jsx)(r,{className:c()(o,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${a}`,{"text--secondary":i}),...l,children:e})},66:function(e,t,r){},67:function(e,t,r){"use strict";var n=r(0),c=r(4),s=r.n(c),a=(r(71),r(1));const i=Object(n.forwardRef)((({as:e="div",children:t,className:r,...n},c)=>Object(a.jsx)(e,{className:s()("section",r),ref:c,...n,children:t})));t.a=i},68:function(e,t,r){},69:function(e,t,r){"use strict";var n=r(0),c=r(4),s=r.n(c),a=r(9),i=r(73),o=r(22),l=r(27),d=(r(70),r(1));const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],m="glyph",p="value";const j=({text:e,start:t=!0,delay:r=0,className:c,...j})=>{const h=Object(n.useRef)([{type:m,value:""}]),b=Object(n.useRef)(),f=Object(a.h)();return Object(n.useEffect)((()=>{const n=b.current,c=e.split("");let s;const a=()=>{const e=h.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},o=Object(i.d)(0,(e=>{h.current=function(e,t,r){return e.map(((e,n)=>{if(n<r)return{type:p,value:e};if(r%1<.5){const e=Math.floor(Math.random()*u.length);return{type:m,value:u[e]}}return{type:m,value:t[n].value}}))}(c,h.current,e),a()}));return!t||s||f||l.a||(s=Object(i.a)(Object(i.b)(r),Object(i.c)({from:0,to:c.length,stiffness:8,damping:5})).start(o)),f&&(h.current=c.map(((e,t)=>({type:p,value:c[t]}))),a()),()=>{s&&s.stop()}}),[f,t,r,e]),Object(d.jsxs)("span",{className:s()("decoder-text",c),...j,children:[Object(d.jsx)(o.a,{className:"decoder-text__label",children:e}),Object(d.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:b})]})};t.a=Object(n.memo)(j)},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){"use strict";var n=r(14),c=r(4),s=r.n(c),a=r(16),i=(r(78),r(1));const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:r,secondary:c,className:l,href:d,as:u,...m})=>{const p=o.includes(null===d||void 0===d?void 0:d.split(".").pop()),j=(null===d||void 0===d?void 0:d.includes("://"))||"#"===(null===d||void 0===d?void 0:d[0])||p,h=e||(j?"noreferrer noopener":void 0),b=t||(j?"_blank":void 0),f=u||(j?"a":n.b);return Object(i.jsx)(f,{className:s()("link",l,{"link--secondary":c}),rel:h,href:j?d:void 0,to:j?void 0:d,target:b,onMouseUp:a.a,...m,children:r})}},74:function(e,t,r){"use strict";async function n({src:e,srcSet:t,sizes:r}){return new Promise(((n,c)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const c=new Image;e&&(c.src=e),t&&(c.srcset=t),r&&(c.sizes=r);const s=()=>{c.removeEventListener("load",s);const e=c.currentSrc;n(e)};c.addEventListener("load",s)}catch(s){c(`Error loading ${t}: ${s}`)}}))}async function c(e){const t=e.split(", ").map((e=>{const[t,r]=e.split(" ");return{src:t,image:function(e=1,t=1){const r=document.createElement("canvas"),n=r.getContext("2d");r.width=e,r.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const c=r.toDataURL("image/png","");return r.remove(),c}(Number(r.replace("w",""))),width:r}})),r=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),c=await n({srcSet:r});return t.find((e=>e.image===c)).src}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}))},75:function(e,t,r){"use strict";var n=r(4),c=r.n(n),s=r(2),a=(r(77),r(1));const i=({lineWidth:e,lineHeight:t,notchWidth:r,notchHeight:n,collapseDelay:i,collapsed:o,className:l,style:d})=>Object(a.jsxs)("div",{className:c()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":r,"--notchHeight":n,"--collapseDelay":Object(s.c)(i),...d},children:[Object(a.jsx)("div",{className:c()("divider__line",{"divider__line--collapsed":o})}),Object(a.jsx)("div",{className:c()("divider__notch",{"divider__notch--collapsed":o}),style:{"--collapseDelay":Object(s.c)(i+160)}})]});i.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=i},77:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){"use strict";var n=r(0),c=r(4),s=r.n(c),a=r(9),i=r(21),o=r(13),l=r(62),d=r(19),u=r(27),m=r(10),p=r(2),j=r(74),h=r(28),b=r(22),f=(r(80),r(1));const O=({onLoad:e,loaded:t,inViewport:r,srcSet:c,placeholder:h,delay:O,src:x,alt:g,play:v=!0,reveal:y,...w})=>{const _=Object(a.h)(),[A,N]=Object(n.useState)(!0),[R,z]=Object(n.useState)(!_),[$,I]=Object(n.useState)(!1),[E,S]=Object(n.useState)(!1),[T,M]=Object(n.useState)(!1),[k,C]=Object(n.useState)(),[D,B]=Object(n.useState)(),L=Object(n.useRef)(),P=Object(n.useRef)(),F=null===x||void 0===x?void 0:x.endsWith(".mp4"),H=x||(null===c||void 0===c?void 0:c.split(" ")[0]),Q=!u.a&&r;Object(n.useEffect)((()=>{const e=()=>{N(!1)},t=L.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(n.useEffect)((()=>{F&&c?(async()=>{const e=await Object(j.b)(c);B(e)})():F&&B(x)}),[F,x,c]),Object(n.useEffect)((()=>{const{width:e,height:t}=L.current;e&&t&&C({width:e,height:t})}),[]),Object(n.useEffect)((()=>{P.current&&D&&(v&&r?!r||_||u.a||(z(!0),P.current.play()):(z(!1),P.current.pause()))}),[r,v,_,D]);const U=e=>{e.preventDefault(),P.current.paused?(z(!0),P.current.play()):(z(!1),P.current.pause())},V=()=>{I(!0),M(!0)};return Object(f.jsxs)("div",{className:s()("image__element-wrapper",{"image__element-wrapper--reveal":y,"image__element-wrapper--in-viewport":r}),onMouseOver:F?()=>{I(!0),S(!0)}:void 0,onMouseOut:F?()=>S(!1):void 0,style:{"--delay":Object(p.c)(O+1e3)},children:[F&&Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:s()("image__element",{"image__element--loaded":t}),autoPlay:!_,role:"img",onLoadStart:e,src:D,"aria-label":g,ref:P,...w}),Object(f.jsx)(l.a,{in:E||T,onExit:d.b,onExited:()=>I(!1),timeout:{enter:0,exit:Object(p.b)(m.b.base.durationS)},children:e=>Object(f.jsx)(b.a,{visible:$,children:Object(f.jsxs)(i.a,{className:s()("image__button",`image__button--${e}`),onFocus:V,onBlur:()=>M(!1),onClick:U,children:[Object(f.jsx)(o.a,{icon:R?"pause":"play"}),R?"Pause":"Play"]})})})]}),!F&&Object(f.jsx)("img",{className:s()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:Q?H:void 0,srcSet:Q?c:void 0,width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,alt:g,...w}),A&&Object(f.jsx)("img",{"aria-hidden":!0,className:s()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(p.c)(O)},ref:L,src:h,onLoad:e=>{const{width:t,height:r}=e.target;C({width:t,height:r})},width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:r,delay:c=0,raised:i,src:o,...l})=>{const[d,u]=Object(n.useState)(!1),{themeId:m}=Object(h.c)(),j=Object(n.useRef)(),b=Object(a.d)(j,!(null!==o&&void 0!==o&&o.endsWith(".mp4"))),x=Object(n.useCallback)((()=>{u(!0)}),[]);return Object(f.jsx)("div",{className:s()("image",e,`image--${m}`,{"image--in-viewport":b,"image--reveal":r,"image--raised":i}),style:{...t,"--delay":Object(p.c)(c)},ref:j,children:Object(f.jsx)(O,{delay:c,onLoad:x,loaded:d,inViewport:b,reveal:r,src:o,...l})})}},80:function(e,t,r){},81:function(e,t,r){"use strict";r(72),r(82);var n=r(1);t.a=()=>Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Chammoun Chakhap.`})})},82:function(e,t,r){},83:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return a}));const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)c(e.material);else for(const t of e.material)c(t)}))},c=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},s=e=>{e.dispose(),e.forceContextLoss(),e=null},a=e=>{for(const t of e)t.parent.remove(t)}},84:function(e,t,r){},85:function(e,t,r){},89:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){},99:function(e,t,r){"use strict";r.r(t);var n,c=r(0),s=r(20),a=r(4),i=r.n(a),o=r(62),l=r(63),d=r(69),u=r(9),m=r(19),p=r(27),j=r(2);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function b({title:e,titleId:t,...r},s){return c.createElement("svg",h({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15",ref:s,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,n||(n=c.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"})))}const f=c.forwardRef(b);r.p;var O=r(10),x=r(64),g=r(67),v=r(28),y=r(22),w=(r(84),r(1));const _=Object(c.lazy)((()=>r.e(9).then(r.bind(null,103))));var A=function({id:e,sectionRef:t,disciplines:r,scrollIndicatorHidden:n,...s}){const a=Object(v.c)(),[h,b]=Object(c.useState)(0),A=Object(u.l)(),N=Object(u.i)(a),R=[r.slice(0,-1).join(", "),r.slice(-1)[0]].join(", and "),z=r.filter(((e,t)=>t===h)),$=`${e}-title`;return Object(u.e)((()=>{const e=(h+1)%r.length;b(e)}),5e3,a.themeId),Object(c.useEffect)((()=>{N&&N.themeId!==a.themeId&&b(0)}),[a.themeId,N]),Object(w.jsx)(g.a,{className:"intro",as:"section",ref:t,id:e,"aria-labelledby":$,tabIndex:-1,...s,children:Object(w.jsx)(o.a,{appear:!p.a,in:!p.a,timeout:3e3,onEnter:m.b,children:e=>Object(w.jsxs)(c.Fragment,{children:[!p.a&&Object(w.jsx)(c.Suspense,{fallback:null,children:Object(w.jsx)(_,{})}),Object(w.jsxs)("header",{className:"intro__text",children:[Object(w.jsx)("h1",{className:i()("intro__name",`intro__name--${e}`),id:$,children:Object(w.jsx)(d.a,{text:"Chammoun Chakhap",start:!p.a,delay:300})}),Object(w.jsxs)(x.a,{level:0,as:"h2",className:"intro__title",children:[Object(w.jsx)(y.a,{className:"intro__title-label",children:`Designer + ${R}`}),Object(w.jsx)(l.a,{className:i()("intro__title-row",{"intro__title-row--hidden":p.a}),component:"span",children:z.map((e=>Object(w.jsx)(o.a,{appear:!0,timeout:{enter:3e3,exit:2e3},onEnter:m.b,children:t=>Object(w.jsx)("span",{"aria-hidden":!0,className:i()("intro__title-word",`intro__title-word--${t}`),style:{"--delay":O.b.base.durationL},children:e})},e)))}),Object(w.jsxs)("span",{"aria-hidden":!0,className:i()("intro__title-row",{"intro__title-row--hidden":p.a}),children:[Object(w.jsx)("span",{className:i()("intro__title-word",`intro__title-word--${e}`),style:{"--delay":O.b.base.durationXS},children:"Developer"}),Object(w.jsx)("span",{className:i()("intro__title-line",`intro__title-line--${e}`)})]})]})]}),A.width>j.a.tablet&&Object(w.jsx)("div",{className:i()("intro__scroll-indicator",`intro__scroll-indicator--${e}`,{"intro__scroll-indicator--hidden":n}),status:e}),A.width<=j.a.tablet&&Object(w.jsx)("div",{className:i()("intro__mobile-scroll-indicator",`intro__mobile-scroll-indicator--${e}`,{"intro__mobile-scroll-indicator--hidden":n}),children:Object(w.jsx)(f,{"aria-hidden":!0})})]})},a.themeId)})},N=r(21),R=r(76),z=r(87),$=r(88),I=r(86),E=r(73),S=r(74),T=r(83),M=r.p+"static/media/iphone-11.dfa3acae.glb",k=r.p+"static/media/macbook-pro.29527f3f.glb";const C="spring-up",D="laptop-open";var B={phone:{url:M,width:374,height:512,position:{x:0,y:0,z:0},animation:C},laptop:{url:k,width:1280,height:800,position:{x:0,y:0,z:0},animation:D}};r(85);const L="Frame",P="Screen";var F,H=({models:e,show:t=!0,showDelay:r=0,cameraPosition:n={x:0,y:0,z:8},enableControls:s,style:a,className:o,alt:l,...d})=>{const[m,p]=Object(c.useState)(),[h,b]=Object(c.useState)(!1),f=Object(c.useRef)(),O=Object(c.useRef)(),x=Object(c.useRef)(),g=Object(c.useRef)(),v=Object(c.useRef)(),y=Object(c.useRef)(),_=Object(c.useRef)(),A=Object(c.useRef)(),N=Object(c.useRef)(),M=Object(c.useRef)(),k=Object(c.useRef)(),B=Object(c.useRef)(),F=Object(c.useRef)(),H=Object(c.useRef)(),Q=Object(c.useRef)(),U=Object(c.useRef)(),V=Object(c.useRef)(),W=Object(c.useRef)(),X=Object(c.useRef)(),J=Object(u.d)(f,!1,{threshold:.4}),q=Object(u.h)();Object(c.useEffect)((()=>{const{clientWidth:t,clientHeight:c}=f.current;A.current=new R.tb({canvas:O.current,alpha:!0,antialias:!1,powerPreference:"high-performance"}),A.current.setPixelRatio(2),A.current.setSize(t,c),A.current.outputEncoding=R.ub,A.current.physicallyCorrectLights=!0,x.current=new R.T(36,t/c,.1,100),x.current.position.set(n.x,n.y,n.z),_.current=new R.cb,g.current=new R.kb,v.current=new I.a,y.current=new R.n;const s=new R.a(16777215,1.2),a=new R.j(16777215,1.1),i=new R.j(16777215,.8);i.position.set(-6,2,2),a.position.set(.5,0,.866),V.current=[s,a,i],V.current.forEach((e=>_.current.add(e))),N.current=new R.n,_.current.add(N.current),N.current.position.set(0,0,-.8),N.current.rotateX(Math.PI/2);const o=512;M.current=new R.sb(o,o),M.current.texture.generateMipmaps=!1,k.current=new R.sb(o,o),k.current.texture.generateMipmaps=!1;const l=new R.U(8,8).rotateX(Math.PI/2),d=new R.H({map:M.current.texture,opacity:.8,transparent:!0});U.current=new R.G(l,d),U.current.scale.y=-1,N.current.add(U.current),W.current=new R.G(l),W.current.visible=!1,N.current.add(W.current);const u=new R.H({color:16777215,opacity:0,transparent:!0});X.current=new R.G(l,u),X.current.rotateX(Math.PI),X.current.position.y-=1e-5,N.current.add(X.current),B.current=new R.S(-4,4,4,-4,0,1.5),B.current.rotation.x=Math.PI/2,N.current.add(B.current),F.current=new R.I,F.current.userData.darkness={value:3},F.current.onBeforeCompile=e=>{e.uniforms.darkness=F.current.userData.darkness,e.fragmentShader=`\n        uniform float darkness;\n        ${e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}\n      `},F.current.depthTest=!1,F.current.depthWrite=!1,H.current=new R.db(z.a),H.current.depthTest=!1,Q.current=new R.db($.a),Q.current.depthTest=!1;const m=async(e,t)=>{e.encoding=R.ub,e.minFilter=R.y,e.magFilter=R.y,e.flipY=!1,e.anisotropy=A.current.capabilities.getMaxAnisotropy(),e.generateMipmaps=!1,await A.current.initTexture(e),t.material.color=new R.i(16777215),t.material.transparent=!1,t.material.map=e},j=e.map((async(e,t)=>{const{texture:n,position:c,url:s}=e;let a;const[i,o]=await Promise.all([await v.current.loadAsync(s),await g.current.loadAsync(n.placeholder)]);i.scene.traverse((async e=>{e.material&&(e.material.color=new R.i(2039845),e.material.color.convertSRGBToLinear()),e.name===P&&(m(o,e),a=async()=>{const t=await Object(S.a)(n),r=await g.current.loadAsync(t);await m(r,e)})})),y.current.add(i.scene);const l=function({model:e,gltf:t,reduceMotion:r,renderFrame:n,index:c,showDelay:s}){const a=new R.qb(e.position.x,e.position.y,e.position.z);if(r)return void t.scene.position.set(...a.toArray());if(e.animation===C){const e=new R.qb(a.x,a.y-1,a.z),r=a;t.scene.position.set(...e.toArray());const i=Object(E.d)(t.scene.position,(({x:e,y:r,z:c})=>{t.scene.position.set(e,r,c),n()}));return{animation:Object(E.a)(Object(E.b)(300*c+.6*s),Object(E.c)({from:e,to:r,stiffness:60,damping:16,restSpeed:.001})),modelValue:i}}if(e.animation===D){const e=t.scene.children.find((e=>e.name===L)),r=new R.qb(R.E.degToRad(90),0,0),i=new R.qb(0,0,0);t.scene.position.set(...a.toArray()),e.rotation.set(...r.toArray());const o=Object(E.d)(e.rotation,(({x:t,y:r,z:c})=>{e.rotation.set(t,r,c),n()}));return{animation:Object(E.a)(Object(E.b)(300*c+s+200),Object(E.c)({from:r,to:i,stiffness:50,damping:14,restSpeed:.001})),modelValue:o}}}({model:e,gltf:i,position:c,reduceMotion:q,renderFrame:Y,index:t,showDelay:r});return{...l,loadFullResTexture:a}}));return p(j),()=>{Object(T.c)(V.current),Object(T.b)(_.current),Object(T.a)(A.current)}}),[]);const G=Object(c.useCallback)((e=>{W.current.visible=!0,W.current.material=H.current,W.current.material.uniforms.tDiffuse.value=M.current.texture,H.current.uniforms.h.value=e*(1/256),A.current.setRenderTarget(k.current),A.current.render(W.current,B.current),W.current.material=Q.current,W.current.material.uniforms.tDiffuse.value=k.current.texture,Q.current.uniforms.v.value=e*(1/256),A.current.setRenderTarget(M.current),A.current.render(W.current,B.current),W.current.visible=!1}),[]),Y=Object(c.useCallback)((()=>{const e=_.current.background;_.current.background=null,_.current.overrideMaterial=F.current,A.current.setRenderTarget(M.current),A.current.render(_.current,B.current),_.current.overrideMaterial=null,G(5),G(2),A.current.setRenderTarget(null),_.current.background=e,A.current.render(_.current,x.current)}),[G]);return Object(c.useEffect)((()=>{let e=[];if(!m)return;_.current.add(y.current);return t&&(async()=>{const t=await Promise.all(m);b(!0);const r=t.map((async t=>{if(t.animation){const r=t.animation.start(t.modelValue);e.push(r)}q&&Y(),await t.loadFullResTexture(),q&&Y()}));await Promise.all(r)})(),()=>{for(const t of e)t.stop()}}),[m,q,Y,t]),Object(c.useEffect)((()=>{let e,t;const r=r=>{const{rotation:n}=y.current,{innerWidth:c,innerHeight:s}=window,a=(r.clientX-c/2)/c,i=(r.clientY-s/2)/s;t||(t=Object(E.d)({x:n.x,y:n.y},(({x:e,y:t})=>{n.set(e,t,n.z),Y()}))),e=Object(E.c)({from:t.get(),to:{x:i/2,y:a/2},stiffness:40,damping:40,velocity:t.getVelocity(),restSpeed:1e-5,mass:1.4}).start(t)};return J&&!q&&window.addEventListener("mousemove",r),()=>{var t;window.removeEventListener("mousemove",r),null===(t=e)||void 0===t||t.stop()}}),[J,q,Y]),Object(c.useEffect)((()=>{const e=()=>{if(!f.current)return;const{clientWidth:e,clientHeight:t}=f.current;A.current.setSize(e,t),x.current.aspect=e/t,x.current.updateProjectionMatrix(),Y()};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[Y]),Object(w.jsx)("div",{className:i()("model",{"model--loaded":h},o),style:{"--delay":Object(j.c)(r),...a},ref:f,role:"img","aria-label":l,...d,children:Object(w.jsx)("canvas",{className:"model__canvas",ref:O})})},Q=r(75);function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}function V({title:e,titleId:t,...r},n){return c.createElement("svg",U({"aria-hidden":"true",fill:"currentColor",width:750,height:137,viewBox:"0 0 750 137",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,F||(F=c.createElement("path",{d:"M113.904 33.552l-.288 1.152a18.13 18.13 0 0 1-.432 1.44l-.864 3.744c-11.808 46.224-36.864 75.312-82.656 95.76-4.752-9.648-8.784-15.12-18.144-24.192 38.304-11.952 64.224-37.44 72.432-70.992H23.76c-15.264.144-18.72.288-23.76.864v-25.92c5.472.864 9.504 1.152 24.192 1.152h73.44c.432-8.928 7.344-15.552 16.128-15.552 9.072 0 16.272 7.2 16.272 16.272s-7.056 16.128-16.128 16.272zm-.144-24.48c-4.464 0-8.208 3.744-8.208 8.208 0 4.32 3.744 8.064 8.208 8.064s8.208-3.744 8.208-8.064c0-4.464-3.744-8.208-8.208-8.208zm104.528 111.024h-61.776v9.936h-26.208c.864-7.92 1.152-12.816 1.152-23.472V32.544c0-6.192-.144-10.656-.576-16.56 5.04.432 7.92.576 17.424.576h77.616c8.928 0 11.088 0 17.856-.576-.288 5.04-.432 10.224-.432 16.992v73.008c0 11.088.288 18 1.008 23.76h-26.064v-9.648zm0-23.04V39.6h-61.776v57.456h61.776zm45.776-68.688L276.88 7.92c15.84 5.76 31.392 12.96 41.328 19.008L305.392 48.96C292 40.032 276.88 32.544 264.064 28.368zm73.008-16.992l14.256-4.752c5.04 6.624 9.36 14.688 12.672 22.896l-14.256 5.184c-3.888-9.504-7.488-16.272-12.672-23.328zm-84.24 52.416L266.08 43.2c15.408 6.048 28.944 12.816 40.176 20.448l-12.24 22.608c-10.368-8.064-26.496-16.848-41.184-22.464zM357.808 4.608L371.344 0c4.752 6.048 8.784 12.816 12.816 22.176l-13.824 5.04c-4.032-9.504-7.776-16.272-12.528-22.608zm-93.6 128.88l-7.2-27.36c12.672 0 30.96-3.888 44.352-9.216 26.928-10.656 45.936-31.824 56.16-62.928 6.912 7.776 13.536 13.392 21.168 18C360.4 97.2 327.712 121.968 274.432 131.04c-5.04 1.008-7.344 1.584-10.224 2.448zM449.952 64.8v42.912h22.464c9.216 0 13.68-.144 19.44-.864v21.888c-5.184-.432-9.216-.576-19.44-.576h-66.96c-10.512 0-12.672 0-19.584.576v-21.888c5.328.72 8.928.864 19.44.864h21.6V64.8h-13.248c-9.504 0-12.528.144-18.72.72V43.488c5.616.72 9.936 1.008 18.576 1.008h50.256c9.216 0 13.248-.288 18.864-1.008V65.52c-4.032-.432-9.936-.72-18.864-.72h-13.824zm97.472-62.064l27.216 4.896c-.72 1.296-1.008 1.728-1.728 3.6-.288.432-.576 1.296-1.008 2.16-.576 1.44-1.008 2.448-1.296 3.024-1.872 4.176-1.872 4.176-2.88 6.192l36.144-.432c5.616 0 7.2-.288 10.656-1.584L626.48 32.4c-1.728 2.88-2.16 3.744-4.176 10.224-7.344 23.904-17.136 42.624-29.808 57.024C579.392 114.624 563.12 126 539.504 136.8c-4.752-9.216-9.216-14.832-17.28-21.888 20.448-7.488 35.424-16.704 48.096-29.376 10.656-10.8 18.72-24.336 24.048-40.896l-38.304.432c-9.36 14.832-19.008 25.344-32.688 36.144-7.344-8.352-10.944-11.52-20.448-17.28 17.568-12.384 28.944-25.488 38.304-43.92 3.744-7.488 5.472-12.24 6.192-17.28zm137.936 130.32h-27.792c.576-6.48.864-10.656.864-22.032V27.216c0-11.664-.144-13.104-1.008-20.88h27.792c-.576 4.176-.72 11.376-.72 21.024v19.728c24.48 8.064 43.056 16.56 65.52 29.952l-13.68 24.48c-13.968-9.648-30.96-19.008-45.36-25.056-5.04-2.016-5.04-2.016-6.48-2.88v37.44c0 9.648.288 16.848.864 22.032z"})))}const W=c.forwardRef(V);r.p;var X=r(65);r(89);var J,q=({id:e,visible:t,sectionRef:r,index:n,title:s,description:a,model:l,buttonText:d,buttonLink:p,alternate:h,...b})=>{const f=Object(v.c)(),{width:O}=Object(u.l)(),y=`${e}-title`,_=O<=j.a.tablet,A="light"===f.themeId?.7:1,R=n<10?`0${n}`:n,z=`(max-width: ${j.a.tablet}px) 30vw, 20vw`,$=`(max-width: ${j.a.tablet}px) 80vw, 40vw`,I=e=>Object(w.jsxs)("div",{className:"project-summary__details",children:[Object(w.jsxs)("div",{"aria-hidden":!0,className:"project-summary__index",children:[Object(w.jsx)(Q.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(w.jsx)("span",{className:i()("project-summary__index-number",`project-summary__index-number--${e}`),children:R})]}),Object(w.jsx)(x.a,{level:3,as:"h2",className:i()("project-summary__title",`project-summary__title--${e}`),id:y,children:s}),Object(w.jsx)(X.a,{className:i()("project-summary__description",`project-summary__description--${e}`),children:a}),Object(w.jsx)("div",{className:i()("project-summary__button",`project-summary__button--${e}`),children:Object(w.jsx)(N.a,{iconHoverShift:!0,href:p,iconEnd:"arrowRight",children:d})})]}),E=e=>Object(w.jsxs)("div",{className:"project-summary__preview",children:["laptop"===l.type&&Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(W,{style:{"--opacity":A},className:i()("project-summary__svg","project-summary__svg--laptop",`project-summary__svg--${e}`,{"project-summary__svg--light":"light"===f.themeId})}),Object(w.jsx)(H,{className:i()("project-summary__model","project-summary__model--laptop"),alt:l.alt,cameraPosition:{x:0,y:0,z:8},showDelay:800,show:Object(m.a)(e),models:[{...B.laptop,texture:{...l.textures[0],sizes:$}}]})]}),"phone"===l.type&&Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(W,{style:{"--opacity":A},className:i()("project-summary__svg","project-summary__svg--phone",`project-summary__svg--${e}`,{"project-summary__svg--light":"light"===f.themeId})}),Object(w.jsx)(H,{className:i()("project-summary__model","project-summary__model--phone"),alt:l.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:500,show:Object(m.a)(e),models:[{...B.phone,position:{x:-.6,y:1.1,z:0},texture:{...l.textures[0],sizes:z}},{...B.phone,position:{x:.6,y:-.5,z:.3},texture:{...l.textures[1],sizes:z}}]})]}),"3phones"===l.type&&Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(W,{style:{"--opacity":A},className:i()("project-summary__svg","project-summary__svg--phone",`project-summary__svg--${e}`,{"project-summary__svg--light":"light"===f.themeId})}),Object(w.jsx)(H,{className:i()("project-summary__model","project-summary__model--3phones"),alt:l.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:500,show:Object(m.a)(e),models:[{...B.phone,position:{x:-1.6,y:1,z:0},texture:{...l.textures[0],sizes:z}},{...B.phone,position:{x:0,y:1,z:1.5},texture:{...l.textures[1],sizes:z}},{...B.phone,position:{x:1.6,y:1,z:0},texture:{...l.textures[2],sizes:z}}]})]})]});return Object(w.jsx)(g.a,{className:i()("project-summary",{"project-summary--alternate":h,"project-summary--first":"01"===n}),as:"section","aria-labelledby":y,ref:r,id:e,tabIndex:-1,...b,children:Object(w.jsx)("div",{className:"project-summary__content",children:Object(w.jsx)(o.a,{in:t,timeout:0,onEnter:m.b,children:e=>Object(w.jsxs)(c.Fragment,{children:[!h&&!_&&Object(w.jsxs)(c.Fragment,{children:[I(e),E(e)]}),(h||_)&&Object(w.jsxs)(c.Fragment,{children:[E(e),I(e)]})]})})})})},G=r(72),Y=r(79),K="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wgARCAAOAAwDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgQD/9oADAMBAAIQAxAAAACm+aiJ0VCWX//EAB0QAAICAQUAAAAAAAAAAAAAAAIDAAQVBQYxUmL/2gAIAQEAAT8Aqbqe0iWUzTe0XpIjYMhLmYz3P//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMTIf/aAAgBAgEBPwB0yHw3MWc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECERP/2gAIAQMBAT8AikSqzIxP/9k=";function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z.apply(this,arguments)}function ee({title:e,titleId:t,...r},n){return c.createElement("svg",Z({"aria-hidden":"true",fill:"currentColor",width:135,height:765,viewBox:"0 0 135 765",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,J||(J=c.createElement("path",{d:"M32.544 651.088l1.152.288c.576.144 1.008.288 1.44.432l3.744.864c46.224 11.808 75.312 36.864 95.76 82.656-9.648 4.752-15.12 8.784-24.192 18.144-11.952-38.304-37.44-64.224-70.992-72.432v60.192c.144 15.264.288 18.72.864 23.76H14.4c.864-5.472 1.152-9.504 1.152-24.192v-73.44C6.624 666.928 0 660.016 0 651.232c0-9.072 7.2-16.272 16.272-16.272s16.128 7.056 16.272 16.128zm-24.48.144c0 4.464 3.744 8.208 8.208 8.208 4.32 0 8.064-3.744 8.064-8.208s-3.744-8.208-8.064-8.208c-4.464 0-8.208 3.744-8.208 8.208zm111.024-104.528v61.776h9.936v26.208c-7.92-.864-12.816-1.152-23.472-1.152H31.536c-6.192 0-10.656.144-16.56.576.432-5.04.576-7.92.576-17.424v-77.616c0-8.928 0-11.088-.576-17.856 5.04.288 10.224.432 16.992.432h73.008c11.088 0 18-.288 23.76-1.008v26.064h-9.648zm-23.04 0H38.592v61.776h57.456v-61.776zM12.96 403.44l12.528-12.96c2.448 1.584 3.168 1.872 8.064 3.024 26.784 6.48 44.784 15.12 61.2 28.944 15.984 13.392 27.504 29.52 39.168 54.864-10.944 5.616-14.832 8.64-24.192 18.144-6.768-20.736-15.552-35.856-28.224-48.528-12.24-12.096-25.344-19.44-42.624-23.904v59.76c0 13.968.144 16.56.864 24.192H13.68c1.008-6.192 1.152-10.512 1.152-24.624v-68.4c0-4.752-.432-7.344-1.872-10.512zm13.968-106.112l13.824-20.16c1.584 1.872 1.584 1.872 5.04 5.04 8.64 7.776 16.272 16.56 23.472 26.64h44.352c9.36 0 14.688-.144 19.872-.864v25.632c-5.616-.72-9.36-1.008-19.872-1.008H83.52c7.344 12.24 9.36 16.848 16.992 37.584-7.92 3.168-13.392 6.48-20.448 12.24-6.192-22.176-15.12-41.328-27.36-58.32-8.784-12.24-18.432-22.32-25.776-26.784zm55.584-35.264H54.72c1.008-6.768 1.296-14.544 1.296-29.52v-68.832c0-14.4-.288-19.872-1.296-29.52h27.792c-.72 6.912-.864 13.248-.864 29.664V232.4c0 16.128.144 20.88.864 29.664zM8.352 113.76l1.584-27.216c4.896.576 4.896.576 33.408 1.584 30.096.864 46.08 3.744 61.776 10.656 10.656 4.752 18.432 10.224 28.8 20.016-9.648 7.344-13.68 11.376-20.16 20.592-7.344-8.208-13.392-12.672-22.896-17.136-14.112-6.768-31.968-9.072-69.264-9.072-6.336 0-9.504.144-13.248.576zm-.72-40.896V45.792c5.904.864 8.208 1.008 16.704 1.152l75.456.72c-4.896-7.776-9.072-12.384-15.84-17.28-7.344-5.184-14.832-8.64-24.624-11.232C68.256 11.952 72 8.208 78.336 0c16.128 6.48 27.216 13.968 36.576 24.912 7.344 8.64 11.088 15.696 16.416 30.24 1.44 4.032 1.872 5.184 3.024 7.056l-12.96 12.384c-3.744-1.296-6.192-1.584-12.096-1.584l-85.248-.72h-5.184c-4.608 0-7.776.144-11.232.576z"})))}const te=c.forwardRef(ee);r.p,r(90);const re=({status:e,titleId:t})=>Object(w.jsxs)(c.Fragment,{children:[Object(w.jsx)(x.a,{className:i()("profile__title",`profile__title--${e}`),level:3,id:t,children:Object(w.jsx)(d.a,{text:"Hi there",start:"exited"!==e,delay:500})}),Object(w.jsxs)(X.a,{className:i()("profile__description",`profile__description--${e}`),size:"l",children:["I'm Chammoun, and building Frontend and Mobile applications is what I love. Because I'm at ease with programming, I can quickly validate my experience. Visit my ",Object(w.jsx)(G.a,{href:"https://github.com/Chammounc",children:"github page"})," if you're curious about the projects I have built or my"," ",Object(w.jsx)(G.a,{href:"/uses",children:"uses page"})," to know more about the tools I normally use for development."]}),Object(w.jsx)(X.a,{className:i()("profile__description",`profile__description--${e}`),size:"l",children:"In my spare time I like to play video games. I\u2019m always down to meeting new people, so feel free to drop me a line."})]});var ne=({id:e,visible:t,sectionRef:r})=>{const n=`${e}-title`;return Object(w.jsx)(g.a,{className:"profile",as:"section",id:e,ref:r,"aria-labelledby":n,tabIndex:-1,children:Object(w.jsx)(o.a,{in:t,timeout:0,onEnter:m.b,children:e=>Object(w.jsxs)("div",{className:"profile__content",children:[Object(w.jsxs)("div",{className:"profile__column",children:[Object(w.jsx)(re,{status:e,titleId:n}),Object(w.jsx)(N.a,{secondary:!0,className:i()("profile__button",`profile__button--${e}`),href:"/contact",icon:"send",children:"Send me a message"})]}),Object(w.jsxs)("div",{className:"profile__column",children:[Object(w.jsxs)("div",{className:"profile__tag","aria-hidden":!0,children:[Object(w.jsx)(Q.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(w.jsx)("div",{className:i()("profile__tag-text",`profile__tag-text--${e}`),children:"About Me"})]}),Object(w.jsxs)("div",{className:"profile__image-wrapper",children:[Object(w.jsx)(Y.a,{reveal:!0,delay:100,placeholder:K,srcSet:`${K} 480w, ${K} 960w`,sizes:`(max-width: ${j.a.mobile}px) 100vw, 480px`,alt:"To shy to upload my own picture hehehehehe"}),Object(w.jsx)(te,{className:i()("profile__svg",`profile__svg--${e}`)})]})]})]})})})},ce=r(81),se=r(5),ae=r.p+"static/media/mmojo1.96085133.png",ie=r.p+"static/media/mmojo2.42b934f1.png",oe=r.p+"static/media/mmojo1ph.2681ef0a.jpg",le=r.p+"static/media/mmojo2ph.a1627436.jpg",de=r.p+"static/media/ts3js.153dd6bf.png",ue=r.p+"static/media/ts3jsph.ba02e86e.jpg",me=r.p+"static/media/bijou.06b12dd8.png",pe=r.p+"static/media/blue1.bbfb0490.png",je=r.p+"static/media/blue1ph.3630ae05.jpg",he=r.p+"static/media/blue2.b21547df.png",be=r.p+"static/media/blue2ph.730e9371.jpg",fe=r.p+"static/media/blue3.a9cf70e0.png",Oe=r.p+"static/media/blue3ph.a26ae199.jpg";r(91);const xe=["Frontend","Mobile App"];t.default=()=>{const{status:e}=Object(u.j)(),{hash:t,state:r}=Object(se.f)(),n=Object(c.useRef)(!0),[a,i]=Object(c.useState)([]),[o,l]=Object(c.useState)(!1),d=Object(c.useRef)(),m=Object(c.useRef)(),p=Object(c.useRef)(),j=Object(c.useRef)(),h=Object(c.useRef)(),b=Object(c.useRef)(),f=Object(u.h)();return Object(c.useEffect)((()=>{const e=[d,m,p,j,h,b],t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const r=e.target;if(t.unobserve(r),a.includes(r))return;i((e=>[...e,r]))}}))}),{rootMargin:"0px 0px -10% 0px"}),r=new IntersectionObserver((([e])=>{l(!e.isIntersecting)}),{rootMargin:"-100% 0px 0px 0px"});return e.forEach((e=>{t.observe(e.current)})),r.observe(d.current),()=>{t.disconnect(),r.disconnect()}}),[a]),Object(c.useEffect)((()=>{const r="entered"===e,c="scrollBehavior"in document.documentElement.style;let s,a;const i=(e,t)=>{clearTimeout(a);const r=[d,m,b],n=e.replace("#",""),i=r.filter((e=>e.current.id===n))[0];if(!i)return;const o=t&&!f?"smooth":"instant",l=i.current.offsetTop;s=new IntersectionObserver(((e,t)=>{const[r]=e;r.isIntersecting&&(a=setTimeout((()=>{i.current.focus()}),f?0:400),t.unobserve(r.target))}),{rootMargin:"-20% 0px -20% 0px"}),s.observe(i.current),c?window.scroll({top:l,left:0,behavior:o}):window.scrollTo(0,l)};return t&&n.current&&r?(i(t,!1),n.current=!1):!t&&n.current&&r?(window.scrollTo(0,0),n.current=!1):r&&i(t,!0),()=>{clearTimeout(a),s&&s.disconnect()}}),[t,r,f,e]),Object(w.jsxs)("div",{className:"home",children:[Object(w.jsxs)(s.a,{children:[Object(w.jsx)("title",{children:"Portfolio "}),Object(w.jsx)("meta",{name:"description",content:"Portfolio of Chammoun Chakhap \u2013 a backend devloper working on node apps"}),Object(w.jsx)("link",{rel:"prefetch",href:M,as:"fetch",crossorigin:""}),Object(w.jsx)("link",{rel:"prefetch",href:k,as:"fetch",crossorigin:""})]}),Object(w.jsx)(A,{id:"intro",sectionRef:d,disciplines:xe,scrollIndicatorHidden:o}),Object(w.jsx)(q,{id:"project-1",sectionRef:m,visible:a.includes(m.current),index:1,title:"tShirt3JS",description:"T-Shirt Designing with ThreeJS and OpenAI's DALLE 2",buttonText:"View Project",buttonLink:"https://dalle-ai-threejs.netlify.app/",model:{type:"laptop",alt:"tShirt3JS",textures:[{src:de,srcSet:`${de} 980w, ${de} 1376w`,placeholder:ue}]}}),Object(w.jsx)(q,{id:"project-2",alternate:!0,sectionRef:p,visible:a.includes(p.current),index:2,title:"Blue",description:"Find my device app for Android",buttonText:"View Project",buttonLink:"https://github.com/ChammounC/blue",model:{type:"3phones",alt:"Blue",textures:[{src:pe,srcSet:`${pe} 254w, ${pe} 508w`,placeholder:je},{src:he,srcSet:`${he} 254w, ${he} 508w`,placeholder:be},{src:fe,srcSet:`${fe} 254w, ${fe} 508w`,placeholder:Oe}]}}),Object(w.jsx)(q,{id:"project-3",sectionRef:j,visible:a.includes(j.current),index:3,title:"Bijou",description:"A French Inspired Restaurant Website",buttonText:"View Project",buttonLink:"https://bijou.netlify.app/",model:{type:"laptop",alt:"bijou",textures:[{src:me,srcSet:`${me} 980w, ${me} 1376w`,placeholder:me}]}}),Object(w.jsx)(q,{id:"project-4",alternate:!0,sectionRef:h,visible:a.includes(h.current),index:4,title:"Manga Mojo",description:"Flutter App to fetch Anime and Manga Details",buttonText:"View Project",buttonLink:"https://github.com/ChammounC/manga_mojo",model:{type:"phone",alt:"Manga Mojo",textures:[{src:ie,srcSet:`${ie} 254w, ${ie} 508w`,placeholder:le},{src:ae,srcSet:`${ae} 254w, ${ae} 508w`,placeholder:oe}]}}),Object(w.jsx)(ne,{sectionRef:b,visible:a.includes(b.current),id:"details"}),Object(w.jsx)(ce.a,{})]})}}}]);
//# sourceMappingURL=4.9ea58e83.chunk.js.map