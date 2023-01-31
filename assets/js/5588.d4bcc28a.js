"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5588],{1310:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(7462),l=n(7294),r=n(6010),c=n(5281),s=n(3438),i=n(8596),o=n(9960),m=n(5999),d=n(4996);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const v="breadcrumbHomeIcon_YNFT";function b(){const e=(0,d.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(o.default,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:v})))}const f="breadcrumbsContainer_Z_bl";function h(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(o.default,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function p(e){let{children:t,active:n,index:c,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(c+1)}))}function g(){const e=(0,s.s1)(),t=(0,i.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,f),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(p,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(h,{href:t.href,isLast:a},t.label))})))):null}},49:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7462),l=n(7294),r=n(5999),c=n(2244);function s(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c.Z,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c.Z,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),l=n(6010),r=n(5999),c=n(5281),s=n(4477);function i(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},2244:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(6010),r=n(9960);function c(e){const{permalink:t,title:n,subLabel:c,isNext:s}=e;return a.createElement(r.default,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&a.createElement("div",{className:"pagination-nav__sublabel"},c),a.createElement("div",{className:"pagination-nav__label"},n))}},9407:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7462),l=n(7294),r=n(6010),c=n(8011);const s="tableOfContents_bqdL";function i(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},9286:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(7294),l=n(6010),r=n(6043),c=n(8011),s=n(7462),i=n(5999);const o="tocCollapsibleButton_TO0P",m="tocCollapsibleButtonExpanded_MG3E";function d(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,s.Z)({type:"button"},n,{className:(0,l.Z)("clean-btn",o,!t&&m,n.className)}),a.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const u="tocCollapsible_ETCw",v="tocCollapsibleContent_vkbj",b="tocCollapsibleExpanded_sAul";function f(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:m}=(0,r.u)({initialState:!0});return a.createElement("div",{className:(0,l.Z)(u,!o&&b,n)},a.createElement(d,{collapsed:o,onClick:m}),a.createElement(r.z,{lazy:!0,className:v,collapsed:o},a.createElement(c.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}},8011:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6668),c=n(9665),s=n(6841);function i(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const o=l.memo(i);function m(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const b=(0,r.L)(),f=d??b.tableOfContents.minHeadingLevel,h=u??b.tableOfContents.maxHeadingLevel,p=(0,c.b)({toc:t,minHeadingLevel:f,maxHeadingLevel:h}),g=(0,l.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:f,maxHeadingLevel:h}}),[i,m,f,h]);return(0,s.S)(g),l.createElement(o,(0,a.Z)({toc:p,className:n,linkClassName:i},v))}},5130:(e,t,n)=>{n.d(t,{b:()=>c,k:()=>s});var a=n(7294),l=n(902);const r=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}},6841:(e,t,n)=>{n.d(t,{S:()=>i});var a=n(7294),l=n(6668);function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function s(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function i(e){const t=(0,a.useRef)(void 0),n=s();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=c(i,{anchorTopOffset:n.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}},9665:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>s});var a=n(7294);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function r(e){return(0,a.useMemo)((()=>l(e)),[e])}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>c({toc:l(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}}}]);