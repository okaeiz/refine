"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30692],{58860:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>g});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",source:"@site/blog/2024-05-23-usestate-mistakes.md",title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",date:"2024-05-23T00:00:00.000Z",formattedDate:"May 23, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:17.725,hasTruncateMarker:!0,authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],frontMatter:{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/social.png",hide_table_of_contents:!1},prevItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},nextItem:{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid"},relatedPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-generator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.21,date:"2022-02-22T00:00:00.000Z"},{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"August 20, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:15.12,date:"2024-08-20T00:00:00.000Z"},{title:"Ref Forwarding with React forwardRef",description:"We discuss in detail how ref forwarding with React forwardRef works.",permalink:"/blog/react-forwardref",formattedDate:"June 12, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.785,date:"2024-06-12T00:00:00.000Z"}],authorPosts:[{title:"How to become a modern Node.js developer?",description:"The most essential skills to have as a modern Node.js developer",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.74,date:"2022-09-06T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],p={toc:u},d="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"This article was last updated on May 23, 2024 to add more information, new sections for performance of useState hook."))),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"The most challenging aspect of developing any application is often managing its state. However, we are often required to manage several pieces of state in our application, such as when data is retrieved from an external server or updated in the app."),(0,n.yg)("p",null,"The difficulty of state management is the reason why so many state management libraries exist today - and more are still being developed. Thankfully, React has several built-in solutions in the form of hooks for state management, which makes managing states in React easier."))}g.isMDXComponent=!0}}]);