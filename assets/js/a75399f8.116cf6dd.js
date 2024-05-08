"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50107],{15680:(e,r,t)=>{t.d(r,{xA:()=>m,yg:()=>f});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(f,i(i({ref:r},m),{},{components:t})):o.createElement(f,i({ref:r},m))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31436:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>p});t(96540);var o=t(15680);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"useModalForm",title:"useModalForm","example-tags":["form","antd"]},c=void 0,s={unversionedId:"examples/form/antd/useModalForm",id:"version-3.xx.xx/examples/form/antd/useModalForm",title:"useModalForm",description:"With the useModalForm hook, you can manage a form inside of your modal component. It returns Ant Design Form and Modal props. You may examine the code below to learn how to create and manage forms within a modal.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/antd/useModalForm.md",sourceDirName:"examples/form/antd",slug:"/examples/form/antd/useModalForm",permalink:"/docs/3.xx.xx/examples/form/antd/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/antd/useModalForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715150302,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"useModalForm",title:"useModalForm","example-tags":["form","antd"]},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/3.xx.xx/examples/form/antd/useForm"},next:{title:"useStepsForm",permalink:"/docs/3.xx.xx/examples/form/antd/useStepsForm"}},m={},p=[],u=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var d;const f={toc:p},y="wrapper";function b(e){var{components:r}=e,t=i(e,["components"]);return(0,o.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"With the ",(0,o.yg)("inlineCode",{parentName:"p"},"useModalForm")," hook, you can manage a form inside of your modal component. It returns ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Ant Design Form")," and ",(0,o.yg)("a",{parentName:"p",href:"https://ant.design/components/modal/"},"Modal")," props. You may examine the code below to learn how to create and manage forms within a modal."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useModalForm/"},"Refer to the ",(0,o.yg)("strong",{parentName:"a"},"refine")," useModalForm hook documentation for more information. \u2192")),(0,o.yg)(u,{path:"form-antd-use-modal-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);