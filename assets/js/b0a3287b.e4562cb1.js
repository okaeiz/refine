"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88968],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=l(n),u=r,m=g["".concat(p,".").concat(u)]||g[u]||c[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>g});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of RefineWeek series will be structured.",slug:"refine-react-invoice-generator-1",authors:"abdullah_numan",tags:["refine-week","Refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Fsocial.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/refine-react-invoice-generator-1",source:"@site/blog/2023-04-10-refine-invoicer-1.md",title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of RefineWeek series will be structured.",date:"2023-04-10T00:00:00.000Z",formattedDate:"April 10, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"Refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:9.195,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Pilot & Refine architecture",description:"We'll be taking a look at the architecture of Refine and how week of RefineWeek series will be structured.",slug:"refine-react-invoice-generator-1",authors:"abdullah_numan",tags:["refine-week","Refine","strapi","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Setting Up the Invoicer App",permalink:"/blog/refine-react-invoice-generator-2"},nextItem:{title:"Building a React Admin Dashboard with Refine",permalink:"/blog/building-react-admin-dashboard"},relatedPosts:[{title:"Build a Progressive Web App (PWA) with Next.js",description:"We will walk you through the entire process of building a PWA using Next.JS and Refine framework, from start to finish!",permalink:"/blog/next-js-pwa",formattedDate:"June 25, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:23.09,date:"2024-06-25T00:00:00.000Z"},{title:"Creating an Admin Dashboard with Refine",description:"We'll be building a admin backend app for the Pixels client app.",permalink:"/blog/refine-pixels-5",formattedDate:"February 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:18.84,date:"2023-02-18T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.18,date:"2022-11-17T00:00:00.000Z"}],authorPosts:[{title:"Building a React Admin Panel with Refine and daisyUI",description:"We'll build a simple React admin panel using Refine and daisyUI.",permalink:"/blog/daisy-ui-react-admin-panel",formattedDate:"September 6, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:60.515,date:"2023-09-06T00:00:00.000Z"},{title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",permalink:"/blog/refine-pixels-6",formattedDate:"February 19, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.205,date:"2023-02-19T00:00:00.000Z"},{title:"The Anatomy of the Web Development in 2024",description:"This post depicts a general picture of where web development is headed in 2024 with a focus on the Node.js/React ecosystem - and provides an inside-out report on how Refine.js is starting to make an impact as a React-based meta-framework.",permalink:"/blog/web-development",formattedDate:"December 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:14.205,date:"2023-12-20T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},g=[{value:"What is <strong>Refine</strong> ?",id:"what-is-refine-",level:2},{value:"What is Strapi ?",id:"what-is-strapi-",level:2},{value:"Refine Architecture",id:"refine-architecture",level:2},{value:"Providers and Hooks",id:"providers-and-hooks",level:2},{value:"Support Packages",id:"support-packages",level:2},{value:"A week of Refine ft. Strapi",id:"a-week-of-refine-ft-strapi",level:2},{value:"Day One - On This #RefineWeek",id:"day-one---on-this-refineweek",level:3},{value:"Day Two - Setting Up the App",id:"day-two---setting-up-the-app",level:3},{value:"Day Three - Adding CRUD Actions &amp; Authentication",id:"day-three---adding-crud-actions--authentication",level:3},{value:"Day Four - Adding Mission and Invoice Pages",id:"day-four---adding-mission-and-invoice-pages",level:3},{value:"Day Five - Adding PDF Renderer",id:"day-five---adding-pdf-renderer",level:3},{value:"Summary",id:"summary",level:2}],c={toc:g},u="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This is the opening post of another 2023 ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,a.yg)("strong",{parentName:"a"},"#RefineWeek"))," series. It is intended to provide an introduction to the series itself as well as to present ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,a.yg)("strong",{parentName:"a"},"Refine")),", a React framework that is used to rapidly build any data heavy CRUD apps like dashboards, admin panels and e-commerce storefronts."),(0,a.yg)("p",null,"This five part guide aims to help developers learn the ins-and-outs of ",(0,a.yg)("strong",{parentName:"p"},"Refine"),"'s powerful capabilities and get going with ",(0,a.yg)("strong",{parentName:"p"},"Refine")," within a week."),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"600px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Fmultiple_logo.png",alt:"refine banner"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("p",null,"In this series we are going to build a ",(0,a.yg)("strong",{parentName:"p"},"Invoicer - React PDF Invoice Generator")," app with ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,a.yg)("strong",{parentName:"a"},"Refine")),", ",(0,a.yg)("a",{parentName:"p",href:"https://strapi.io/"},(0,a.yg)("strong",{parentName:"a"},"Strapi"))," and ",(0,a.yg)("a",{parentName:"p",href:"https://ant.design/"},(0,a.yg)("strong",{parentName:"a"},"Ant Design")),"."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://invoice-generator.refine.dev/"},"\ud83d\udc49 The live version of the app is be available here.")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/refine-week-invoice-generator"},"\ud83d\udc49 The final apps source code is available on GitHub.")),(0,a.yg)("p",null,"To get completed client source code simply run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," npm create refine-app@latest -- --example refine-week-invoice-generator\n")),(0,a.yg)("h2",{id:"what-is-refine-"},"What is ",(0,a.yg)("strong",{parentName:"h2"},"Refine")," ?"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,a.yg)("strong",{parentName:"a"},"Refine"))," is a highly customizable ",(0,a.yg)("strong",{parentName:"p"},"React")," based framework that has a headless core package and comes with a myriad of supplementary modules for the UI, backend API clients and Internationalization support."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Refine"),"'s (intentionally decapitalized) core is strongly opinionated about RESTful conventions, HTTPS networking, state management, authentication and authorization. It is, however, unopinionated about the UI and render logic. This makes it customizable according to one's choice of UI library and frameworks."),(0,a.yg)("h2",{id:"what-is-strapi-"},"What is Strapi ?"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://strapi.io"},(0,a.yg)("strong",{parentName:"a"},"Strapi"))," is an open source content management system ( CMS ) which allows us to build headless backend services for creating and managing content."),(0,a.yg)("p",null,"It is highly customizable and can be hosted locally as well as in the cloud. ",(0,a.yg)("strong",{parentName:"p"},"Strapi")," is especially useful for building readily available RESTful APIs available for consumption from a frontend app."),(0,a.yg)("h2",{id:"refine-architecture"},"Refine Architecture"),(0,a.yg)("p",null,"A ",(0,a.yg)("strong",{parentName:"p"},"Refine")," app is centered mainly around the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component, which is mostly configured via a set of provider props that each requires a provider object to be passed in. An example usage of providers on the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { DataProvider } from "@refinedev/strapi-v4";\nimport routerBindings from "@refinedev/react-router-v6";\n\n<Refine\n  dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}\n  authProvider={authProvider}\n  routerProvider={{ routerProvider }}\n  resources={[]}\n  // ... etc.\n/>;\n')),(0,a.yg)("p",null,"The code above shows a few of the props and their assigned objects. As can be inferred from this, rather than precisely being a component, ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/components/refine-config/"},(0,a.yg)("inlineCode",{parentName:"a"},"<Refine />"))," is largely a monolith of provider configurations backed by a context for each.",(0,a.yg)("br",{parentName:"p"}),"\n","Hence, inside ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/data/data-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"dataProvider")),", we should have a standard set of methods for making API requests; inside ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/authentication/auth-provider/#what-is-auth-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"authProvider")),", we should have methods for dealing with authentication and authorization; inside ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/routers/"},(0,a.yg)("inlineCode",{parentName:"a"},"routerProvider")),", we should have methods for dealing with standard routing - both RESTful and non-RESTful, etc. And each of these providers should have their own set of conventions and type definitions."),(0,a.yg)("p",null,"For example, a ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," object should have the following signature to which any definition of a data provider object should conform:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title=" Data provider object signature"',title:'"',Data:!0,provider:!0,object:!0,'signature"':!0},'const dataProvider: DataProvider = {\n  // required methods\n  getList: ({ resource, pagination, sorters, filters, meta }) => Promise,\n  create: ({ resource, variables, meta }) => Promise,\n  update: ({ resource, id, variables, meta }) => Promise,\n  deleteOne: ({ resource, id, variables, meta }) => Promise,\n  getOne: ({ resource, id, meta }) => Promise,\n  getApiUrl: () => "",\n\n  // optional methods\n  getMany: ({ resource, ids, meta }) => Promise,\n  createMany: ({ resource, variables, meta }) => Promise,\n  deleteMany: ({ resource, ids, variables, meta }) => Promise,\n  updateMany: ({ resource, ids, variables, meta }) => Promise,\n  custom: ({ url, method, filters, sorters, payload, query, headers, meta }) =>\n    Promise,\n};\n')),(0,a.yg)("p",null,"The underlying architecture facilitates any presentational component passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," to be able to consume these configured methods via corresponding hooks. Each method in a provider has appropriate hooks via which a consumer component is able to fetch data from the backend. For instance, ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/hooks/list/useSimpleList/"},(0,a.yg)("inlineCode",{parentName:"a"},"useSimpleList()"))," is a high level data and UI hook via which the ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/data/data-provider#getlist"},(0,a.yg)("inlineCode",{parentName:"a"},"dataProvider.getList()"))," provider method can be accessed."),(0,a.yg)("p",null,"An example hook usage from a UI component looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { listProps } = useSimpleList<IClient>({\n  meta: { populate: ["contacts"] },\n});\n')),(0,a.yg)("p",null,"The above ",(0,a.yg)("inlineCode",{parentName:"p"},"useSimpleList()")," hook is a ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/antd")," UI hook that is built on top of the low level ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/data/useList/"},(0,a.yg)("inlineCode",{parentName:"a"},"useList()"))," data hook. Low level hooks, in turn, leverage ",(0,a.yg)("strong",{parentName:"p"},"React Query")," hooks in order to make API calls invoked from inside the provider methods. Here's an early sneak peek into the action under the hood:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Inside useList() hook"',title:'"Inside',"useList()":!0,'hook"':!0},'const queryResponse = useQuery<GetListResponse<TData>, TError>(\n  queryKey.list(config),\n  ({ queryKey, pageParam, signal }) => {\n    const { hasPagination, ...restConfig } = config || {};\n    return getList<TData>({\n      resource,\n      ...restConfig,\n      hasPagination,\n      metaData: {\n        ...metaData,\n        queryContext: {\n          queryKey,\n          pageParam,\n          signal,\n        },\n      },\n    });\n  },\n  {\n    ...queryOptions,\n    onSuccess: (data) => {\n      queryOptions?.onSuccess?.(data);\n\n      const notificationConfig =\n        typeof successNotification === "function"\n          ? successNotification(data, { metaData, config }, resource)\n          : successNotification;\n\n      handleNotification(notificationConfig);\n    },\n    onError: (err: TError) => {\n      checkError(err);\n      queryOptions?.onError?.(err);\n\n      const notificationConfig =\n        typeof errorNotification === "function"\n          ? errorNotification(err, { metaData, config }, resource)\n          : errorNotification;\n\n      handleNotification(notificationConfig, {\n        key: `${resource}-useList-notification`,\n        message: translate(\n          "common:notifications.error",\n          { statusCode: err.statusCode },\n          `Error (status code: ${err.statusCode})`,\n        ),\n        description: err.message,\n        type: "error",\n      });\n    },\n  },\n);\n')),(0,a.yg)("p",null,"We'll be visiting code like this on Day 4, but if we examine the snippet above closely we can see that ",(0,a.yg)("strong",{parentName:"p"},"Refine")," uses ",(0,a.yg)("strong",{parentName:"p"},"React Query")," to handle caching, state management as well as errors out-of-the-box."),(0,a.yg)("p",null,"The following diagram illustrates the interactions:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/providers/data-provider/api-consuming-flow.png",alt:"1-refine-week"})),(0,a.yg)("h2",{id:"providers-and-hooks"},"Providers and Hooks"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Refine"),"'s power lies in the abstraction of various app component logic such as authentication, authorization, routing and data fetching - inside individual providers and their corresponding hooks."),(0,a.yg)("p",null,"Common providers include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://refine.dev/docs/authentication/auth-provider/#what-is-auth-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"authProvider"))," - for authentication and authorization."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://refine.dev/docs/data/data-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"dataProvider"))," - for CRUD operations."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://refine.dev/docs/packages/documentation/routers/"},(0,a.yg)("inlineCode",{parentName:"a"},"routerProvider"))," - for dealing with routing.")),(0,a.yg)("p",null,"For an exhaustive list of providers, please visit the ",(0,a.yg)("strong",{parentName:"p"},"Refine")," providers documentation from ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/"},"here"),"."),(0,a.yg)("p",null,"As part of the core package, each method in these providers comes with a corresponding low level hook to be used from inside higher level hooks, partial UI components and pages. As mentioned above with the ",(0,a.yg)("inlineCode",{parentName:"p"},"useSimpleList()")," hook, higher level hooks can be built on top of lower level hooks such as the ",(0,a.yg)("inlineCode",{parentName:"p"},"useList()")," hook. For more details, please refer to the ",(0,a.yg)("strong",{parentName:"p"},"Refine")," hooks documentation starting ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/accessControl/useCan/"},"here"),"."),(0,a.yg)("h2",{id:"support-packages"},"Support Packages"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Refine")," is inherently headless in its core API and deliberately agnostic about the UI and backend layers. Being so, it is able to provide fantastic support for major UI libraries and frameworks as well as popular backend frameworks and services. To name a few, ",(0,a.yg)("strong",{parentName:"p"},"Refine"),"'s UI support packages include ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/"},(0,a.yg)("strong",{parentName:"a"},"Ant Design"))," and ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mui/"},(0,a.yg)("strong",{parentName:"a"},"Material UI")),". Backend supplementary modules include ",(0,a.yg)("a",{parentName:"p",href:"https://strapi.io/"},(0,a.yg)("strong",{parentName:"a"},"Strapi")),", ",(0,a.yg)("strong",{parentName:"p"},"GraphQL"),", ",(0,a.yg)("strong",{parentName:"p"},"NestJS")," and ."),(0,a.yg)("p",null,"For a complete list of all these modules, check out ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/list-of-packages/"},"this page"),"."),(0,a.yg)("h2",{id:"a-week-of-refine-ft-strapi"},"A week of Refine ft. Strapi"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center",width:"600px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-04-10-refine-invoicer-1%2Finvoicer_logo.png",alt:"refine banner"})),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("p",null,"In this tutorial series, we will be going through a few vital features of ",(0,a.yg)("strong",{parentName:"p"},"Refine")," by building a basic ",(0,a.yg)("strong",{parentName:"p"},"Invoicer - Pdf Invoice Generator")," app. This section is intended to provide more details."),(0,a.yg)("p",null,"The final version of the ",(0,a.yg)("strong",{parentName:"p"},"Invoicer")," comprises of a dashboard that allows users to register their companies, add their clients and contacts, create tasks (missions) that they do for their clients and issue invoices for the tasks. Users are also able to generate a pdf document of the invoice."),(0,a.yg)("p",null,"We will be building this app day-by-day over a period of 5 days. And while doing so, we will dive deep into the details of related providers, hooks, UI components and how ",(0,a.yg)("strong",{parentName:"p"},"Refine")," works behind the scenes."),(0,a.yg)("p",null,"As far as our features and functionalities go, we will cover some key concepts including ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," ",(0,a.yg)("inlineCode",{parentName:"p"},"routerProvider")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"resources")," props of ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />"),", the provider objects and their associated hooks. For the UI side, we will be using the optional ",(0,a.yg)("strong",{parentName:"p"},"Ant Design")," package supported by ",(0,a.yg)("strong",{parentName:"p"},"Refine"),". For the backend, we will use a ",(0,a.yg)("a",{parentName:"p",href:"https://strapi.io"},(0,a.yg)("strong",{parentName:"a"},"Strapi"))," content management system."),(0,a.yg)("br",null),(0,a.yg)("p",null,"Here are the detailed outlines split per day:"),(0,a.yg)("h3",{id:"day-one---on-this-refineweek"},"Day One - On This #RefineWeek"),(0,a.yg)("p",null,"This opening post. Hello! \ud83d\udc4b \ud83d\udc4b We are here! \ud83d\ude04 \ud83d\ude04"),(0,a.yg)("h3",{id:"day-two---setting-up-the-app"},"Day Two - Setting Up the App"),(0,a.yg)("p",null,"We start with setting up the ",(0,a.yg)("strong",{parentName:"p"},"React Pdf Invoice Generator")," app using ",(0,a.yg)("strong",{parentName:"p"},"Refine")," ",(0,a.yg)("strong",{parentName:"p"},"CLI Wizard"),". We choose ",(0,a.yg)("strong",{parentName:"p"},"Refine"),"'s optional ",(0,a.yg)("strong",{parentName:"p"},"Ant Design")," and ",(0,a.yg)("strong",{parentName:"p"},"Strapi")," modules as support packages. After initialization, we explore the boilerplate code created by the ",(0,a.yg)("strong",{parentName:"p"},"CLI Wizard"),", look into the details of the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," objects and briefly discuss their mechanisms."),(0,a.yg)("p",null,"In the later sections, we also initialize the ",(0,a.yg)("strong",{parentName:"p"},"Strapi")," backend app for our ",(0,a.yg)("strong",{parentName:"p"},"React Invoice Generator"),". Here's what we do step by step after that:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Start the ",(0,a.yg)("strong",{parentName:"li"},"Strapi")," server and sign up for an ",(0,a.yg)("strong",{parentName:"li"},"admin")," user to get access to the dashboard."),(0,a.yg)("li",{parentName:"ol"},"We create collections for our app using the ",(0,a.yg)("inlineCode",{parentName:"li"},"Content-Type Manager"),"."),(0,a.yg)("li",{parentName:"ol"},"We set up permissions for ",(0,a.yg)("inlineCode",{parentName:"li"},"authenticated")," role for ",(0,a.yg)("strong",{parentName:"li"},"Refine")," app users, i.e. our ",(0,a.yg)("strong",{parentName:"li"},"React Invoice Generator")," app users.")),(0,a.yg)("h3",{id:"day-three---adding-crud-actions--authentication"},"Day Three - Adding CRUD Actions & Authentication"),(0,a.yg)("p",null,"On Day 3, we start off with generating an API Token for our ",(0,a.yg)("strong",{parentName:"p"},"Strapi")," backend app to be accessed from our ",(0,a.yg)("strong",{parentName:"p"},"React Invoice Generator"),". We then update our ",(0,a.yg)("inlineCode",{parentName:"p"},"constants.ts")," file with them."),(0,a.yg)("p",null,"We complete the app halfway by adding CRUD pages for ",(0,a.yg)("inlineCode",{parentName:"p"},"companies"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"clients")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"contacts"),". While doing so, we get familiar with ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," methods such as ",(0,a.yg)("inlineCode",{parentName:"p"},"getList"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"delete")," and some of the corresponding low level hooks: ",(0,a.yg)("inlineCode",{parentName:"p"},"useList()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useCreate()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete()"),"."),(0,a.yg)("p",null,"We also examine the use of higher level hooks such as ",(0,a.yg)("inlineCode",{parentName:"p"},"useSimpleList()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useModalForm()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useDrawerForm()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable()")," that integrate data hooks with ",(0,a.yg)("strong",{parentName:"p"},"Ant Design")," components."),(0,a.yg)("p",null,"We discuss authentication with the ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," object and implement an email / password based authentication with the ",(0,a.yg)("inlineCode",{parentName:"p"},"<AuthPage />")," component that is provided by ",(0,a.yg)("strong",{parentName:"p"},"refine-Ant Design")," (",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/antd"),") package."),(0,a.yg)("h3",{id:"day-four---adding-mission-and-invoice-pages"},"Day Four - Adding Mission and Invoice Pages"),(0,a.yg)("p",null,"On Day 4, we continue to add CRUD pages for ",(0,a.yg)("inlineCode",{parentName:"p"},"missions")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"invoices")," resources. We first add ",(0,a.yg)("strong",{parentName:"p"},"Strapi")," collections for ",(0,a.yg)("inlineCode",{parentName:"p"},"missions")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"invoices")," and set up permissions on them for ",(0,a.yg)("inlineCode",{parentName:"p"},"authenticated")," user role. And then we go ahead and add the resource items, routes as well as the CRUD pages."),(0,a.yg)("p",null,"We also get an opportunity to dig into some low level code to make sense of how ",(0,a.yg)("strong",{parentName:"p"},"Refine")," undertakes data heavy tasks behind the scenes and presents us with convenient, highly customizable hooks like ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"useSelect()")," to be used in our app."),(0,a.yg)("p",null,"Besides the above mentioned hooks, we examine the source code for the ",(0,a.yg)("strong",{parentName:"p"},"refine-Ant Design")," ",(0,a.yg)("inlineCode",{parentName:"p"},"<DeleteButton />")," component."),(0,a.yg)("h3",{id:"day-five---adding-pdf-renderer"},"Day Five - Adding PDF Renderer"),(0,a.yg)("p",null,"On the final day, we add a pdf renderer to generate pdf document and view for our invoices. We use the ",(0,a.yg)("inlineCode",{parentName:"p"},"@react-pdf/renderer")," ",(0,a.yg)("inlineCode",{parentName:"p"},"npm")," package for this."),(0,a.yg)("p",null,"We then wrap up the series by discussing the accomplishments we are about to achieve starting Day 2."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"In this post, we introduced the ",(0,a.yg)("strong",{parentName:"p"},"Refine")," framework and the ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/week-of-refine-strapi/"},(0,a.yg)("strong",{parentName:"a"},"#RefineWeek"))," series itself. We talked about ",(0,a.yg)("strong",{parentName:"p"},"Refine"),"'s underlying architecture which consists of providers, hooks and components that help rapidly build internal tools."),(0,a.yg)("p",null,"We laid out the plans for building a ",(0,a.yg)("strong",{parentName:"p"},"React Pdf Invoice Generator")," app in considerable depth."),(0,a.yg)("p",null,"Tomorrow, on Day Two, we are ready to start ",(0,a.yg)("strong",{parentName:"p"},"Setting Up the App"),". See you soon!"))}m.isMDXComponent=!0}}]);