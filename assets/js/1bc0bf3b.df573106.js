"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermissions/index.ts"},u=void 0,c={unversionedId:"authentication/hooks/use-permissions/index",id:"authentication/hooks/use-permissions/index",title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/authentication/hooks/use-permissions/index.md",sourceDirName:"authentication/hooks/use-permissions",slug:"/authentication/hooks/use-permissions/",permalink:"/docs/authentication/hooks/use-permissions/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/authentication/hooks/use-permissions/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1707902063,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{title:"usePermissions",description:"usePermissions data hook from Refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermissions/index.ts"},sidebar:"mainSidebar",previous:{title:"useLogout",permalink:"/docs/authentication/hooks/use-logout/"},next:{title:"useRegister",permalink:"/docs/authentication/hooks/use-register/"}},p={},l=[{value:"Usage",id:"usage",level:2}],m={toc:l};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"usePermissions")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPermissions")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.kt)("p",null,"Data that is resolved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPermissions")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"usePermissions")," can be useful when you want to get user's permission's anywhere in your code."),(0,r.kt)("p",null,"For example, if you want only the users with the admin role to see the create button in a list page, we have a logic in ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getPermissions")," method like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // ...\n  // highlight-start\n  getPermissions: async () => {\n    return ["admin"];\n  },\n  // highlight-end\n  // ...\n};\n')),(0,r.kt)("p",null,"Get permissions data in the list page with ",(0,r.kt)("inlineCode",{parentName:"p"},"usePermissions")," and check if the user has ",(0,r.kt)("inlineCode",{parentName:"p"},'"admin'),'" role:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'// highlight-next-line\nimport { usePermissions } from "@refinedev/core";\nimport { List } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { data: permissionsData } = usePermissions();\n\n  return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,r.kt)("p",null,"To learn more about the ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," component and CRUD views, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides-concepts/ui-libraries/#views"},"UI Libraries")," guide."))}d.isMDXComponent=!0}}]);