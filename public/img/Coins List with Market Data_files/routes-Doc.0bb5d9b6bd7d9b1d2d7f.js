/*! For license information please see routes-Doc.0bb5d9b6bd7d9b1d2d7f.js.LICENSE.txt */
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5dcd9216-ea87-4337-80da-363def5700a1",e._sentryDebugIdIdentifier="sentry-dbid-5dcd9216-ea87-4337-80da-363def5700a1")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.116.1"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3879],{52277:(e,t,n)=>{"use strict";var a=n(24351),r=n(1415)(1);a(a.P+a.F*!n(3815)([].map,!0),"Array",{map:function(e){return r(this,e,arguments[1])}})},78851:(e,t,n)=>{"use strict";var a=n(24351),r=n(14710),l=n(88397),o="startsWith",i=""[o];a(a.P+a.F*n(3082)(o),"String",{startsWith:function(e){var t=l(this,e,o),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return i?i.call(t,a,n):t.slice(n,n+a.length)===a}})},56357:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(88601),r=n.n(a),l=n(2784),o=n(223),i=n.n(o);const s=function(e,t="",n={key:"label",highlight:!0}){return(0,l.useMemo)((()=>{if(t){return r().go(t,e,{key:n.key}).reduce((([e,t],a)=>{const{obj:l}=a;if(e.push(Object.assign({},l)),!n.highlight)return[e,t];const o=i()(r().highlight(a)||"",{whiteList:{b:[]}});return t.push(o),[e,t]}),[[],[]])}return[e,[]]}),[e,t,n])}},46249:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(40831),r=n(77452),l=n.n(r),o=n(57359),i=n.n(o),s=n(52034),c=n.n(s),u=n(2784),d=n(28721),m=n(10385),p=n(66891);function g(e={encrypt:!1,json:!1}){var t,n,r;const{isClient:o}=(0,p.Z)(),{encryptedLocalStorageKey:s}=(0,u.useContext)(m.E_),{project:g}=(0,u.useContext)(m.xI),f=(null===(n=null===(t=null==g?void 0:g.parent)||void 0===t?void 0:t._id)||void 0===n?void 0:n.toString())||(null===(r=null==g?void 0:g._id)||void 0===r?void 0:r.toString())||"",b=(0,u.useMemo)((()=>{var t;if(!e.encrypt)return"";let n=c().get(s);return n&&"string"==typeof n&&(null===(t=n.startsWith)||void 0===t?void 0:t.call(n,btoa(f)))||(n=(0,a.Eh)(f,(0,d.Z)()),c().set(s,n,{expires:(null==g?void 0:g.jwtExpirationTime)&&g.jwtExpirationTime<1440?g.jwtExpirationTime/1440:1,secure:o&&"https:"===window.location.protocol,sameSite:"strict"})),n}),[s,o,e.encrypt,f,null==g?void 0:g.jwtExpirationTime]),h=(0,u.useMemo)((()=>"undefined"!=typeof window?window.localStorage:(()=>{const e=new Map;return{getItem:t=>e.has(t)?e.get(t):null,setItem:(t,n)=>{e.set(t,n)},removeItem:t=>{e.delete(t)},clear:()=>{e.clear()}}})()),[]);return(0,u.useMemo)((()=>{function t(t){let n="@readme";return e.prefix&&(n+=`/${e.prefix}`),`${n}:${t}`}return{setItem:(n,a)=>{const r=t(n);let o=a;if(e.json)try{o=JSON.stringify(a)}catch(e){console.error(`Couldn't stringify local JSON data for #${r}.`,a)}e.encrypt&&(o=l().encrypt(o,b).toString()),h.setItem(r,o)},getItem:n=>{let a=h.getItem(t(n));if(a&&e.encrypt)try{a=l().decrypt(a,b).toString(i().enc.Utf8)}catch(e){console.error(`Something went wrong decrypting localStorage data for #${n}.`),a=null}if(a&&e.json)try{a=JSON.parse(a)}catch(e){console.error(`Couldn't parse local JSON data for #${n}.`,a)}return a},removeItem:e=>{h.removeItem(t(e))},clear:()=>{h.clear()}}}),[b,h,e.encrypt,e.json,e.prefix])}},54732:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(2784),r=n(10385);function l(e,t){const{sidebar:n}=(0,a.useContext)(r.a2),l=(t||n||[]).reduce(((e,t)=>{const n=function(e){const t=[],n=e=>{var a;null===(a=e.forEach)||void 0===a||a.call(e,(e=>{!e.hidden&&["basic","endpoint"].includes(e.type)&&t.push(e),"children"in e&&e.children?n(e.children):"pages"in e&&e.pages&&n(e.pages)}))};return n(e),t}(t.pages);return e.push(...n),e}),[]),o=e&&"_id"in e?"_id":"slug",i=l.findIndex((t=>(null==t?void 0:t[o])===(null==e?void 0:e[o]))),s=e=>{if(void 0!==e&&e>=0&&e!==l.length)return l[e]};let c=s(i-1);const u=s(i+1);return(null==c?void 0:c.isBodyEmpty)&&(c=s(i-2)),{prev:c,next:u}}},35390:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(e,t,n)=>{var a,r;return Object.assign(Object.assign(Object.assign(Object.assign({},e.rdmdOpts),n),null===(a=e.rdmd)||void 0===a?void 0:a.opts),null===(r=t.rdmd)||void 0===r?void 0:r.opts)}},67618:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(2784),r=n(66891),l=n(24508);const o=({hideTOC:e,dehydrated:t,docBody:n,opts:o={},footer:i})=>{const{isClient:s}=(0,r.Z)();return a.createElement("div",{className:"grid-container-fluid",id:"content-container"},a.createElement("section",{className:"content-body grid-"+(e?100:75)},a.createElement(l.Z,{key:s?window.location.pathname:null,body:n,className:"rm-Markdown markdown-body ng-non-bindable",dehydrated:null==t?void 0:t.body,opts:o,style:{marginLeft:31}}),!!i&&i),!e&&a.createElement("section",{className:"content-toc grid-25"},a.createElement(l.N,{body:n,opts:o})))}},42091:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(2784),r=n(47933),l=n(7267),o=n(24508);const i=({slug:e,children:t})=>{const n={to:`/edit/${e}`};return a.createElement("div",{className:"row clearfix"},a.createElement("div",{className:"col-xs-9"},t),a.createElement("div",{className:"col-xs-3"},a.createElement(r.rU,Object.assign({},n,{className:"suggestEdits",rel:"nofollow"}),a.createElement("i",{"aria-hidden":"true",className:"icon icon-register"})," Suggest Edits")))},s=({children:e})=>a.createElement("div",{className:"row clearfix"},a.createElement("div",{className:"col-xs-12"},e)),c=(0,l.EN)((({excerpt:e,lang:t,match:n,slugUrl:r,suggestedEdits:l,title:c})=>{var u;let d=s;return l&&"en"===t&&!(null===(u=null==n?void 0:n.path)||void 0===u?void 0:u.endsWith("/edit"))&&(d=i),a.createElement("header",{id:"content-head"},a.createElement(d,{slug:r},a.createElement("h1",null,c),!!e&&a.createElement("div",{className:"excerpt"},a.createElement(o.Z,null,e))))}))},16252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(2784),r=n(14914);const l={APISectionHeader:"APISectionHeader3LN_-QIR0m7x","APISectionHeader-heading":"APISectionHeader-heading4MUMLbp4_nLs"};var o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const i=a.memo((e=>{var{children:t,className:n,heading:i}=e,s=o(e,["children","className","heading"]);const c=(0,r.Z)(l,"APISectionHeader");return i?a.createElement("header",Object.assign({className:c("&","rm-APISectionHeader",n)},s),a.createElement("div",{className:c("-heading")},i),t):null}))},93677:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(82236),r=n(26130),l=n(50063),o=n(52458),i=n(2784),s=n(5089);const c=i.memo((({absoluteDates:e=!1,fnsFormat:t,icon:n,time:c,prefix:u,suffix:d,tag:m="div",tooltip:p=!1,className:g})=>{if(!c)return null;let f,b=new Date(c),h=new Date;e&&(b=new Date(b.toDateString()),h=new Date(h.toDateString()),(0,a.Z)(b)?f="Today":(0,r.Z)(b)&&(f="1 day ago")),f||(f=(0,l.Z)(b,h,{addSuffix:!0})),t&&(f=(0,o.Z)(b,t));const y=i.createElement(m,{className:`DateLine ${g||""}`,suppressHydrationWarning:!0},!!n&&i.createElement("i",{className:n}),u," ",f," ",d);return p?i.createElement(s.ZP,{content:(0,o.Z)(b,e?"PPPP":"PPpp")},y):y}))},33281:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(2784),r=n(22849),l=n(48830),o=n(13520),i=n(5089),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const c=a.memo((e=>{var{align:t,children:n,className:c,description:u,errorMessage:d,errorStyle:m="inline",helpMessage:p,htmlFor:g,label:f,orientation:b="vertical",size:h="md",warningMessage:y}=e,v=s(e,["align","children","className","description","errorMessage","errorStyle","helpMessage","htmlFor","label","orientation","size","warningMessage"]);const E=(0,a.useRef)(null);return a.createElement("div",Object.assign({className:(0,r.ZP)("FormGroup",c,b&&`FormGroup_${b}`,h&&`FormGroup_${h}`,d&&"FormGroup_error")},v),!!f&&a.createElement("label",{className:"FormGroup-label",htmlFor:g},a.createElement(l.Z,{align:"center",gap:"xs"},f,!!p&&a.createElement(i.ZP,{arrow:!1,content:p,delay:[400,200],offset:[0,5]},a.createElement(o.Z,{color:"color-text-minimum",name:"help-circle",size:"md"})))),a.createElement(l.Z,{align:t||"stretch",className:"FormGroup-inputs",gap:0,layout:"col"},!!n&&a.createElement("div",{ref:E,className:"FormGroup-input"},n),!!(u||d&&"inline"===m||y)&&a.createElement("div",{className:"FormGroup-messages"},!!d&&"inline"===m&&a.createElement("small",{className:"FormGroup-error",role:"alert"},d),!!u&&a.createElement("small",{className:"FormGroup-description",role:"note"},u),!!y&&a.createElement("small",{className:"FormGroup-warning",role:"note"},a.createElement(o.Z,{className:"FormGroup-warning-icon",name:"alert-triangle"}),y)),!!d&&"tooltip"===m&&a.createElement(i.ZP,{arrow:!1,content:d,onCreate:e=>e.show(),reference:E})))}))},12064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(51582),r=n(2784),l=n(88072),o=n(48830),i=n(33281),s=n(42126),c=n(25631),u=n(58886),d=n(63399);const m="LinkEditor-link1KRjLF0oG7-k",p="LinkEditor3EQCEXu0YdtH",{Anchor:g}=a.Components,f=r.forwardRef((({baseUrl:e="",onSubmit:t,onChange:n,url:a,label:f,footer:b,required:h},y)=>{const v=(0,l.Z)("LinkEditor"),[E,N]=(0,r.useState)({label:null,url:null}),Z=(0,r.useCallback)(((e,t)=>(N({label:e?null:"Label is required",url:t?null:"URL is required"}),e&&t)),[]),x=(0,r.useCallback)((e=>{var n,a;e.preventDefault(),e.stopPropagation();const r=e.currentTarget,l=(null===(n=r.querySelector("input[name=label]"))||void 0===n?void 0:n.value)||"",o=(null===(a=r.querySelector("input[name=url]"))||void 0===a?void 0:a.value)||"";h&&!Z(l,o)||null==t||t(e,{label:l,url:o})}),[t,Z,h]);return r.createElement(o.Z,{ref:y,align:"stretch",layout:"col",onSubmit:x,tag:"form"},r.createElement(c.ZP,{className:p},r.createElement(d.Z,{focusable:!1,TagName:"div"},r.createElement(i.Z,{errorMessage:E.label,htmlFor:v("label"),label:"Label"},r.createElement(s.Z,{id:v("label"),name:"label",onChange:n,placeholder:"label",size:"sm",value:f||""}))),r.createElement(u.Z,null),r.createElement(d.Z,{focusable:!1,TagName:"div"},r.createElement(i.Z,{errorMessage:E.url,htmlFor:v("url"),label:"URL"},r.createElement(s.Z,{id:v("url"),name:"url",onChange:n,placeholder:"url",size:"sm",value:a||""}))),!!a&&r.createElement(r.Fragment,null,r.createElement(u.Z,null),r.createElement(d.Z,{color:"blue",href:g.getHref(a,e.replace(/\/$/,"")),TagName:"a",target:"_blank",title:a},r.createElement("span",{className:m},a))),b||r.createElement("button",{style:{display:"none"}})))}))},51698:(e,t,n)=>{"use strict";n.d(t,{n:()=>g,Z:()=>f});var a=n(2784),r=n(22849),l=n(22650),o=n(25631),i=n(5089);const s="PageMenu-Container3gMUcZgxitZf",c="PageMenu-Menujp2ydtUZMwuY",u="PageMenuItem3m7Uf-aJT34D",d="PageMenuItem-Container2Y1LB23VvKlp",m="PageMenuItem-Container-name2J-5wCvdS85i",p="PageMenuItem-Container-category2xfYNcJfejcc",g=({category:e,name:t,onClick:n,selected:l,slug:s,type:c})=>{const g=(0,a.useCallback)((()=>null==n?void 0:n({name:t,slug:s,type:c,category:e})),[e,t,n,s,c]),f=(0,r.ZP)(u,l&&"selected");return a.createElement(o.sN,{key:`${t}-${c}:${s}`,"aria-current":l,className:f,"data-name":t,onClick:g,role:"menuitem"},a.createElement("div",{className:d},a.createElement(i.ZP,{content:t,delay:[300,200],placement:"top-start",title:!0},a.createElement("p",{className:m},t)),a.createElement(i.ZP,{content:e,delay:[300,200],placement:"top-start",title:!0},a.createElement("p",{className:p},e))))},f=(0,a.memo)((0,a.forwardRef)((({className:e,children:t},n)=>a.createElement(l.Z,{className:(0,r.ZP)(s,e),kind:"pop"},a.createElement(o.ZP,{ref:n,className:c,"data-testid":"link-menu",role:"menu"},t)))))},90647:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(2784),r=n(81134),l=n(46249),o=n(17403),i=n(22849),s=n(72190),c=n(29984),u=n(22650),d=n(2791);const m=({comment:e,setComment:t,submitVote:n})=>a.createElement(u.Z,{className:"PageThumbs-comment_box",kind:"card"},a.createElement("div",{className:"PageThumbs-comment-body"},a.createElement("label",null,"Leave an optional comment…",a.createElement(d.Z,{className:"PageThumbs-comment_input",onChange:e=>t(e.target.value),value:e}))),a.createElement("footer",{className:"PageThumbs-comment-footer"},a.createElement(s.Z,{className:"PageThumbs-comment_submit",onClick:n,size:"sm"},"Vote"))),p=({voteYes:e})=>{const t=e?"up-2":"down1";return a.createElement("i",{className:`icon icon-thumbs-${t}`})},g=({comment:e,handleVote:t,isSelected:n,onCommentBlur:r,setComment:l,submitVote:o,title:u})=>{const d="Yes"===u;return a.createElement(c.Z,{align:"top",justify:"center",onBlur:r,sticky:!0},a.createElement(s.Z,{className:(0,i.ZP)("PageThumbs-button",n&&"PageThumbs-button_selected"),kind:"secondary",onClick:()=>t(d),size:"sm",text:!0},a.createElement(p,{voteYes:d}),a.createElement("span",null,u)),a.createElement(m,{comment:e,setComment:l,submitVote:o}))},f=({email:e,pathname:t,projectSubdomain:n,sendToMetrics:i})=>{const s=(0,l.Z)(),c=(0,r.Z)(),u=(0,o.L)(s.getItem("helpfulVotes"))||{},d=u[n]||{[n]:{}},[m,p]=(0,a.useState)(void 0!==d[t]),[f,b]=(0,a.useState)(null),[h,y]=(0,a.useState)(""),v=e=>{b(e?1:0)},E=()=>{if(null===f)return;p(!0),y("");const a=Object.assign(Object.assign({},u),{[n]:Object.assign(Object.assign({},u[n]),{[t]:f})}),r=(0,o.e)(a);null!==r&&(s.setItem("helpfulVotes",r),i({email:e,path:t,type:"doc",vote:f,comments:h}))},N=()=>{b(null)};return c?a.createElement("div",{className:"rm-PageThumbs PageThumbs"},a.createElement("div",{className:"PageThumbs-helpful"},m?"Thanks for voting!":"Did this page help you?",!m&&a.createElement("div",{className:"PageThumbs-cta"},a.createElement(g,{comment:h,handleVote:v,isSelected:1===f,onCommentBlur:N,setComment:y,submitVote:E,title:"Yes"}),a.createElement(g,{comment:h,handleVote:v,isSelected:0===f,onCommentBlur:N,setComment:y,submitVote:E,title:"No"})))):null}},48871:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(2784),r=n(14914),l=n(96956);const o={PaginationControls:"PaginationControlsjDYuqu8pBMUy","PaginationControls-link":"PaginationControls-link254uPEbaP92i","PaginationControls-link_left":"PaginationControls-link_left1G58BmNHDbVm","PaginationControls-icon":"PaginationControls-iconZbaZ3tgyhNmI","PaginationControls-link_right":"PaginationControls-link_right5lsfuICZqXYk","PaginationControls-text":"PaginationControls-text3qEXHZU00znD","PaginationControls-text_left":"PaginationControls-text_left3wBkn4C9R0W_","PaginationControls-text_right":"PaginationControls-text_right3EIfWubgRVVP","PaginationControls-meta":"PaginationControls-meta1gGHPN0gqjND"};function i({data:e,pageType:t,direction:n}){const i=(0,r.Z)(o,"PaginationControls"),s="link"===e.type,c=!!e.link_external&&s,u=e.queryParam?"?":"/",d=c?{rel:"noopener",target:"_blank"}:{target:"_self"},m=s?Object.assign({href:e.link_url},d):{to:`/${t}${u}${"RealtimePage"===e.pageType?"intro/":""}${e.slug||e.queryParam}`};return a.createElement(l.Z,Object.assign({"aria-label":`${n} Page${e.title?`: ${e.title}`:""}`,className:i("-link","Next"===n?"-link_right":"-link_left")},m),"Previous"===n&&a.createElement("span",{className:`${i("-icon")} icon-arrow-left2`}),a.createElement("div",{className:i("-text","-text_"+("Previous"===n?"left":"right"))},e.title),"Next"===n&&a.createElement("span",{className:i("-icon","icon-arrow-right2")}))}function s({prev:e,next:t,meta:n,pageType:l}){const s=(0,r.Z)(o,"PaginationControls");return a.createElement("nav",{"aria-label":"Pagination Controls",className:s("&","rm-Pagination")},!!e&&a.createElement(i,{data:e,direction:"Previous",pageType:l}),!!n&&a.createElement("span",{className:s("-meta")},n),!!t&&a.createElement(i,{data:t,direction:"Next",pageType:l}))}},96956:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(2784),r=n(47933),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const o=a.memo((0,a.forwardRef)((function(e,t){var{children:n,className:o,style:i,to:s}=e,c=l(e,["children","className","style","to"]);if(s)return a.createElement(r.OL,Object.assign({ref:t,className:o,style:i,to:s},c),n);if("function"==typeof o||"function"==typeof i)throw new TypeError('SmartLink: Did you forget a "to" field? If not, check "className" or "style" types and make sure they\'re correct.');return a.createElement("a",Object.assign({ref:t,className:o,style:i},c),n)})))},5089:(e,t,n)=>{"use strict";n.d(t,{_v:()=>i,ZP:()=>u});var a=n(35899),r=n(2784),l=n(22849),o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const i=function(e){var{id:t,disabled:n,overrides:l,title:i}=e,s=o(e,["id","disabled","overrides","title"]);const[c,d]=(0,a.useSingleton)({disabled:n,overrides:l});return u.singletons[t]=d,(0,r.useEffect)((()=>()=>{delete u.singletons[t]}),[t]),r.createElement(u,Object.assign({},s,i&&{arrow:!1,delay:[500,0],offset:[0,5]},{content:!0,singleton:c}))};var s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};const c=e=>{var{children:t,content:n,className:o,singleton:i,title:u}=e,d=s(e,["children","content","className","singleton","title"]);const m=(0,r.useMemo)((()=>(0,l.ZP)("rm-Tooltip",o)),[o]),p="string"==typeof t?r.createElement("span",{className:"tippy-text"},t):t,g="string"==typeof i?c.singletons[i]:i;return r.createElement(a.default,Object.assign({className:`${m} ${u?"rm-Tooltip_title":""}`,content:n,duration:150,placement:"bottom-start",singleton:g,zIndex:99999},d,u&&{arrow:!1,delay:[500,0],offset:[0,5]}),p)};c.singletons={};const u=c},46537:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(40831),r=n(2784),l=n(47933),o=n(14914),i=n(22849),s=n(16252),c=n(72190),u=n(29984),d=n(48830),m=n(13520),p=n(24508),g=n(2791);const f=function({isEditable:e,bem:t,onChange:n,description:a}){return e?r.createElement(g.Z,{autoGrow:!0,className:t("-input","-description"),isMinimal:!0,onChange:n,placeholder:"Tell your users what they should do after they've finished this page",resize:"none",rows:1,value:a||""}):r.createElement(p.Z,{className:t("-description",!a&&"-description_empty"),Tag:"div"},a)};var b=n(12064);const h=function({isCreate:e=!1,url:t,label:n,onClick:a,baseUrl:l,bem:o,onSubmit:i}){const s=r.createElement(c.Z,{className:o("-submitBtn"),onClick:a,size:"sm",type:"submit"},e?"Add link":"Update");return r.createElement(b.Z,{baseUrl:l,footer:s,label:n,onSubmit:i,required:!0,url:t})};var y=n(56357),v=n(42126),E=n(25631),N=n(51698);const Z=function({bem:e,pages:t=[],onClick:n}){const[a,l]=(0,r.useState)(""),[o]=(0,y.Z)(t,a,{key:"name",highlight:!1}),i=(0,r.useCallback)((e=>{l(e.target.value)}),[]);return r.createElement(E.ZP,{className:e("-pageMenu")},r.createElement(d.Z,{align:"center",className:e("-pageMenu-input"),gap:0},r.createElement(v.Z,{onChange:i,placeholder:"Find a page",prefix:r.createElement(m.Z,{name:"search"}),value:a})),r.createElement(E.R,null),r.createElement(N.Z,{className:e("-pageMenu-results")},o.length?o.map(((e,t)=>r.createElement(N.n,Object.assign({},e,{key:`${t}-${e.slug}`,onClick:n})))):r.createElement(d.Z,{align:"center",className:e("-pageMenu-results_empty"),gap:"1",justify:"center"},"No Results")))},x={"WhatsNext-wrapper":"WhatsNext-wrapper3DTnpcPqKoHg","WhatsNext-editIcons":"WhatsNext-editIconslDAW8ozLrFGC","WhatsNext-heading":"WhatsNext-headingQHN33r4trf_s","WhatsNext-input":"WhatsNext-input3GbL4jMW4EXi","WhatsNext-description":"WhatsNext-description1zZyZLPCGmaa","WhatsNext-description_empty":"WhatsNext-description_empty1Hh8M1AKGhbW","WhatsNext-submitBtn":"WhatsNext-submitBtn25CPO3z9YGSO","WhatsNext-menus":"WhatsNext-menus1g5Jbtb_KVQp","WhatsNext-pageMenu-input":"WhatsNext-pageMenu-inputvO4TnUKIqgQZ","WhatsNext-pageMenu-results":"WhatsNext-pageMenu-results3hCfG3ckFDwX","WhatsNext-pageMenu-results_empty":"WhatsNext-pageMenu-results_empty1hUnSXpstfj6"};var P;!function(e){e[e.Add=0]="Add",e[e.Update=1]="Update",e[e.Delete=2]="Delete"}(P||(P={}));const w=r.memo((({baseUrl:e,className:t,description:n,internalPages:p=[],isEditable:g=!1,label:b,onChange:y,onPagesUpdate:v,pages:E})=>{const N=(0,o.Z)(x,"WhatsNext"),w=(0,r.useRef)({}),O=({category:e,type:t,slug:n})=>{switch(t){case"doc":return`../docs/${n}`;case"ref":return"Developer Dashboard"===e?`../${g?"refs":"reference/intro"}/${n}`:`../${g?"refs":"reference"}/${n}`;default:return"../"}},k=(0,r.useCallback)((({operation:e,idx:t,nextPage:n})=>{var r;!n||e!==P.Add&&null!=t?e!==P.Delete?n&&(null==v||v((0,a.TT)(E||[],n,t))):null==v||v((0,a.oM)(E||[],t)):null==v||v((0,a.T9)(E||[],n,null===(r=E||[])||void 0===r?void 0:r.length))}),[v,E]);return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,i.ZP)(N("-wrapper"),t)},r.createElement(s.Z,{className:(0,i.ZP)(N("-heading")),heading:b||"What’s Next"}),r.createElement(f,{bem:N,description:n,isEditable:g,onChange:y}),r.createElement("ul",null,null==E?void 0:E.map(((t,n)=>{const{name:a,type:o,slug:i,value:s,category:d}=t,f=`${i||s}-${n}`;return r.createElement("li",{key:f},"url"===o?r.createElement("a",{className:N("-link"),href:s,target:"blank"},a):r.createElement(l.rU,{className:N("-link"),target:"_self",to:O({type:o,slug:i,category:d})},a),r.createElement(m.Z,{className:"icon",name:"url"===o?"arrow-up-right":"arrow-right"}),!!g&&r.createElement("div",{className:N("-editIcons")},r.createElement(u.Z,{ref:e=>{w.current[f]=e},justify:"start",sticky:!0},r.createElement(c.Z,{"aria-label":"edit",is:"button",kind:"secondary",size:"xs",text:!0},r.createElement(m.Z,{name:"edit-2",title:"edit"})),"url"===o?r.createElement(h,{baseUrl:e,bem:N,label:t.name,onClick:()=>{var e;null===(e=w.current[f])||void 0===e||e.toggle()},onSubmit:(e,{url:t,label:a})=>{k({nextPage:{type:"url",value:t,name:a},operation:P.Update,idx:n})},url:t.value}):r.createElement(Z,{bem:N,onClick:e=>{var t;k({nextPage:e,operation:P.Update,idx:n}),null===(t=w.current[f])||void 0===t||t.toggle()},pages:p})),r.createElement(c.Z,{"aria-label":"delete",is:"button",kind:"destructive",onClick:()=>k({operation:P.Delete,idx:n}),size:"xs",text:!0},r.createElement(m.Z,{name:"x",title:"delete"}))))}))),!!g&&r.createElement(d.Z,{className:N("-menus"),gap:"sm",justify:"start"},r.createElement(u.Z,{ref:e=>{w.current.addNewPage=e},justify:"start",sticky:!0},r.createElement(c.Z,{kind:"secondary",outline:!0,size:"sm"},r.createElement(m.Z,{name:"plus"})," Page"),r.createElement(Z,{bem:N,onClick:e=>{var t;k({nextPage:e,operation:P.Add}),null===(t=w.current.addNewPage)||void 0===t||t.toggle()},pages:p})),r.createElement(u.Z,{ref:e=>{w.current.addNewLink=e},eventId:"newLink",justify:"start",sticky:!0},r.createElement(c.Z,{kind:"secondary",outline:!0,size:"sm"},r.createElement(m.Z,{name:"plus"})," External Link"),r.createElement(h,{baseUrl:e,bem:N,eventId:"newLink",isCreate:!0,onSubmit:(e,{url:t,label:n})=>{var a;k({nextPage:{type:"url",value:t,name:n},operation:P.Add}),null===(a=w.current.addNewLink)||void 0===a||a.toggle()}})))))}))},5163:(e,t,n)=>{"use strict";n.d(t,{CR:()=>s,XA:()=>i,ZT:()=>r,_T:()=>o,fl:()=>c,pi:()=>l});var a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},a(e,t)};function r(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};function o(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)o.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return o}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}},81134:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(85354),r=n(2784);function l(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],l=t[1];return(0,r.useEffect)((function(){l("undefined"!=typeof document)}),[]),n}},91297:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(85354),r=n(2784);const l=function(e){var t=(0,r.useState)(!1),n=(0,a.Z)(t,2),l=n[0],o=n[1];return(0,r.useEffect)((function(){var t=window.matchMedia(e);o(!!t.matches),t.onchange=function(e){return o(!!e.matches)}}),[e]),l}},87246:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(40831);function r(e,t){return(0,a.g1)(e,t)}},14915:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});n(74476),n(84879),n(10746),n(81541),n(66496);var a=n(7560),r=n(51119),l=n(85354),o=n(54530),i=n(13980),s=n.n(i),c=n(2784),u=n(7267),d=n(10385),m=n(66891),p=n(35390),g=n(32004),f=n(79920),b=n(54825),h=n(10409),y=n(67618),v=n(42091),E=n(28316),N=n(72190),Z=n(5089);const x=e=>{const[t,n]=(0,c.useState)(document.querySelector('[data-testid="suggested-edits-preview"]'));return(0,c.useEffect)((()=>{n(document.querySelector('[data-testid="suggested-edits-preview"]'))}),[]),t?(0,E.createPortal)(c.createElement(c.Fragment,null," ",c.createElement(Z.ZP,{content:"To prevent malicious activity, HTML is hidden by default in suggested edits. Only publish custom HTML from authors you trust.",delay:[250,null],offset:[0,15],touch:["hold",500]},c.createElement(N.Z,Object.assign({},e,{circular:!0,kind:"contrast",outline:!0,size:"xs"})))),t):null};var P=["suggestedEditsPreview"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t,n,r=e.suggestedEditsPreview,i=(0,o.Z)(e,P),s=(0,f.iZ)((function(e){return"enabled"===e.data.suggested_edits})),E=(0,m.Z)().isClient,N=(0,c.useContext)(d.xI).project,Z=i.sidebars,w=(0,c.useState)(!!r),k=(0,l.Z)(w,2),C=k[0],S=k[1],j=(0,c.useContext)(d.sb),_=((0,c.useContext)(d.St)||{}).user,T=(0,c.useCallback)((function(e){null!=Z&&Z.docs&&(e.sidebar=null==Z?void 0:Z.docs)}),[null==Z?void 0:Z.docs]),I=(0,g.Z)(i,T),R=I.state,D=I.loading,M=I.redirected,L=I.redirectedPath,W=(0,u.TH)(),U=R.doc,A=void 0===U?{}:U,H={categories:(null==Z?void 0:Z.docs)||[],activeDoc:i.activeDoc||""},F=(0,p.Z)(i,R,{safeMode:C}),$=O(O({},null===(t=i.rdmd)||void 0===t?void 0:t.dehydrated),null==R||null===(n=R.rdmd)||void 0===n?void 0:n.dehydrated),q=function(){return A.slug?c.createElement(u.l_,{to:"/docs"===W.pathname?"docs/".concat(A.slug):"".concat(A.slug)}):L?c.createElement(u.l_,{to:L}):null};return c.createElement("main",{className:"rm-Guides"},!!M&&c.createElement(q,null),c.createElement("div",{className:"rm-Container rm-Container_flex"},c.createElement(h.Z,(0,a.Z)({pathRoot:"docs"},H)),c.createElement("article",{className:"rm-Article ".concat(D?"rm-Guides_loading":""),id:"content"},!!A&&c.createElement(c.Fragment,null,!!r&&!!E&&c.createElement(x,{onClick:function(){return S(!C)}},C?"Show":"Hide"," HTML"),c.createElement(v.Z,{excerpt:A.excerpt,lang:i.lang,slugUrl:A.slug,suggestedEdits:!!s&&!r,title:A.title}),!D&&c.createElement(y.Z,{dehydrated:$,docBody:A.body,footer:c.createElement(b.Z,{apiBaseUrl:j,doc:A,project:N,user:_}),hideTOC:N.appearance.hideTableOfContents,opts:F})),c.createElement("div",{className:"ModalWrapper",id:"tutorialmodal-root"}))))};k.propTypes={activeDoc:s().string,config:s().object,doc:s().shape({excerpt:s().string,title:s().string}),hideTOC:s().bool,lang:s().string,meta:s().object,project:s().object,rdmd:s().shape({dehydrated:s().object.isRequired,opts:s().object.isRequired}).isRequired,rdmdOpts:s().object.isRequired,reusableContent:s().object,sidebars:s().shape({docs:s().array.isRequired,refs:s().array.isRequired}).isRequired,suggestedEditsPreview:s().bool,user:s().object,version:s().object};const C=k},54825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(13980),r=n.n(a),l=n(2784),o=n(7267),i=n(33412),s=n(54732),c=n(17403),u=n(93677),d=n(90647),m=n(48871),p=n(46537);function g(e){var t,n,a,r=e.doc,g=e.project,f=e.user,b=e.apiBaseUrl,h=(0,i.Z)(b).initRequest,y=(0,s.Z)(r),v=y.prev,E=y.next,N=(0,o.TH)(),Z=null==N?void 0:N.pathname,x=g.subdomain,P=null!=r&&r.isReference?"reference":"docs",w=(0,l.useCallback)((function(e){return h({method:"POST",path:"thumbvote",body:(0,c.e)(e)||""})}),[h]),O=(null==r||null===(t=r.next)||void 0===t?void 0:t.pages.length)>0||(null==r||null===(n=r.next)||void 0===n?void 0:n.description);return l.createElement(l.Fragment,{key:Z},l.createElement("div",{className:"UpdatedAt"},l.createElement(u.Z,{icon:"icon icon-watch",prefix:"Updated",tag:"p",time:null==r?void 0:r.updatedAt})),l.createElement("hr",{className:"NextStepsDivider"}),O?l.createElement(p.Z,{description:r.next.description,label:g.appearance.nextStepsLabel,pages:r.next.pages}):l.createElement(m.Z,{next:E,pageType:P,prev:v}),!(null==g||null===(a=g.metrics)||void 0===a||!a.thumbsEnabled)&&l.createElement(d.Z,{email:null==f?void 0:f.email,pathname:Z,projectSubdomain:x,sendToMetrics:w}))}g.propTypes={apiBaseUrl:r().string,doc:r().object,project:r().object,user:r().object};const f=g},10409:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});n(52277);var a=n(13980),r=n.n(a),l=n(2784),o=n(47933),i=n(10385),s=n(91297),c=n(87246),u=n(79920),d=n(22849),m=n(7560),p=n(54530),g=n(85354),f=(n(10746),n(80061),n(7267)),b=n(37462),h=n(5089);const y="Nav3C5f8FcjkaHj",v="Sidebar1t2G1ZJq-vU1",E="Sidebar-headingTRQyOa2pk0gh",N="Sidebar-link2Dsha-r-GKh2",Z="Sidebar-listWrapper6Q9_yUrG906C",x="Sidebar-list3cZWQLaBf9k8",P="Sidebar-link_parent3OBrzjAJRSfq",w="Sidebar-item23D-2Kd61_k3",O="Sidebar-link-expandIcon2yVH6SarI6NW",k="Sidebar-link_deprecated2xLRLrwYS-C8",C="Sidebar-link_deprecated-icon1TLWr7KfHfCp",S="Sidebar-link-pageIcon2sQE9C4g_faB",j="Sidebar-link-externalIcon1RcnjKm-3Ft8",_="Sidebar-link-pageIconCustom19QTSJY06eHz",T="Sidebar-link-buttonWrapper3hnFHNku8_BJ",I="Sidebar-link-textLuTE1ySm4Kqn",R="Sidebar-methodfUM3m6FEWm6w",D="Sidebar_flyout2qTF85usvHxB";var M=["isActive","to"],L=["activeItemRef","alwaysExpanded","className","linkClass","pages"],W=n(21023).join,U=function(e){return Boolean((e||[]).filter((function(e){return!e.hidden})).length)},A=function(e){var t,n,a=e.activeItemRef,r=e.activeDoc,i=e.alwaysExpanded,s=void 0!==i&&i,c=e.customIconRender,u=e.page,d=e.children,y=e.pathRoot,v=e.linkClass,E=void 0===v?"":v,Z=u.isReference,x=u.deprecated,D=u.link_external,L=u.link_url,A=u.slug,H=u.title,F=u.type,$=u.icon,q=u.pageType,B=(0,l.useMemo)((function(){return u.pages||u.children||[]}),[u.pages,u.children]),G=(0,f.UO)().slug,z=(0,l.useState)(s),V=(0,g.Z)(z,2),K=V[0],Y=V[1],J=(0,l.useState)(E),Q=(0,g.Z)(J,2),X=Q[0],ee=Q[1],te="link"===F,ne=te&&D,ae=U(B)&&"basic"===u.type&&!0===(null==u?void 0:u.isBodyEmpty),re=y||(Z?"reference":"docs"),le=ae?B[0].slug:A,oe=ae&&"link"===B[0].type;n=te?L:oe?B[0].link_url:W("/",re,"RealtimePage"===u.pageType?"intro":"",le);var ie=A===(G||r);(0,l.useEffect)((function(){var e=function e(t,n){return!(!t||0===(null==t?void 0:t.length))&&t.some((function(t){return t.slug===n||e(t.children,n)}))}(B,G||r);ee(!G&&ie?"".concat(E," active"):E),Y(s||d&&(ie||e)||!1)}),[s,d,ie,E,B,A,r,G]);var se=te||oe?function(e){e.isActive;var t=e.to,n=(0,p.Z)(e,M);return l.createElement("a",(0,m.Z)({},n,{href:t}),n.children)}:o.OL,ce=function(e){e.preventDefault(),s||Y(!K)},ue=(0,l.useMemo)((function(){if("function"==typeof c){var e=c(q,H);if(e)return l.createElement("div",{className:"".concat(_)},e)}return null}),[c,q,H]),de=(0,l.useMemo)((function(){return ue||(null!=$&&$.length?l.createElement("i",{className:"".concat(S," ").concat($)}):null)}),[ue,$]);return l.createElement("li",{className:"".concat(w).concat(K?" subnav-expanded":"")},l.createElement(se,(0,m.Z)({},ie?{ref:a}:null,{className:"".concat(N," ").concat(d?P:""," ").concat(x?k:""," ").concat(X," text-wrap rm-Sidebar-link"),isActive:function(e){return e&&!ae},rel:ne?"noopener":void 0,target:ne?"_blank":"_self",to:n}),!!x&&l.createElement(h.ZP,{content:"Deprecated ".concat("endpoint"===u.type?"Endpoint":"Doc"),interactive:!1,placement:"bottom"},l.createElement("span",{className:"icon-alert-circle ".concat(C)})),l.createElement("span",{className:I},!!d&&l.createElement("button",{"aria-expanded":K,"aria-label":"".concat(K?"Hide":"Show"," subpages for ").concat(H),className:T,onClick:ce,onKeyDown:function(e){return[" ","Enter"].includes(e.key)&&ce(e)}},l.createElement("i",{className:"".concat(O," icon-chevron-rightward")})),de,l.createElement("span",null,H)),!!te&&l.createElement("i",{"aria-hidden":"true",className:"".concat(j," icon-arrow-up-right")}),("endpoint"===u.type||"webhook"===u.type)&&!(null==u||null===(t=u.api)||void 0===t||!t.method)&&"RealtimePage"!==u.pageType&&l.createElement(b.Z,{className:R,fixedWidth:!0,type:u.api.method.toLowerCase()})),d)},H=function e(t){var n=t.activeItemRef,a=t.alwaysExpanded,r=void 0!==a&&a,o=t.className,i=void 0===o?"":o,s=t.linkClass,c=void 0===s?"":s,u=t.pages,d=(0,p.Z)(t,L);return l.createElement("ul",{className:"".concat(i," ").concat(x," rm-Sidebar-list")},u.map((function(t){return!t.hidden&&(U(t.children||t.pages)?l.createElement(A,(0,m.Z)({key:"page-".concat(t.slug),activeItemRef:n,alwaysExpanded:r,page:t},d),l.createElement(e,(0,m.Z)({activeItemRef:n,alwaysExpanded:r,className:"subpages",pages:t.children||t.pages},d))):l.createElement(A,(0,m.Z)({key:"page-".concat(t.slug),activeItemRef:n,alwaysExpanded:r,linkClass:"childless ".concat("subpages"===i?"subpage":c),page:t},d)))})))};H.propTypes={activeDoc:r().string,activeItemRef:r().oneOfType([r().func,r().shape({current:r().any})]),alwaysExpanded:r().bool,className:r().string,customIconRender:r().func,linkClass:r().string,pages:r().array},A.propTypes={activeDoc:r().string,activeItemRef:r().oneOfType([r().func,r().shape({current:r().any})]),alwaysExpanded:r().bool,children:r().any,customIconRender:r().func,linkClass:r().string,page:r().object,pathRoot:r().string};const F=H;n(78851);const $=function(){var e=(0,l.useRef)(),t=(0,l.useRef)(),n=(0,l.useRef)(),a=(0,f.TH)(),r=a.hash,o=a.pathname;return(0,l.useEffect)((function(){var a;if(n.current){var l=n.current.closest(".rm-Sidebar-list");l.style.display="flex";var o=n.current.getBoundingClientRect(),i=o.top,s=o.height;if(l.style.display="",!(i+s<=window.innerHeight)){var c=i>t.current.clientHeight-t.current.offsetTop,u=null==r?void 0:r.startsWith("#");c&&!u&&window.scrollTo({top:e.current.getBoundingClientRect().top,left:0,behavior:"smooth"});var d=c?t.current.clientHeight:i-e.current.clientHeight/2;a=setTimeout((function(){e.current.scrollTop=d}),0)}}return function(){a&&clearTimeout(a)}}),[r,o]),{scrollAreaRef:e,scrollContentRef:t,activeItemRef:n}};var q=function(){return l.createElement("div",{className:"disabled-warning"},l.createElement("i",{"aria-hidden":"true",className:"icon icon-notification"})," Only admins can see this",l.createElement(o.rU,{rel:"noreferrer",target:"_blank",to:"/dash?to=usability#modules"},"Enable it for everyone ",l.createElement("i",{"aria-hidden":"true",className:"fa fa-chevron-right"})))},B=function(){var e=(0,l.useContext)(i.xI).project.subdomain;return l.createElement("div",{className:"readme-logo",id:"readmeLogo"},"Powered by ",l.createElement("a",{"aria-label":"ReadMe",href:"https://readme.com?ref_src=hub&project=".concat(e),style:{color:"unset"}},l.createElement("i",{className:"icon icon-readme",style:{display:"inline-block",minWidth:71}})))},G=function(e){var t,n=e.activeDoc,a=e.categories,r=e.className,o=e.customIconRender,m=e.header,p=e.pathRoot,g=e.navClass,f=void 0===g?"":g,b=e.id,h=(0,l.useContext)(i.xI).project,N=(0,u.iZ)((function(e){return"hide"===e.data.appearance.footer.readme_logo})),x=$(),P=x.scrollAreaRef,w=x.scrollContentRef,O=x.activeItemRef,k=(0,s.Z)("(max-width: ".concat("768px",")"));return l.createElement("nav",{ref:P,"aria-label":"Page navigation",className:(0,d.ZP)("rm-Sidebar","hub-sidebar","reference-redesign",r,y,"docs"===p&&" rm-Sidebar_guides",f&&f,k&&D),id:b||"hub-sidebar"},m,l.createElement("div",{ref:w,className:"".concat(v," rm-Sidebar hub-sidebar-content")},!(null!=h&&null!==(t=h.modules)&&void 0!==t&&t[p]||"edit"===p)&&l.createElement(q,null),Array.isArray(a)&&a.map((function(e){var t=e.title,a=e.pages,r=e.slug,i=e.uri;return l.createElement("section",{key:null!=r?r:i,className:"".concat(Z," rm-Sidebar-section")},l.createElement("h2",{className:"".concat(E," rm-Sidebar-heading")},t),l.createElement(F,{activeItemRef:O,alwaysExpanded:k,activeDoc:n,customIconRender:o,pathRoot:p,pages:a}))})),!((0,c.Z)(null==h?void 0:h.plan,"whitelabel")||N)&&l.createElement(B,null)))};G.propTypes={activeDoc:r().string,categories:r().array,className:r().string,customIconRender:r().func,header:r().oneOfType([r().elementType,r().object]),id:r().string,navClass:r().string,pathRoot:r().string};const z=l.memo(G)},50633:()=>{}}]);
//# sourceMappingURL=routes-Doc.0bb5d9b6bd7d9b1d2d7f.js.map