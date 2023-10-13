(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(4),s=a.n(c),i=a(63),o=a(62),r=a(20),l=(a(92),a(1));var d=({className:e,resize:t="none",value:a,onChange:c,minRows:i=1,maxRows:o,...r})=>{const[d,u]=Object(n.useState)(i),[b,h]=Object(n.useState)(),j=Object(n.useRef)();Object(n.useEffect)((()=>{const e=getComputedStyle(j.current),t=parseInt(e.lineHeight,10),a=parseInt(e.paddingTop,10)+parseInt(e.paddingBottom,10);h({lineHeight:t,paddingHeight:a})}),[]);return Object(l.jsx)("textarea",{className:s()("textarea",e),ref:j,onChange:e=>{c(e);const{lineHeight:t,paddingHeight:a}=b,n=e.target.rows;e.target.rows=i;const s=~~((e.target.scrollHeight-a)/t);s===n&&(e.target.rows=s),o&&s>=o&&(e.target.rows=o,e.target.scrollTop=e.target.scrollHeight),u(o&&s>o?o:s)},style:{"--resize":t},rows:d,value:a,...r})},u=a(9),b=a(19),h=a(10),j=a(2),m=a(13);a(93);var p=({id:e,label:t,hasValue:a,value:c,multiline:r,className:p,style:O,error:_,onBlur:g,...f})=>{const[x,v]=Object(n.useState)(!1),y=Object(u.c)(),N=Object(n.useRef)(),w=e||`input-${y}`,$=`${w}-label`,S=`${w}-error`,M=r?d:"input";return Object(l.jsxs)("div",{className:s()("input",p,{"input--error":!!_}),style:O,children:[Object(l.jsxs)("div",{className:"input__content",children:[Object(l.jsx)("label",{className:s()("input__label",{"input__label--focused":x,"input__label--has-value":!!c}),id:$,htmlFor:w,children:t}),Object(l.jsx)(M,{className:"input__element",id:w,"aria-labelledby":$,"aria-describedby":_?S:void 0,onFocus:()=>v(!0),onBlur:e=>{v(!1),g&&g(e)},value:c,...f}),Object(l.jsx)("div",{className:s()("input__underline",{"input__underline--focused":x})})]}),Object(l.jsx)(i.a,{component:null,children:!!_&&Object(l.jsx)(o.a,{timeout:Object(j.b)(h.b.base.durationM),children:e=>{var t;return Object(l.jsx)("div",{className:s()("input__error",`input__error--${e}`),id:S,role:"alert",style:{"--height":Object(b.a)(e)?Object(j.d)(null===(t=N.current)||void 0===t?void 0:t.getBoundingClientRect().height):"0px"},children:Object(l.jsxs)("div",{className:"input__error-message",ref:N,children:[Object(l.jsx)(m.a,{icon:"error"}),_]})})}})})]})},O=a(69),_=a(75),g=a(21),f=a(67),x=a(27),v=a(64),y=a(65);a(94);const N=h.b.base.durationS;function w(e,t=Object(j.c)(0),a=1){const n=Object(j.b)(e)*a;return{"--delay":Object(j.c)((Object(j.b)(t)+n).toFixed(0))}}t.default=()=>{const{status:e}=Object(u.j)(),t=Object(n.useRef)(),a=Object(u.b)(""),c=Object(u.b)(""),[d,$]=Object(n.useState)(!1),[S,M]=Object(n.useState)(!1),[H,C]=Object(n.useState)("");Object(u.k)();const k=Object(n.useCallback)((async e=>{if(e.preventDefault(),C(""),!d)try{$(!0);const e=await fetch("https://portfolio-email-poaw.onrender.com/mail",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.value,message:c.value})}),t=await e.json(),n=function({status:e,errorMessage:t,fallback:a="There was a problem with your request"}){return 200!==e&&(t||{500:"There was a problem with the server, try again later",404:"There was a problem connecting to the server. Make sure you are connected to the internet"}[e]||a)}({status:null===e||void 0===e?void 0:e.status,errorMessage:null===t||void 0===t?void 0:t.error,fallback:"There was a problem sending your message"});if(n)throw new Error(n);M(!0),$(!1)}catch(t){$(!1),C(t.message)}}),[a.value,c.value,d]);return Object(l.jsxs)(f.a,{className:s()("contact",`contact--${e}`),children:[Object(l.jsxs)(r.a,{children:[Object(l.jsx)("title",{children:"Contact | Chammoun Chakhap"}),Object(l.jsx)("meta",{name:"description",content:"Send me a message if you\u2019re interested in discussing a project or if you just want to say hi"})]}),Object(l.jsxs)(i.a,{component:null,children:[!S&&Object(l.jsx)(o.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:1600,onEnter:b.b,children:e=>Object(l.jsxs)("form",{className:"contact__form",method:"post",onSubmit:k,children:[Object(l.jsx)(v.a,{className:s()("contact__title",`contact__title--${e}`,{"contact__title--hidden":x.a}),level:3,as:"h1",style:w(h.b.base.durationXS,N,.3),children:Object(l.jsx)(O.a,{text:"Say hello",start:"exited"!==e&&!x.a,delay:300})}),Object(l.jsx)(_.a,{className:s()("contact__divider",`contact__divider--${e}`,{"contact__divider--hidden":x.a}),style:w(h.b.base.durationXS,N,.4)}),Object(l.jsx)(p,{required:!0,className:s()("contact__input",`contact__input--${e}`,{"contact__input--hidden":x.a}),style:w(h.b.base.durationXS,N),autoComplete:"email",label:"Your Email",type:"email",maxLength:512,...a}),Object(l.jsx)(p,{required:!0,multiline:!0,className:s()("contact__input",`contact__input--${e}`,{"contact__input--hidden":x.a}),style:w(h.b.base.durationS,N),autoComplete:"off",label:"Message",maxLength:4096,...c}),Object(l.jsx)(i.a,{component:null,children:!!H&&Object(l.jsx)(o.a,{timeout:Object(j.b)(h.b.base.durationM),children:e=>{var a;return Object(l.jsx)("div",{className:s()("contact__form-error",`contact__form-error--${e}`),style:{"--height":Object(b.a)(e)?Object(j.d)(null===(a=t.current)||void 0===a?void 0:a.getBoundingClientRect().height):"0px"},children:Object(l.jsx)("div",{className:"contact__form-error-content",ref:t,children:Object(l.jsxs)("div",{className:"contact__form-error-message",children:[Object(l.jsx)(m.a,{className:"contact__form-error-icon",icon:"error"}),H]})})})}})}),Object(l.jsx)(g.a,{className:s()("contact__button",`contact__button--${e}`,{"contact__button--hidden":x.a,"contact__button--sending":d}),style:w(h.b.base.durationM,N),disabled:d,loading:d,loadingText:"Sending...",icon:"send",type:"submit",children:"Send Message"})]})}),S&&Object(l.jsx)(o.a,{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:b.b,timeout:0,children:e=>Object(l.jsxs)("div",{className:"contact__complete","aria-live":"polite",children:[Object(l.jsx)(v.a,{level:3,as:"h3",className:s()("contact__complete-title",`contact__complete-title--${e}`),children:"Message Sent"}),Object(l.jsx)(y.a,{size:"l",className:s()("contact__complete-text",`contact__complete-text--${e}`),style:w(h.b.base.durationXS),children:"I\u2019ll get back to you within a couple days, sit tight"}),Object(l.jsx)(g.a,{secondary:!0,iconHoverShift:!0,className:s()("contact__complete-button",`contact__complete-button--${e}`),style:w(h.b.base.durationM),href:"/",icon:"chevronRight",children:"Back to homepage"})]})})]})]})}},64:function(e,t,a){"use strict";var n=a(0),c=a(4),s=a.n(c),i=a(20),o=a.p+"static/media/gotham-bold.73ce573b.woff2",r=(a(66),a(1));t.a=({children:e,level:t=1,as:a,align:c="auto",weight:l="medium",className:d,...u})=>{const b=Math.min(Math.max(t,0),4),h=a||`h${Math.max(b,1)}`;return Object(r.jsxs)(n.Fragment,{children:["bold"===l&&Object(r.jsxs)(i.a,{children:[Object(r.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(r.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(r.jsx)(h,{className:s()(d,"heading",`heading--align-${c}`,`heading--level-${b}`,`heading--weight-${l}`),...u,children:e})]})}},65:function(e,t,a){"use strict";var n=a(4),c=a.n(n),s=(a(68),a(1));t.a=({children:e,size:t="m",as:a="p",align:n="auto",weight:i="auto",secondary:o,className:r,...l})=>Object(s.jsx)(a,{className:c()(r,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":o}),...l,children:e})},66:function(e,t,a){},67:function(e,t,a){"use strict";var n=a(0),c=a(4),s=a.n(c),i=(a(71),a(1));const o=Object(n.forwardRef)((({as:e="div",children:t,className:a,...n},c)=>Object(i.jsx)(e,{className:s()("section",a),ref:c,...n,children:t})));t.a=o},68:function(e,t,a){},69:function(e,t,a){"use strict";var n=a(0),c=a(4),s=a.n(c),i=a(9),o=a(73),r=a(22),l=a(27),d=(a(70),a(1));const u=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],b="glyph",h="value";const j=({text:e,start:t=!0,delay:a=0,className:c,...j})=>{const m=Object(n.useRef)([{type:b,value:""}]),p=Object(n.useRef)(),O=Object(i.h)();return Object(n.useEffect)((()=>{const n=p.current,c=e.split("");let s;const i=()=>{const e=m.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},r=Object(o.d)(0,(e=>{m.current=function(e,t,a){return e.map(((e,n)=>{if(n<a)return{type:h,value:e};if(a%1<.5){const e=Math.floor(Math.random()*u.length);return{type:b,value:u[e]}}return{type:b,value:t[n].value}}))}(c,m.current,e),i()}));return!t||s||O||l.a||(s=Object(o.a)(Object(o.b)(a),Object(o.c)({from:0,to:c.length,stiffness:8,damping:5})).start(r)),O&&(m.current=c.map(((e,t)=>({type:h,value:c[t]}))),i()),()=>{s&&s.stop()}}),[O,t,a,e]),Object(d.jsxs)("span",{className:s()("decoder-text",c),...j,children:[Object(d.jsx)(r.a,{className:"decoder-text__label",children:e}),Object(d.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:p})]})};t.a=Object(n.memo)(j)},70:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";var n=a(4),c=a.n(n),s=a(2),i=(a(77),a(1));const o=({lineWidth:e,lineHeight:t,notchWidth:a,notchHeight:n,collapseDelay:o,collapsed:r,className:l,style:d})=>Object(i.jsxs)("div",{className:c()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":a,"--notchHeight":n,"--collapseDelay":Object(s.c)(o),...d},children:[Object(i.jsx)("div",{className:c()("divider__line",{"divider__line--collapsed":r})}),Object(i.jsx)("div",{className:c()("divider__notch",{"divider__notch--collapsed":r}),style:{"--collapseDelay":Object(s.c)(o+160)}})]});o.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=o},77:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}}]);
//# sourceMappingURL=6.9b01f5a8.chunk.js.map