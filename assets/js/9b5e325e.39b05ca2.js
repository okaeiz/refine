"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"useSetLocale"},i=void 0,s={unversionedId:"core/hooks/translate/use-set-locale/index",id:"core/hooks/translate/use-set-locale/index",title:"useSetLocale",description:"If you need to change the locale at runtime, Refine provides the useSetLocale hook, It returns the changeLocale method from i18nProvider under the hood.",source:"@site/docs/core/hooks/translate/use-set-locale/index.md",sourceDirName:"core/hooks/translate/use-set-locale",slug:"/core/hooks/translate/use-set-locale/",permalink:"/docs/core/hooks/translate/use-set-locale/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/translate/use-set-locale/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703091483,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"useSetLocale"},sidebar:"mainSidebar",previous:{title:"useGetLocale",permalink:"/docs/core/hooks/translate/use-get-locale/"},next:{title:"useTranslate",permalink:"/docs/core/hooks/translate/use-translate/"}},u={},p=[{value:"Usage",id:"usage",level:2}],f={toc:p};function d(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you need to change the locale at runtime, Refine provides the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSetLocale")," hook, It returns the changeLocale method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/i18n-provider/#usage"},(0,n.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This hook can only be used if ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/i18n-provider/#usage"},(0,n.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," is provided.")),(0,n.kt)("p",null,"You can use the features of your own i18n library to change the locale in your own components."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useSetLocale } from "@refinedev/core";\n\nexport const LanguageSwicher = () => {\n  const changeLanguage = useSetLocale();\n\n  return (\n    <div>\n      <span>Languages</span>\n      <button onClick={() => changeLanguage("en")}>English</button>\n      <button onClick={() => changeLanguage("es")}>Spanish</button>\n    </div>\n  );\n};\n')))}d.isMDXComponent=!0}}]);