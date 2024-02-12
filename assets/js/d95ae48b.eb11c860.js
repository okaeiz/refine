"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23714],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var o=n(86010),r=n(67294),a=n(73808),i=n(96319),s=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>r.createElement("div",{className:(0,o.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){c(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?r.createElement(v,e):r.createElement(f,e)},f=e=>{var t,n,c,m,f,v,h,g,b,y,w,k,x,O,S,{startRoute:N,showNavigator:P,showLineNumbers:E,showOpenInCodeSandbox:R,initialPercentage:F=50,dependencies:j,showReadOnly:C,options:I={showTabs:!0,initMode:"lazy",classes:{"sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,o.Z)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-tab-button":(0,o.Z)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:A="react-ts",customSetup:D,files:M,previewOnly:z,layout:L,height:T=420,wrapperClassName:V,className:B,showFiles:H=!1,showConsole:U=!1,hidePreview:Z=!1}=e,$=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[K,q]=r.useState(!1);r.useEffect((()=>{q(!0)}),[]);const{colorMode:G}=(0,s.I)();var W,X;null!=I||(I={}),null!==(W=(O=I).resizablePanels)&&void 0!==W||(O.resizablePanels=!0),null!==(X=(S=I).editorWidthPercentage)&&void 0!==X||(S.editorWidthPercentage=null!=F?F:50);const _={showTabs:I.showTabs,showLineNumbers:I.showLineNumbers,showInlineErrors:I.showInlineErrors,wrapContent:I.wrapContent,closableTabs:I.closableTabs,initMode:I.initMode,extensions:null===(t=I.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=I.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:I.readOnly,showReadOnly:null!=C?C:I.showReadOnly,additionalLanguages:null===(c=I.codeEditor)||void 0===c?void 0:c.additionalLanguages},Y={activeFile:I.activeFile,visibleFiles:I.visibleFiles,recompileMode:I.recompileMode,recompileDelay:I.recompileDelay,autorun:I.autorun,autoReload:I.autoReload,bundlerURL:I.bundlerURL,startRoute:I.startRoute,skipEval:I.skipEval,fileResolver:I.fileResolver,initMode:I.initMode,initModeObserverOptions:I.initModeObserverOptions,externalResources:I.externalResources,logLevel:I.logLevel,classes:I.classes},[J,Q]=r.useState(!1),{onHandleMouseDown:ee,horizontalSize:te}=(({initialSize:e=50})=>{const[t,n]=r.useState(e),o=r.useRef(null),a=e=>{if(!o.current)return;const t=o.current.parentElement;if(!t)return;const{left:r,width:a}=t.getBoundingClientRect(),i=(e.clientX-r)/a*100,s=Math.min(Math.max(i,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},i=()=>{var e;const t=null===(e=o.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),o.current=null)};return r.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",i),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",i)})),[]),{horizontalSize:t,onHandleMouseDown:r.useCallback((e=>{o.current=e.target}),[])}})({initialSize:I.editorWidthPercentage}),ne=!z&&!(null===(f=L)||void 0===f||null===(m=f.includes)||void 0===m?void 0:m.call(f,"col"));var oe,re,ae,ie,se,le;return r.createElement(r.Fragment,null,r.createElement("div",{className:(0,o.Z)("pb-6",V)},r.createElement("div",{className:(0,o.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",B)},r.createElement(i.oT,d({key:`${A}-${G}-${K}`,customSetup:d({dependencies:j},D),files:M,options:Y,template:A,theme:"light"===G?u(d({},a.FM),{colors:u(d({},a.FM.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(d({},a.I2),{colors:u(d({},a.I2.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,o.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},$),r.createElement(i.sp,{className:(0,o.Z)("col"===L&&"!flex-col","col-reverse"===L&&"!flex-col-reverse")},H&&r.createElement(i.Lj,{autoHiddenFiles:!0,style:{height:null!==(oe=I.editorHeight)&&void 0!==oe?oe:T}}),!z&&r.createElement(i._V,u(d({},_),{showLineNumbers:E,closableTabs:H,initMode:"lazy",style:u(d({height:null!==(re=I.editorHeight)&&void 0!==re?re:T},(null===(h=L)||void 0===h||null===(v=h.includes)||void 0===v?void 0:v.call(h,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})})),U?r.createElement(i.Tq,{style:u(d({height:null!==(ae=I.editorHeight)&&void 0!==ae?ae:T},(null===(b=L)||void 0===b||null===(g=b.includes)||void 0===g?void 0:g.call(b,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})}):null,ne?r.createElement(l,{onMouseDown:ee,horizontalSize:te}):null,Z?null:r.createElement(r.Fragment,null,r.createElement(i.Gj,{showOpenInCodeSandbox:R,startRoute:N,showNavigator:null!=P?P:I.showNavigator,showRefreshButton:I.showRefreshButton,style:u(d({display:Z?"none":"flex"},(null===(w=L)||void 0===w||null===(y=w.includes)||void 0===y?void 0:y.call(w,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-te,flexShrink:100-te,flexBasis:0,width:z?"100%":100-te+"%"}),{gap:0,height:null!==(ie=I.editorHeight)&&void 0!==ie?ie:T})},r.createElement("div",{className:"sp-custom-loading"},r.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,o.Z)("w-12","h-12","rounded-full")}))))))),r.createElement("div",{className:(0,o.Z)(""),style:{height:Number(null!==(se=I.editorHeight)&&void 0!==se?se:T)+2}}),r.createElement("div",{className:(0,o.Z)((null===(x=L)||void 0===x||null===(k=x.includes)||void 0===k?void 0:k.call(x,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=I.editorHeight)&&void 0!==le?le:T)+2}})),r.createElement("section",{className:"hidden max-w-0 max-h-0"},r.createElement("p",null,`Dependencies: ${Object.keys(null!=j?j:{}).map((e=>`${e}@${j[e]}`))}`),r.createElement("h3",null,"Code Files"),Object.keys(null!=M?M:{}).map((e=>r.createElement("div",{key:e},r.createElement("div",null,`File: ${e}`),r.createElement("div",null,`Content: ${"code"in M[e]?M[e].code:M[e]}`))))))},v=e=>{const t={hidePreview:!0,showConsole:!1};return r.createElement(f,u(d({},t,e),{template:"react-ts"}))}},54264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var o=n(67294),r=n(3905),a=n(58943);function i(){return o.createElement(a.x,{showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@refinedev/react-router-v6":"latest","react-router-dom":"latest","react-router":"latest"},startRoute:"/products/edit/123",files:{"/App.tsx":{code:s,hidden:!0},"/style.css":{code:l,hidden:!0},"/edit.tsx":{code:c,active:!0}}})}const s='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Navigate, Link, Outlet } from "react-router-dom";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport "./style.css";\n\nimport { Edit } from "./edit.tsx";\n\nexport default function App() {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        edit: "/products/edit/:id",\n                    }\n                ]}\n            >\n                <Routes>\n                    <Route index element={<Navigate to="/products/edit/123" />} />\n                    <Route path="/products" element={<Outlet />}>\n                        <Route path="edit/:id" element={<Edit />} />\n                    </Route>\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n}\n'.trim(),l="\nhtml {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 0;\n    padding: 12px;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: sans-serif;\n}\nform button {\n    display: block;\n    // width: 100%;\n    margin-bottom: 6px;\n}\n.page {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.page form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  width: 100%;\n  max-width: 400px;\n}\n.page form label {\n  display: flex;\n  align-items: center;\n}\n.page form label input, .page form label textarea, .page form label select {\n  flex: 1;\n}\n.page form label span {\n  width: 90px;\n}\n.auto-save-wrapper {\n  padding: 6px 0;\n  font-weight: 600;\n}\n".trim(),c='import React from "react";\nimport { useForm, useSelect, AutoSaveIndicator, HttpError, BaseKey } from "@refinedev/core";\n\nexport const Edit: React.FC = () => {\n  const { queryResult, isLoading, onFinish, autoSaveProps, onFinishAutoSave } = useForm<\n    IProduct,\n    HttpError,\n    FormValues\n  >({\n    autoSave: {\n      enabled: true,\n      interval: 1000,\n    },\n  });\n\n  const { options: categorySelectOptions } = useSelect({\n    resource: "categories",\n  });\n\n  const defaultValues = queryResult?.data?.data;\n\n  return (\n    <div className="page">\n      <div className="auto-save-wrapper">\n        <AutoSaveIndicator {...autoSaveProps} />\n      </div>\n      <form\n        onChange={(event) => {\n          const formData = new FormData(event.currentTarget);\n\n          onFinishAutoSave(transformValues(Object.fromEntries(formData.entries()) as RawFormValues));\n        }}\n        onSubmit={(event) => {\n          event.preventDefault();\n          const formData = new FormData(event.currentTarget);\n\n          onFinish(transformValues(Object.fromEntries(formData.entries()) as RawFormValues));\n        }}\n      >\n        <label htmlFor="name">\n          <span>Name</span>\n          <input name="name" placeholder="Name" defaultValue={defaultValues?.name} />\n        </label>\n        <label htmlFor="description">\n          <span>Description</span>\n          <textarea name="description" placeholder="Description" defaultValue={defaultValues?.description} />\n        </label>\n        <label htmlFor="material">\n          <span>Material</span>\n          <input name="material" placeholder="Material" defaultValue={defaultValues?.material} />\n        </label>\n        <label htmlFor="category">\n          <span>Category</span>\n          <select name="category" defaultValue={defaultValues?.category?.id}>\n            {categorySelectOptions.map((option) => (\n              <option key={option.value} value={option.value}>\n                {option.label}\n              </option>\n            ))}\n          </select>\n        </label>\n        <button type="submit">Submit</button>\n      </form>\n    </div>\n  );\n};\n\nconst transformValues = (values: RawFormValues): FormValues => {\n  return {\n    ...values,\n    category: values.category ? { id: values.category } : undefined,\n  };\n};\n\ninterface IProduct {\n  id: BaseKey;\n  name: string;\n  material: string;\n  description: string;\n  category: { id: BaseKey; name: string };\n}\n\ninterface FormValues {\n  name?: string;\n  material?: string;\n  description?: string;\n  category?: { id: BaseKey };\n}\n\ninterface RawFormValues extends FormValues {\n  category?: BaseKey;\n}\n'.trim();function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m={title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/core/src/components/autoSaveIndicator/index.tsx"},f=void 0,v={unversionedId:"core/components/auto-save-indicator/index",id:"core/components/auto-save-indicator/index",title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"@site/docs/core/components/auto-save-indicator/index.md",sourceDirName:"core/components/auto-save-indicator",slug:"/core/components/auto-save-indicator/",permalink:"/docs/core/components/auto-save-indicator/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/components/auto-save-indicator/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1707745664,formattedLastUpdatedAt:"Feb 12, 2024",frontMatter:{title:"<AutoSaveIndicator />",description:"<AutoSaveIndicator> component shows `autoSave` status on edit actions.",source:"packages/core/src/components/autoSaveIndicator/index.tsx"},sidebar:"mainSidebar",previous:{title:"Audit Log Provider",permalink:"/docs/examples/audit-log/audit-log-provider"},next:{title:"Inferencer",permalink:"/docs/core/components/inferencer/"}},h={},g=[{value:"Usage",id:"usage",level:2},{value:"Customizing the indicator",id:"customizing-the-indicator",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],b=(y="PropsTable",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var y;const w={toc:g};function k(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)("wrapper",u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){d(e,t,n[t])}))}return e}({},w,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Refine's forms provide a built-in auto-save feature. This allows you to automatically save the form when the user makes changes to the form which can be useful for forms that are long or complex and the user may not want to lose their progress."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component is a utility component that can be used to show a visual indicator to the user about the auto-save status of the form."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Refine's core ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook does not automatically trigger the auto-save feature. You need to manually trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"onFinishAutoSave")," function returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook to trigger the auto-save feature.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Extended implementations of Refine's ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," such as; ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-form"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/antd"),"'s ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/react-hook-form/use-form"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/react-hook-form"),"'s ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/mantine/hooks/use-form"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/mantine"),"'s ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," automatically trigger the auto-save feature when a form value changes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component is only designed to display a visual feedback to the user about the auto-save status of the form. It does not contain any logic to trigger the auto-save feature.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To learn more about the auto-save feature check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides-concepts/forms/#auto-save"},"Auto Save section in Forms guide"))))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Usage is as simple as spreading the ",(0,r.kt)("inlineCode",{parentName:"p"},"autoSaveProps")," object returned from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook into the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component. It will automatically determine the auto-save status and display the appropriate indicator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/core";\n\nconst EditPage = () => {\n  const { autoSaveProps } = useForm({\n    autoSave: {\n      enabled: true,\n    },\n  });\n\n  console.log(autoSaveProps);\n  /*\n    {\n      status: "success",  // "loading" | "error" | "idle" | "success"\n      error: null,        // HttpError | null\n      data: { ... },      // UpdateResponse | undefined,\n    }\n  */\n\n  return (\n    <div>\n      {/* highlight-start */}\n      {/* We\'ll pass the autoSaveProps from useForm\'s response to the <AutoSaveIndicator /> component. */}\n      <AutoSaveIndicator {...autoSaveProps} />\n      {/* highlight-end */}\n      <form\n      // ...\n      >\n        {/* ... */}\n      </form>\n    </div>\n  );\n};\n')),(0,r.kt)("p",null,"Example below shows the ",(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component in action."),(0,r.kt)(i,{mdxType:"Usage"}),(0,r.kt)("h3",{id:"customizing-the-indicator"},"Customizing the indicator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<AutoSaveIndicator />")," component accepts an ",(0,r.kt)("inlineCode",{parentName:"p"},"elements")," prop which can be used to customize the indicator for each status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { AutoSaveIndicator, useForm } from "@refinedev/core";\n\nconst EditPage = () => {\n  const { autoSaveProps } = useForm({\n    autoSave: {\n      enabled: true,\n    },\n  });\n\n  return (\n    <div>\n      <AutoSaveIndicator\n        {...autoSaveProps}\n        // highlight-start\n        elements={{\n          loading: <span>saving...</span>,\n          error: <span>auto save error.</span>,\n          idle: <span>waiting for changes.</span>,\n          success: <span>saved.</span>,\n        }}\n        // highlight-end\n      />\n      {/* ... */}\n    </div>\n  );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(b,{module:"@refinedev/core/AutoSaveIndicator","elements-type":'Partial<Record<"loading" \\| "error" \\| "idle" \\| "success", ReactNode>>',mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);