"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40054],{58860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},l=void 0,p={unversionedId:"realtime/hooks/use-publish/index",id:"realtime/hooks/use-publish/index",title:"usePublish",description:"usePublish returns the publish method from liveProvider. It is useful when you want to publish a custom event.",source:"@site/docs/realtime/hooks/use-publish/index.md",sourceDirName:"realtime/hooks/use-publish",slug:"/realtime/hooks/use-publish/",permalink:"/docs/realtime/hooks/use-publish/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/realtime/hooks/use-publish/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716362105,formattedLastUpdatedAt:"May 22, 2024",frontMatter:{title:"usePublish",source:"packages/core/src/hooks/live/usePublish/index.ts"},sidebar:"mainSidebar",previous:{title:"Live Provider",permalink:"/docs/realtime/live-provider/"},next:{title:"useSubscription",permalink:"/docs/realtime/hooks/use-subscription/"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Publish Properties",id:"publish-properties",level:2},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"type <PropTag required/>",id:"type-",level:3},{value:"payload <PropTag required/>",id:"payload-",level:3},{value:"date <PropTag required/>",id:"date-",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),h=d("PropTag"),y={toc:c},b="wrapper";function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(b,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"usePublish")," returns the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish"},(0,n.yg)("inlineCode",{parentName:"a"},"publish"))," method from ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider")),". It is useful when you want to publish a custom event."),(0,n.yg)("p",null,"Refine uses this hook internally in mutation hooks to ",(0,n.yg)("inlineCode",{parentName:"p"},"publish")," events after successful mutations. You can refer to the ",(0,n.yg)("inlineCode",{parentName:"p"},"liveProvider"),"'s ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish-events-from-hooks"},"Publish Events from Hooks")," section for more information."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { usePublish } from "@refinedev/core";\n\nconst publish = usePublish();\n\npublish({\n  channel: "custom-channel-name",\n  type: "custom-event-name",\n  payload: {\n    ids: [1, 2, 3],\n    "custom-property": "custom-property-value",\n  },\n  date: new Date(),\n});\n')),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"This method is used to publish an event on the client side. Beware that publishing events on the client side is not recommended and the best practice is to publish events from the server side. You can refer ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish-events-from-api"},"Publish Events from API")," to see which events should be published from the server."))),(0,n.yg)("h2",{id:"publish-properties"},"Publish Properties"),(0,n.yg)(m,{id:"publish-properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"usePublish")," will be passed to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#publish"},"publish")," method from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"liveProvider")," as a parameter. Following properties of this method can be used when publishing an event."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/core/interface-references#liveevent"},"LiveEvent interface","\u2192")))),(0,n.yg)("h3",{id:"channel-"},"channel ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"channel-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The channel name to publish the event.")),(0,n.yg)("h3",{id:"type-"},"type ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"type-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The event name to publish.")),(0,n.yg)("h3",{id:"payload-"},"payload ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"payload-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The payload to publish.")),(0,n.yg)("h3",{id:"date-"},"date ",(0,n.yg)(h,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"date-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The date of the event.")))}f.isMDXComponent=!0}}]);