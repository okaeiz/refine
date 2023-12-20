"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"nhost",title:"Nhost","example-tags":["data-provider","live-provider"]},s=void 0,d={unversionedId:"examples/data-provider/nhost",id:"examples/data-provider/nhost",title:"Nhost",description:"Refine Nhost GraphQL Data Provider comes out-of-the-box. Thanks to Refine, you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with Refine project.",source:"@site/docs/examples/data-provider/nhost.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/nhost",permalink:"/docs/examples/data-provider/nhost",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/nhost.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703091483,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{id:"nhost",title:"Nhost","example-tags":["data-provider","live-provider"]},sidebar:"mainSidebar",previous:{title:"Nestjs-Query",permalink:"/docs/examples/data-provider/nestjs-query"},next:{title:"Strapi",permalink:"/docs/examples/data-provider/strapi"}},l={},c=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],u=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const y={toc:c};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Refine ",(0,r.kt)("a",{parentName:"p",href:"https://nhost.io/"},"Nhost")," GraphQL Data Provider comes out-of-the-box. Thanks to Refine, you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with Refine project."),(0,r.kt)("h2",{id:"id-data-type"},"ID Data Type"),(0,r.kt)("p",null,"By default, the data provider assume that your ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," type is ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,r.kt)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,r.kt)("inlineCode",{parentName:"h4"},"idType")),(0,r.kt)("p",null,"This will allow you to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n  idType: "Int",\n});\n')),(0,r.kt)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,r.kt)("inlineCode",{parentName:"h4"},"idType")),(0,r.kt)("p",null,"This will allow you to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n  users: "Int",\n  posts: "uuid",\n};\n\nconst myDataProvider = dataProvider(client, {\n  idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,r.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Username"),": ",(0,r.kt)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev"),"\n",(0,r.kt)("strong",{parentName:"p"},"Password"),": demodemo")),(0,r.kt)(u,{path:"data-provider-nhost",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);