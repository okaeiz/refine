"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72079,13757],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59252:(e,t,n)=>{n.d(t,{Z:()=>o});var r={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function a(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function l(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o(e,t){var n,i,s,u,c,d=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,f=[],p="",m=t||{},v=0;function g(e){var t=r[e[1]||""],n=f[f.length-1]==e;return t?t[1]?(n?f.pop():f.push(e),t[0|n]):t[0]:e}function b(){for(var e="";f.length;)e+=g(f[f.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return m[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=d.exec(e);)i=e.substring(v,s.index),v=d.lastIndex,n=s[0],i.match(/[^\\](\\\\)*\\$/)||((c=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+a(l(c).replace(/^\n+|\n+$/g,""))+"</code></pre>":(c=s[6])?(c.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),u=o(a(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==c?c="blockquote":(c=c.match(/\./)?"ol":"ul",u=u.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+c+">"+u+"</"+c+">"):s[8]?n='<img src="'+l(s[8])+'" alt="'+l(s[7])+'">':s[10]?(p=p.replace("<a>",'<a href="'+l(s[11]||m[i.toLowerCase()])+'">'),n=b()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(c="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+o(s[12]||s[15],m)+"</"+c+">":s[16]?n="<code>"+l(s[16])+"</code>":(s[17]||s[1])&&(n=g(s[17]||"--"))),p+=i,p+=n;return(p+e.substring(v)+b()).replace(/^\n+|\n+$/g,"")}},84220:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(86010),l=n(65319),o=n(16895),i=n(24999),s=n(99387);function u({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,o.k)();return t.hide_title||void 0!==n?null:e.title}();return r.createElement("div",{className:(0,a.Z)(l.k.docs.docMarkdown,"markdown")},t&&r.createElement("header",null,r.createElement(i.Z,{as:"h1"},t)),r.createElement(s.Z,null,e))}},35479:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(89712),l=n(16895);function o(){const{metadata:e,frontMatter:t,assets:n}=(0,l.k)();var o;return r.createElement(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:null!==(o=n.image)&&void 0!==o?o:t.image})}},2085:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),a=n(86010),l=n(8241),o=n(31984),i=n(92210),s=n(88249),u=n(65319),c=n(39085),d=n(27391);const f={unreleased:function({siteTitle:e,versionMetadata:t}){return r.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return r.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=f[e.versionMetadata.banner];return r.createElement(t,e)}function m({versionLabel:e,to:t,onClick:n}){return r.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:r.createElement("b",null,r.createElement(o.Z,{to:t,onClick:n},r.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,l.Z)(),{pluginId:o}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,c.J)(o),{latestDocSuggestion:d,latestVersionSuggestion:f}=(0,s.Jo)(o),v=null!=d?d:(g=f).docs.find((e=>e.id===g.mainDocId));var g;return r.createElement("div",{className:(0,a.Z)(e,u.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(p,{siteTitle:n,versionMetadata:t})),r.createElement("div",{className:"margin-top--md"},r.createElement(m,{versionLabel:f.label,to:v.path,onClick:()=>i(f.name)})))}function g({className:e}){const t=(0,d.E)();return t.banner?r.createElement(v,{className:e,versionMetadata:t}):null}},15845:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(86010),l=n(92210),o=n(39527);const i="tags_jXut",s="tag_QGVx";function u({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(i,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:s},r.createElement(o.Z,{label:e,permalink:t}))))))}},28368:(e,t,n)=>{n.d(t,{p:()=>M});var r,a=n(67294),l=n(32984),o=n(12351),i=n(23784),s=n(19946),u=n(61363),c=n(64103),d=n(16567),f=n(14157),p=n(15466),m=n(73781);let v=null!=(r=a.startTransition)?r:function(e){e()};var g,b=((g=b||{})[g.Open=0]="Open",g[g.Closed=1]="Closed",g),h=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(h||{});let y={0:e=>({...e,disclosureState:(0,l.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},E=(0,a.createContext)(null);function k(e){let t=(0,a.useContext)(E);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}E.displayName="DisclosureContext";let P=(0,a.createContext)(null);function w(e){let t=(0,a.useContext)(P);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}P.displayName="DisclosureAPIContext";let C=(0,a.createContext)(null);function T(e,t){return(0,l.E)(t.type,y,e,t)}C.displayName="DisclosurePanelContext";let O=a.Fragment;let x=o.AN.RenderStrategy|o.AN.Static;let S=(0,o.yV)((function(e,t){let{defaultOpen:n=!1,...r}=e,s=(0,a.useRef)(null),u=(0,i.T)(t,(0,i.h)((e=>{s.current=e}),void 0===e.as||e.as===a.Fragment)),c=(0,a.useRef)(null),f=(0,a.useRef)(null),v=(0,a.useReducer)(T,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:g,buttonId:b},h]=v,y=(0,m.z)((e=>{h({type:1});let t=(0,p.r)(s);if(!t||!b)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(b):t.getElementById(b);null==n||n.focus()})),k=(0,a.useMemo)((()=>({close:y})),[y]),w=(0,a.useMemo)((()=>({open:0===g,close:y})),[g,y]),C={ref:u};return a.createElement(E.Provider,{value:v},a.createElement(P.Provider,{value:k},a.createElement(d.up,{value:(0,l.E)(g,{0:d.ZM.Open,1:d.ZM.Closed})},(0,o.sY)({ourProps:C,theirProps:r,slot:w,defaultTag:O,name:"Disclosure"}))))})),L=(0,o.yV)((function(e,t){let n=(0,s.M)(),{id:r=`headlessui-disclosure-button-${n}`,...l}=e,[d,p]=k("Disclosure.Button"),v=(0,a.useContext)(C),g=null!==v&&v===d.panelId,b=(0,a.useRef)(null),h=(0,i.T)(b,t,g?null:d.buttonRef);(0,a.useEffect)((()=>{if(!g)return p({type:2,buttonId:r}),()=>{p({type:2,buttonId:null})}}),[r,p,g]);let y=(0,m.z)((e=>{var t;if(g){if(1===d.disclosureState)return;switch(e.key){case u.R.Space:case u.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:0}),null==(t=d.buttonRef.current)||t.focus()}}else switch(e.key){case u.R.Space:case u.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:0})}})),E=(0,m.z)((e=>{if(e.key===u.R.Space)e.preventDefault()})),P=(0,m.z)((t=>{var n;(0,c.P)(t.currentTarget)||e.disabled||(g?(p({type:0}),null==(n=d.buttonRef.current)||n.focus()):p({type:0}))})),w=(0,a.useMemo)((()=>({open:0===d.disclosureState})),[d]),T=(0,f.f)(e,b),O=g?{ref:h,type:T,onKeyDown:y,onClick:P}:{ref:h,id:r,type:T,"aria-expanded":e.disabled?void 0:0===d.disclosureState,"aria-controls":d.linkedPanel?d.panelId:void 0,onKeyDown:y,onKeyUp:E,onClick:P};return(0,o.sY)({ourProps:O,theirProps:l,slot:w,defaultTag:"button",name:"Disclosure.Button"})})),I=(0,o.yV)((function(e,t){let n=(0,s.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...l}=e,[u,c]=k("Disclosure.Panel"),{close:f}=w("Disclosure.Panel"),p=(0,i.T)(t,u.panelRef,(e=>{v((()=>c({type:e?4:5})))}));(0,a.useEffect)((()=>(c({type:3,panelId:r}),()=>{c({type:3,panelId:null})})),[r,c]);let m=(0,d.oJ)(),g=null!==m?(m&d.ZM.Open)===d.ZM.Open:0===u.disclosureState,b=(0,a.useMemo)((()=>({open:0===u.disclosureState,close:f})),[u,f]),h={ref:p,id:r};return a.createElement(C.Provider,{value:u.panelId},(0,o.sY)({ourProps:h,theirProps:l,slot:b,defaultTag:"div",features:x,visible:g,name:"Disclosure.Panel"}))})),M=Object.assign(S,{Button:L,Panel:I})},21190:(e,t,n)=>{n.d(t,{M:()=>b});var r=n(70655),a=n(67294),l=n(49304),o=n(54735),i=n(58868);function s(){var e=(0,a.useRef)(!1);return(0,i.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var u=n(240),c=n(96681),d=n(76316),f=function(e){var t=e.children,n=e.initial,l=e.isPresent,o=e.onExitComplete,i=e.custom,s=e.presenceAffectsLayout,f=(0,c.h)(p),m=(0,d.M)(),v=(0,a.useMemo)((function(){return{id:m,initial:n,isPresent:l,custom:i,onExitComplete:function(e){var t,n;f.set(e,!0);try{for(var a=(0,r.XA)(f.values()),l=a.next();!l.done;l=a.next()){if(!l.value)return}}catch(i){t={error:i}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}null==o||o()},register:function(e){return f.set(e,!1),function(){return f.delete(e)}}}}),s?void 0:[l]);return(0,a.useMemo)((function(){f.forEach((function(e,t){return f.set(t,!1)}))}),[l]),a.useEffect((function(){!l&&!f.size&&(null==o||o())}),[l]),a.createElement(u.O.Provider,{value:v},t)};function p(){return new Map}var m=n(25364),v=n(65411),g=function(e){return e.key||""};var b=function(e){var t=e.children,n=e.custom,u=e.initial,c=void 0===u||u,d=e.onExitComplete,p=e.exitBeforeEnter,b=e.presenceAffectsLayout,h=void 0===b||b,y=(0,r.CR)(function(){var e=s(),t=(0,r.CR)((0,a.useState)(0),2),n=t[0],l=t[1],i=(0,a.useCallback)((function(){e.current&&l(n+1)}),[n]);return[(0,a.useCallback)((function(){return o.ZP.postRender(i)}),[i]),n]}(),1),E=y[0],k=(0,a.useContext)(m.p).forceRender;k&&(E=k);var P=s(),w=function(e){var t=[];return a.Children.forEach(e,(function(e){(0,a.isValidElement)(e)&&t.push(e)})),t}(t),C=w,T=new Set,O=(0,a.useRef)(C),x=(0,a.useRef)(new Map).current,S=(0,a.useRef)(!0);if((0,i.L)((function(){S.current=!1,function(e,t){e.forEach((function(e){var n=g(e);t.set(n,e)}))}(w,x),O.current=C})),(0,v.z)((function(){S.current=!0,x.clear(),T.clear()})),S.current)return a.createElement(a.Fragment,null,C.map((function(e){return a.createElement(f,{key:g(e),isPresent:!0,initial:!!c&&void 0,presenceAffectsLayout:h},e)})));C=(0,r.ev)([],(0,r.CR)(C),!1);for(var L=O.current.map(g),I=w.map(g),M=L.length,R=0;R<M;R++){var D=L[R];-1===I.indexOf(D)&&T.add(D)}return p&&T.size&&(C=[]),T.forEach((function(e){if(-1===I.indexOf(e)){var t=x.get(e);if(t){var r=L.indexOf(e);C.splice(r,0,a.createElement(f,{key:g(t),isPresent:!1,onExitComplete:function(){x.delete(e),T.delete(e);var t=O.current.findIndex((function(t){return t.key===e}));if(O.current.splice(t,1),!T.size){if(O.current=w,!1===P.current)return;E(),d&&d()}},custom:n,presenceAffectsLayout:h},t))}}})),C=C.map((function(e){var t=e.key;return T.has(t)?e:a.createElement(f,{key:g(e),isPresent:!0,presenceAffectsLayout:h},e)})),"production"!==l.O&&p&&C.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),a.createElement(a.Fragment,null,T.size?C:C.map((function(e){return(0,a.cloneElement)(e)})))}}}]);