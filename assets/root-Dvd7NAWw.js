import{r as n,j as e}from"./jsx-runtime-DexIYAB0.js";import{a as F,t as G,T as Q,G as X,b as ee}from"./image-CXFcbJNj.js";import{E as te}from"./error-jZOf1AAF.js";import{V as se}from"./visually-hidden-Nl3am1h8.js";import{c as ne,B as q,I as T,g as ae,b as oe,m as E,a as re,n as ie,t as R}from"./heading-Dk5n6r7u.js";import{u as le}from"./useScrollToHash-BiWH78nd.js";import{u as ce}from"./useWindowSize-mzNSXuUf.js";import{c as p}from"./config-BtJ316CD.js";import{k as me,u as J,n as he,o as de,q as ue,L as S,s as V,c as fe,t as ge,M as W,v as Z,O as pe,S as U,b as ve}from"./components-D1Eb6D8q.js";import"./decoder-text-DtoJtKMc.js";import"./use-spring-DLbfl_FQ.js";import"./index-DorHdx8j.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let O="positions";function Y({getKey:t,...s}){let{isSpaMode:a}=me(),i=J(),o=he();de({getKey:t,storageKey:O});let l=n.useMemo(()=>{if(!t)return null;let r=t(i,o);return r!==i.key?r:null},[]);if(a)return null;let m=((r,v)=>{if(!window.history.state||!window.history.state.key){let x=Math.random().toString(32).slice(2);window.history.replaceState({key:x},"")}try{let k=JSON.parse(sessionStorage.getItem(r)||"{}")[v||window.history.state.key];typeof k=="number"&&window.scrollTo(0,k)}catch(x){console.error(x),sessionStorage.removeItem(r)}}).toString();return n.createElement("script",ue({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(O)}, ${JSON.stringify(l)})`}}))}const xe="_monogram_1mxlb_2",_e="_highlight_1mxlb_7",A={monogram:xe,highlight:_e},be=n.forwardRef(({highlight:t,className:s,...a},i)=>{const l=`${n.useId()}monogram-clip`;return e.jsxs("svg",{"aria-hidden":!0,className:ne(A.monogram,s),width:"48",height:"29",viewBox:"0 0 48 29",ref:i,...a,children:[e.jsx("defs",{children:e.jsx("clipPath",{id:l,children:e.jsx("path",{d:"M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z"})})}),e.jsx("rect",{clipPath:`url(#${l})`,width:"100%",height:"100%"}),t&&e.jsx("g",{clipPath:`url(#${l})`,children:e.jsx("rect",{className:A.highlight,width:"100%",height:"100%"})})]})}),je="_toggle_1lvbt_2",ke="_inner_1lvbt_17",ye="_icon_1lvbt_25",N={toggle:je,inner:ke,icon:ye},Ne=({menuOpen:t,...s})=>e.jsx(q,{iconOnly:!0,className:N.toggle,"aria-label":"Menu","aria-expanded":t,...s,children:e.jsxs("div",{className:N.inner,children:[e.jsx(T,{className:N.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(T,{className:N.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),we="_toggle_1phd7_2",Le="_circle_1phd7_29",Se="_mask_1phd7_54",Te="_path_1phd7_72",_={toggle:we,circle:Le,mask:Se,path:Te},H=({isMobile:t,...s})=>{const a=n.useId(),{toggleTheme:i}=F(),o=`${a}theme-toggle-mask`;return e.jsx(q,{iconOnly:!0,className:_.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...s,children:e.jsxs("svg",{"aria-hidden":!0,className:_.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:o,children:[e.jsx("circle",{className:_.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:_.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:_.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:_.circle,mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})},P=[{label:"Projects",pathname:"/#project-1"},{label:"Details",pathname:"/#details"},{label:"Articles",pathname:"/articles"},{label:"Contact",pathname:"/contact"}],Ie=[{label:"linkedin",url:`https://linkedin.com/in/${p.linkedin}`,icon:"linkedin"},{label:"facebook",url:`https://facebook.com/${p.facebook}`,icon:"facebook"},{label:"Github",url:`https://github.com/${p.github}`,icon:"github"},{label:"instagram",url:`https://instagram.com/${p.instagram}`,icon:"instagram"}],$e="_navbar_zzi78_2",Me="_logo_zzi78_27",ze="_nav_zzi78_2",Ce="_navList_zzi78_51",Ee="_navLink_zzi78_59",Re="_navIcons_zzi78_102",Oe="_navIconLink_zzi78_126",Ae="_navIcon_zzi78_102",He="_mobileNav_zzi78_147",Pe="_mobileNavLink_zzi78_177",f={navbar:$e,logo:Me,nav:ze,navList:Ce,navLink:Ee,navIcons:Re,navIconLink:Oe,navIcon:Ae,mobileNav:He,mobileNavLink:Pe},Be=()=>{const[t,s]=n.useState(),[a,i]=n.useState(!1),[o,l]=n.useState(),{theme:m}=F(),r=J(),v=ce(),x=n.useRef(),k=v.width<=ae.mobile||v.height<=696,I=le();n.useEffect(()=>{s(`${r.pathname}${r.hash}`)},[r]),n.useEffect(()=>{!o||r.pathname!=="/"||(s(`${r.pathname}${o}`),I(o,()=>l(null)))},[r.pathname,I,o]),n.useEffect(()=>{const c=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:y}=window;let b=[],j=[];const K=(u,g,d)=>!(u.bottom-d<g.top||u.top-d>g.bottom),C=()=>{for(const u of j)u.element.dataset.theme=""},w=()=>{const u=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!u)return;b=Array.from(u).map(d=>({element:d,top:d.offsetTop,bottom:d.offsetTop+d.offsetHeight}));const{scrollY:g}=window;C();for(const d of b)if(!(d.top-g>y||d.bottom-g<0))for(const L of j)K(d,L,g)?L.element.dataset.theme=h:L.element.dataset.theme=""};return m==="light"&&(j=Array.from(c).map(u=>{const g=u.getBoundingClientRect();return{element:u,top:g.top,bottom:g.bottom}}),document.addEventListener("scroll",w),w()),()=>{document.removeEventListener("scroll",w),C()}},[m,v,r.key]);const $=(c="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return c===h?"page":""},M=c=>{const h=c.currentTarget.href.split("#")[1];l(null),h&&r.pathname==="/"&&(l(`#${h}`),c.preventDefault())},z=c=>{M(c),a&&i(!1)};return e.jsxs("header",{className:f.navbar,ref:x,children:[e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:r.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${p.name}, ${p.role}`,onClick:z,children:e.jsx(be,{highlight:!0})}),e.jsx(Ne,{onClick:()=>i(!a),menuOpen:a}),e.jsxs("nav",{className:f.nav,children:[e.jsx("div",{className:f.navList,children:P.map(({label:c,pathname:h})=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:f.navLink,"aria-current":$(h),onClick:M,children:c},c))}),e.jsx(B,{desktop:!0})]}),e.jsx(oe,{unmount:!0,in:a,timeout:E(R.base.durationL),children:({visible:c,nodeRef:h})=>e.jsxs("nav",{className:f.mobileNav,"data-visible":c,ref:h,children:[P.map(({label:y,pathname:b},j)=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:b,className:f.mobileNavLink,"data-visible":c,"aria-current":$(b),onClick:z,style:re({transitionDelay:ie(Number(E(R.base.durationS))+j*50)}),children:y},y)),e.jsx(B,{}),e.jsx(H,{isMobile:!0})]})}),!k&&e.jsx(H,{"data-navbar-item":!0})]})},B=({desktop:t})=>e.jsx("div",{className:f.navIcons,children:Ie.map(({label:s,url:a,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:f.navIconLink,"aria-label":s,href:a,target:"_blank",rel:"noopener noreferrer",children:e.jsx(T,{className:f.navIcon,icon:i})},s))}),De="_progress_3typo_2",Fe={progress:De};function Ge(){const[t,s]=n.useState(!1),[a,i]=n.useState(!1),{state:o}=V(),l=n.useRef(),m=n.useRef(0);return n.useEffect(()=>{clearTimeout(m.current),o!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[o,t]),n.useEffect(()=>{if(!l.current)return;const r=new AbortController;return o!=="idle"?s(!1):(Promise.all(l.current.getAnimations({subtree:!0}).map(v=>v.finished)).then(()=>{r.signal.aborted||s(!0)}),()=>{r.abort()})},[o]),e.jsx("div",{className:Fe.progress,"data-status":o,"data-visible":a,"data-complete":t,ref:l})}const qe="_container_j3vhn_2",Je="_skip_j3vhn_12",D={container:qe,skip:Je};const at=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:ee,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function ot(){var l;let{canonicalUrl:t,theme:s}=fe();const a=ge(),{state:i}=V();(l=a.formData)!=null&&l.has("theme")&&(s=a.formData.get("theme"));function o(m){a.submit({theme:m||(s==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return n.useEffect(()=>{console.info(`${p.ascii}
`,`Taking a peek huh? Check out the source code: ${p.repo}

`)},[]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:s==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:s==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:G}}),e.jsx(W,{}),e.jsx(Z,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":s,children:[e.jsxs(Q,{theme:s,toggleTheme:o,children:[e.jsx(Ge,{}),e.jsx(se,{showOnFocus:!0,as:"a",className:D.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(Be,{}),e.jsx("main",{id:"main-content",className:D.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(pe,{})})]}),e.jsx(Y,{}),e.jsx(U,{})]})]})}function rt(){const t=ve();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:G}}),e.jsx(W,{}),e.jsx(Z,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(te,{error:t}),e.jsx(Y,{}),e.jsx(U,{})]})]})}export{rt as ErrorBoundary,ot as default,at as links};
