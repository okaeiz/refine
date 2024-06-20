"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40607],{58860:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>u});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"useSelect",title:"useSelect",description:"useSelect example of @pankod/refine-core","example-title":"Refine's useSelect hook","example-tags":["headless","refine-hooks"]},l=void 0,s={unversionedId:"examples/core/useSelect",id:"version-3.xx.xx/examples/core/useSelect",title:"useSelect",description:"useSelect example of @pankod/refine-core",source:"@site/versioned_docs/version-3.xx.xx/examples/core/useSelect.md",sourceDirName:"examples/core",slug:"/examples/core/useSelect",permalink:"/docs/3.xx.xx/examples/core/useSelect",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/core/useSelect.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1718897935,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{id:"useSelect",title:"useSelect",description:"useSelect example of @pankod/refine-core","example-title":"Refine's useSelect hook","example-tags":["headless","refine-hooks"]},sidebar:"someSidebar",previous:{title:"useModal",permalink:"/docs/3.xx.xx/examples/core/useModal"},next:{title:"Custom Footer",permalink:"/docs/3.xx.xx/examples/customization/customFooter"}},p={},u=[],f=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var m;const d={toc:u},y="wrapper";function x(e){var{components:t}=e,r=c(e,["components"]);return(0,n.yg)(y,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useSelect")," hook was created by ",(0,n.yg)("strong",{parentName:"p"},"refine")," to help you create ",(0,n.yg)("inlineCode",{parentName:"p"},"<select>")," components and populate the options with your data. This example shows how to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"useSelect")," hook from ",(0,n.yg)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useSelect/index"},"Refer to the ",(0,n.yg)("strong",{parentName:"a"},"refine")," useSelect hook documentation for more information. \u2192")),(0,n.yg)(f,{path:"core-use-select",mdxType:"CodeSandboxExample"}))}x.isMDXComponent=!0}}]);