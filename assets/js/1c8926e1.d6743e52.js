"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14612],{58860:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>h});var r=o(37953);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(o),g=n,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},85324:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});o(37953);var r=o(58860);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social-2.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/lighthouse-google-chrome",source:"@site/blog/2024-05-24-google-lighthouse.md",title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",date:"2024-05-24T00:00:00.000Z",formattedDate:"May 24, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:18.65,hasTruncateMarker:!0,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},nextItem:{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid"},relatedPosts:[{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",permalink:"/blog/node-js-uuid",formattedDate:"November 7, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:10.23,date:"2024-11-07T00:00:00.000Z"},{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2022-12-28T00:00:00.000Z"},{title:"Mojo - A New Programming Language for AI",description:"We'll go over the fundamentals of Mojo, a new programming language that aims to make AI programming more accessible.",permalink:"/blog/mojo-programming-language",formattedDate:"September 4, 2024",authors:[{name:"Haider Ali",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"haider_ali"}],readingTime:14.695,date:"2024-09-04T00:00:00.000Z"}],authorPosts:[{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",permalink:"/blog/react-createportal",formattedDate:"August 21, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2024-08-21T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"May 14, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.02,date:"2024-05-14T00:00:00.000Z"},{title:"How to Build a Web App in 10 steps in 2024",description:"In this article, we will explore some steps you can follow when building a web app.",permalink:"/blog/how-to-build-a-web-app",formattedDate:"December 26, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2023-12-26T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],u={toc:m},g="wrapper";function h(e){var{components:t}=e,o=i(e,["components"]);return(0,r.yg)(g,a(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){n(e,t,o[t])}))}return e}({},u,o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"This article was last updated on May 24, 2024 to update screenshots, add new sections on advanced configuration, lighthouse metrics and common issues on Google Lighthouse"))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"As websites and web applications become more complex, it is necessary to measure and track their overall quality to provide a seamless browsing experience to your clients. Though several other tools exist for this purpose, Google lighthouse is quite popular among web developers mainly because it is part of the Chrome DevTools."),(0,r.yg)("p",null,"If it doesn't meet your needs as part of Chrome DevTools, Google lighthouse is also readily available as a Node package or command line utility. You can use it for auditing a website for performance, best practices, accessibility, progressive web app (PWA), and search engine optimization(SEO)."),(0,r.yg)("p",null,"You will explore the different ways of using Google Lighthouse in this article. You will also learn how to remedy some of the issues highlighted in the performance measurement and use Google lighthouse in continuous integration(CI) workflow."))}h.isMDXComponent=!0}}]);