(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[999],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2503:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var o=n(7462),r=n(7294),a=n(6010),c=n(5999),l=n(6668),s=n(9960);const i="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();if("h1"===t||!n)return r.createElement(t,(0,o.Z)({},m,{id:void 0}));const p=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,o.Z)({},m,{className:(0,a.Z)("anchor",d?u:i,m.className),id:n}),m.children,r.createElement(s.default,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},3903:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ce});var o=n(7462),r=n(7294),a=n(5742);var c=n(2389),l=n(6010),s=n(6412),i=n(5281),u=n(7016);const m="codeBlockContainer_Ckt0";function d(e){let{as:t,...n}=e;const a=(0,s.p)(),c=(0,u.QC)(a);return r.createElement(t,(0,o.Z)({},n,{style:c,className:(0,l.Z)(n.className,m,i.k.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function f(e){let{children:t,className:n}=e;return r.createElement(d,{as:"pre",tabIndex:0,className:(0,l.Z)(p.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:p.codeBlockLines},t))}var h=n(6668),g=n(5448);const v={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var y={Prism:n(7410).Z,theme:v};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}var k=/\r\n|\r|\n/,N=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},C=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},L=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=E({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=E({},n,{backgroundColor:null}),r};function w(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const B=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),b(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?L(e.theme,e.language):void 0;return t.themeDict=n})),b(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=E({},w(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?E({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),b(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),b(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=E({},w(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?E({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),b(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,l=[],s=[l];c>-1;){for(;(a=o[c]++)<r[c];){var i=void 0,u=t[c],m=n[c][a];if("string"==typeof m?(u=c>0?u:["plain"],i=m):(u=C(u,m.type),m.alias&&(u=C(u,m.alias)),i=m.content),"string"==typeof i){var d=i.split(k),p=d.length;l.push({types:u,content:d[0]});for(var f=1;f<p;f++)N(l),s.push(l=[]),l.push({types:u,content:d[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return N(l),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),x="codeLine_lJS_",T="codeLineNumber_Tfdd",O="codeLineContent_feaV";function j(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,l.Z)(n,a&&x)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},s({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:T}),r.createElement("span",{className:O},u)):u,r.createElement("br",null))}var Z=n(5999);const _={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),s=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),r&&r.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,_.copyButton,o&&_.copyButtonCopied),onClick:s},r.createElement("span",{className:_.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:_.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:_.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const S="wordWrapButtonIcon_Bwma",A="wordWrapButtonEnabled_EoeP";function P(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&A),"aria-label":a,title:a},r.createElement("svg",{className:S,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function z(e){let{children:t,className:n="",metastring:a,title:c,showLineNumbers:i,language:m}=e;const{prism:{defaultLanguage:f,magicComments:v}}=(0,h.L)(),b=m??(0,u.Vo)(n)??f,E=(0,s.p)(),k=(0,g.F)(),N=(0,u.bc)(a)||c,{lineClassNames:C,code:L}=(0,u.nZ)(t,{metastring:a,language:b,magicComments:v}),w=i??(0,u.nt)(a);return r.createElement(d,{as:"div",className:(0,l.Z)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`)},N&&r.createElement("div",{className:p.codeBlockTitle},N),r.createElement("div",{className:p.codeBlockContent},r.createElement(B,(0,o.Z)({},y,{theme:E,code:L,language:b??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:k.codeBlockRef,className:(0,l.Z)(t,p.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(p.codeBlockLines,w&&p.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(j,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:C[t],showLineNumbers:w})))))})),r.createElement("div",{className:p.buttonGroup},(k.isEnabled||k.isCodeScrollable)&&r.createElement(P,{className:p.codeButton,onClick:()=>k.toggle(),isEnabled:k.isEnabled}),r.createElement(H,{className:p.codeButton,code:L}))))}function I(e){let{children:t,...n}=e;const a=(0,c.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof l?z:f;return r.createElement(s,(0,o.Z)({key:String(a)},n),l)}var M=n(9960);var D=n(6043);const R="details_lb9f",V="isBrowser_bmU9",$="collapsibleContent_i85q";function W(e){return!!e&&("SUMMARY"===e.tagName||W(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function F(e){let{summary:t,children:n,...a}=e;const s=(0,c.Z)(),i=(0,r.useRef)(null),{collapsed:u,setCollapsed:m}=(0,D.u)({initialState:!a.open}),[d,p]=(0,r.useState)(a.open);return r.createElement("details",(0,o.Z)({},a,{ref:i,open:d,"data-collapsed":u,className:(0,l.Z)(R,s&&V,a.className),onMouseDown:e=>{W(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;W(t)&&q(t,i.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))}}),t??r.createElement("summary",null,"Details"),r.createElement(D.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),p(!e)}},r.createElement("div",{className:$},n)))}const U="details_b_Ee";function G(e){let{...t}=e;return r.createElement(F,(0,o.Z)({},t,{className:(0,l.Z)("alert alert--info",U,t.className)}))}var Q=n(2503);function Y(e){return r.createElement(Q.default,e)}const X="containsTaskList_mC6p";const J="img_ev3q";const K="admonition_LlT9",ee="admonitionHeading_tbUL",te="admonitionIcon_kALy",ne="admonitionContent_S0QG";const oe={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(Z.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(Z.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(Z.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(Z.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(Z.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},re={secondary:"note",important:"info",success:"tip",warning:"danger"};function ae(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}const ce={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(a.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(I,e)},a:function(e){return r.createElement(M.default,e)},pre:function(e){return r.createElement(I,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(G,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,l.Z)(t,t?.includes("contains-task-list")&&X))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,J))}));var t},h1:e=>r.createElement(Y,(0,o.Z)({as:"h1"},e)),h2:e=>r.createElement(Y,(0,o.Z)({as:"h2"},e)),h3:e=>r.createElement(Y,(0,o.Z)({as:"h3"},e)),h4:e=>r.createElement(Y,(0,o.Z)({as:"h4"},e)),h5:e=>r.createElement(Y,(0,o.Z)({as:"h5"},e)),h6:e=>r.createElement(Y,(0,o.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=ae(e),c=function(e){const t=re[e]??e,n=oe[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),oe.info)}(n),s=o??c.label,{iconComponent:u}=c,m=a??r.createElement(u,null);return r.createElement("div",{className:(0,l.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,K)},r.createElement("div",{className:ee},r.createElement("span",{className:te},m),s),r.createElement("div",{className:ne},t))},mermaid:()=>null}},5042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var o=n(7294),r=n(3905),a=n(3903);function c(e){let{children:t}=e;return o.createElement(r.Zo,{components:a.default},t)}},9407:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var o=n(7462),r=n(7294),a=n(6010),c=n(8011);const l="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return r.createElement("div",{className:(0,a.Z)(l,"thin-scrollbar",t)},r.createElement(c.Z,(0,o.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},8011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(7462),r=n(7294),a=n(6668),c=n(9665),l=n(6841);function s(e){let{toc:t,className:n,linkClassName:o,isChild:a}=e;return t.length?r.createElement("ul",{className:a?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:o}))))):null}const i=r.memo(s);function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const f=(0,a.L)(),h=m??f.tableOfContents.minHeadingLevel,g=d??f.tableOfContents.maxHeadingLevel,v=(0,c.b)({toc:t,minHeadingLevel:h,maxHeadingLevel:g}),y=(0,r.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:g}}),[s,u,h,g]);return(0,l.S)(y),r.createElement(i,(0,o.Z)({toc:v,className:n,linkClassName:s},p))}},5448:(e,t,n)=>{"use strict";n.d(t,{F:()=>l});var o=n(7294),r=n(902);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function c(e,t){const[n,c]=(0,o.useState)(),l=(0,o.useCallback)((()=>{c(e.current?.closest("[role=tabpanel][hidden]"))}),[e,c]);(0,o.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=a);const c=(0,r.zX)(t),l=(0,r.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(c);return e&&t.observe(e,l),()=>t.disconnect()}),[e,c,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function l(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),l=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),s=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return c(a,s),(0,o.useEffect)((()=>{s()}),[e,s]),(0,o.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}},6412:(e,t,n)=>{"use strict";n.d(t,{p:()=>a});var o=n(2949),r=n(6668);function a(){const{prism:e}=(0,r.L)(),{colorMode:t}=(0,o.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},6841:(e,t,n)=>{"use strict";n.d(t,{S:()=>s});var o=n(7294),r=n(6668);function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const o=e.find((e=>a(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function l(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function s(e){const t=(0,o.useRef)(void 0),n=l();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:l}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const o=[];for(let r=t;r<=n;r+=1)o.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),i=c(s,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}},7016:(e,t,n)=>{"use strict";n.d(t,{QC:()=>p,Vo:()=>m,bc:()=>i,nZ:()=>d,nt:()=>u});var o=n(7594),r=n.n(o);const a=/title=(?<quote>["'])(?<title>.*?)\1/,c=/\{(?<range>[\d,-]+)\}/,l={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function s(e,t){const n=e.map((e=>{const{start:n,end:o}=l[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(a)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function m(e){return e.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")}function d(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:i}=t;if(i&&c.test(i)){const e=i.match(c).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return s(["js","jsBlock"],t);case"jsx":case"tsx":return s(["js","jsBlock","jsx"],t);case"html":return s(["js","jsBlock","html"],t);case"python":case"py":case"bash":return s(["bash"],t);case"markdown":case"md":return s(["html","jsx","bash"],t);default:return s(Object.keys(l),t)}}(o,a),m=n.split("\n"),d=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),p=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<m.length;){const e=m[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));p[t]?d[p[t]].range+=`${r},`:f[t]?d[f[t]].start=r:h[t]&&(d[h[t]].range+=`${d[h[t]].start}-${r-1},`),m.splice(r,1)}n=m.join("\n");const g={};return Object.entries(d).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}},9665:(e,t,n)=>{"use strict";n.d(t,{a:()=>a,b:()=>l});var o=n(7294);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const o=n.slice(2,e.level);e.parentIndex=Math.max(...o),n[e.level]=t}));const o=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):o.push(r)})),o}function a(e){return(0,o.useMemo)((()=>r(e)),[e])}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:o});return function(e){return e.level>=n&&e.level<=o}(e)?[{...e,children:t}]:t}))}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>c({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);