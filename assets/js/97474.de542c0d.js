"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97474,4004,15435,90034,3534,15758,96771,90636,3664,15766,69050,45619,35194,56490,68134,45603,34685,56326,68562,45243,50176,8407,50233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),b=a,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return r?n.createElement(d,u(u({ref:t},s),{},{components:r})):n.createElement(d,u({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50551:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function u({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:t},e)}},53787:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(67294),a=r(86010),o=r(6379),u=r(93874),l=r(30358);const c="tabList__CuJ",i="tabItem_LNqP";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function b({className:e,block:t,selectedValue:r,selectValue:u,tabValues:l}){var c;const s=[],{blockElementScrollPositionUntilNextRender:b}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(b(t),u(a))},y=e=>{var t,r;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;var a;n=null!==(a=s[t])&&void 0!==a?a:s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;var o;n=null!==(o=s[t])&&void 0!==o?o:s[s.length-1];break}}null===(r=n)||void 0===r||null===(t=r.focus)||void 0===t||t.call(r)};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>n.createElement("li",p(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>s.push(e),onKeyDown:y,onClick:d},o),{className:(0,a.Z)("tabs__item",i,null===(c=o)||void 0===c?void 0:c.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function d({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=(0,u.Y)(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",c)},n.createElement(b,f({},e,t)),n.createElement(d,f({},e,t)))}function m(e){const t=(0,l.Z)();return n.createElement(y,f({key:String(t)},e))}},93874:(e,t,r)=>{r.d(t,{Y:()=>b});var n=r(67294),a=r(76775),o=r(47348);var u=r(76632);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e){return function(e){var t,r,a;return null!==(a=null===(r=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r||null===(t=r.filter)||void 0===t?void 0:t.call(r,Boolean))&&void 0!==a?a:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:i(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f({value:e,tabValues:t}){return t.some((t=>t.value===e))}function p({queryString:e=!1,groupId:t}){const r=(0,a.k6)(),u=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),i=(0,o._X)(u),s=(0,n.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(r.location.search);t.set(u,e),r.replace(c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[u,r]);return[i,s]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=s(e),[l,c]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,b]=p({queryString:r,groupId:a}),[d,y]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,u.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=i?i:d;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),b(e),y(e)}),[b,y,o]),tabValues:o}}}}]);