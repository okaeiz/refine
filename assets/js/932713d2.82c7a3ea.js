"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65792],{58860:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var t=n(37953);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(y,i(i({ref:r},c),{},{components:n})):t.createElement(y,i({ref:r},c))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93115:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(37953);var t=n(58860);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"useBreadcrumb",title:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},l=void 0,s={unversionedId:"api-reference/core/hooks/useBreadcrumb",id:"version-3.xx.xx/api-reference/core/hooks/useBreadcrumb",title:"useBreadcrumb",description:"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useBreadcrumb.md",sourceDirName:"api-reference/core/hooks",slug:"/api-reference/core/hooks/useBreadcrumb",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useBreadcrumb.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1718897935,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{id:"useBreadcrumb",title:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},sidebar:"someSidebar",previous:{title:"useLogList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLogList"},next:{title:"useApiUrl",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useApiUrl"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Resource",id:"resource",level:3},{value:"Nested resource",id:"nested-resource",level:3},{value:"i18n support",id:"i18n-support",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values",level:3}],d=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var m;const y={toc:u},g="wrapper";function b(e){var{components:r}=e,n=i(e,["components"]);return(0,t.yg)(g,o(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){a(e,r,n[r])}))}return e}({},y,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("admonition",{title:"Congratulations \ud83e\udd47",type:"info"},(0,t.yg)("p",{parentName:"admonition"},"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!"),(0,t.yg)("p",{parentName:"admonition"},"Congratulations ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/salihozdemir"},"@salihozdemir"),"! It was great seeing your project take first place! We're all very proud of you. Keep up the good work and don't forget to have fun while working here \ud83c\udf89")),(0,t.yg)("p",null,"It is a hook that returns ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbs")," to create breadcrumbs for the current page. The ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbs")," is an array of objects with the following properties:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"label"),": the label of the resource."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"href"),": the route of the resource."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"icon"),": the icon of the resource.")),(0,t.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,t.yg)(d,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useBreadcrumb } from "@pankod/refine-core";\n\nexport const Breadcrumb: React.FC = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul>\n            {breadcrumbs.map(({ label, href, icon }) => (\n                <li key={label}>\n                    {icon}\n                    {href ? <a href={href}>{label}</a> : label}\n                </li>\n            ))}\n        </ul>\n    );\n};\n'))),(0,t.yg)("h2",{id:"examples"},"Examples"),(0,t.yg)("h3",{id:"resource"},"Resource"),(0,t.yg)(d,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbs")," are created with your resource definitions. For example, if you have a resource with the following definition:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "posts",\n        icon: <div>icon</div>,\n        list: () => <div>List Page</div>,\n        create: () => <div>Create Page</div>,\n    },\n];\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"list")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        label: "Posts",\n        href: "/posts",\n        icon: <div>icon</div>,\n    },\n];\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        label: "Posts",\n        href: "/posts",\n        icon: <div>icon</div>,\n    },\n    { label: "Create" },\n];\n')))),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"If the resource has no ",(0,t.yg)("inlineCode",{parentName:"p"},"icon")," property, the ",(0,t.yg)("inlineCode",{parentName:"p"},"icon")," property of the breadcrumbs is ",(0,t.yg)("inlineCode",{parentName:"p"},"undefined"),". Likewise, if the resource's list page is not found, the ",(0,t.yg)("inlineCode",{parentName:"p"},"href")," property of the breadcrumbs is ",(0,t.yg)("inlineCode",{parentName:"p"},"undefined"),"."))),(0,t.yg)("h3",{id:"nested-resource"},"Nested resource"),(0,t.yg)(d,{id:"nested-resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you have a nested resource definition as below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "cms",\n    },\n    {\n        name: "users",\n        parentName: "cms",\n        list: () => <div>List Page</div>,\n        create: () => <div>Create Page</div>,\n    },\n];\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"list")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n    { label: "Cms" },\n    {\n        label: "Users",\n        href: "/users",\n    },\n];\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"On the ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," page of the ",(0,t.yg)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'[\n    { label: "Cms" },\n    {\n        label: "Users",\n        href: "/users",\n    },\n    { label: "Create" },\n];\n'))))),(0,t.yg)("h2",{id:"i18n-support"},"i18n support"),(0,t.yg)(d,{id:"i18n-support",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," definition has a ",(0,t.yg)("inlineCode",{parentName:"p"},"label")," property, ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"label")," property. Otherwise, the ",(0,t.yg)("inlineCode",{parentName:"p"},"name")," property of the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," is used. Likewise, if the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," definition has ",(0,t.yg)("inlineCode",{parentName:"p"},"route")," property, ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"route")," property. Otherwise, the ",(0,t.yg)("inlineCode",{parentName:"p"},"name")," property of the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," is used."),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"If a ",(0,t.yg)("inlineCode",{parentName:"p"},"label")," is not provided in your ",(0,t.yg)("inlineCode",{parentName:"p"},"posts")," resource, ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/translate/useTranslate"},(0,t.yg)("inlineCode",{parentName:"a"},"useTranslate"))," hook to translate the names."),(0,t.yg)("p",{parentName:"admonition"},"For CRUD operations (",(0,t.yg)("inlineCode",{parentName:"p"},"list"),",",(0,t.yg)("inlineCode",{parentName:"p"},"create"),",",(0,t.yg)("inlineCode",{parentName:"p"},"edit"),",",(0,t.yg)("inlineCode",{parentName:"p"},"show"),") the ",(0,t.yg)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"actions")," key to translate key ",(0,t.yg)("inlineCode",{parentName:"p"},"translate(`actions.${action}`)"),"."),(0,t.yg)("p",{parentName:"admonition"},"For example; ",(0,t.yg)("inlineCode",{parentName:"p"},"create")," action should look like : ",(0,t.yg)("inlineCode",{parentName:"p"},"translate(`actions.create`)")))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"return-values"},"Return values"),(0,t.yg)(d,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Property"),(0,t.yg)("th",{parentName:"tr",align:null},"Description"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"breadcrumbs"),(0,t.yg)("td",{parentName:"tr",align:null},"The breadcrumbs array"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"BreadcrumbsType"),"*")))),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"BreadcrumbsType")),(0,t.yg)("pre",{parentName:"blockquote"},(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},"type BreadcrumbsType = {\n    label: string;\n    href?: string;\n    icon?: React.ReactNode;\n};\n")))))}b.isMDXComponent=!0}}]);