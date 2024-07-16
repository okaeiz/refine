"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33854],{58860:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the Refine framework for the admin panel. The project will consist of two parts, api and admin.",slug:"customizable-admin-panel-with-nestjs",authors:"yildiray",tags:["Refine","nestjs","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/customizable-admin-panel-with-nestjs",source:"@site/blog/2021-10-4-admin-panel-with-nestjs.md",title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the Refine framework for the admin panel. The project will consist of two parts, api and admin.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"nestjs",permalink:"/blog/tags/nestjs"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:4.175,hasTruncateMarker:!0,authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],frontMatter:{title:"Build Fast and Customizable Admin Panel with NestJS",description:"We will prepare a simple `job-posting` application. We will also use the Refine framework for the admin panel. The project will consist of two parts, api and admin.",slug:"customizable-admin-panel-with-nestjs",authors:"yildiray",tags:["Refine","nestjs","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Migrating a React-Admin Application to Refine",permalink:"/blog/migrating-a-react-admin-application-to-refine"},relatedPosts:[{title:"Building React admin panel with NextUI and Refine",description:"We will see how  to build a React admin panel using Refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.96,date:"2023-09-20T00:00:00.000Z"},{title:"refine vs RedwoodJS",description:"We will compare two open source React frameworks, that can be used to build CRUD applications",permalink:"/blog/refine-vs-redwood-js",formattedDate:"January 23, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:26.61,date:"2023-01-23T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using Refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.495,date:"2023-07-02T00:00:00.000Z"}],authorPosts:[{title:"Best Open-Source Headless CMS to Try for Your Next Application",description:"A headless CMS system, which can be developed quickly, contains many features you need, and helps you to produce products very quickly compared to traditional systems.",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.425,date:"2022-05-05T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"NestJS Rest Api",id:"nestjs-rest-api",level:2},{value:"Refine Admin Panel",id:"refine-admin-panel",level:2}],c={toc:d},u="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(u,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.yg)("strong",{parentName:"p"},"Refine"),". Although we plan to update it with the latest version of ",(0,a.yg)("strong",{parentName:"p"},"Refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.yg)("p",{parentName:"admonition"},"You should know that ",(0,a.yg)("strong",{parentName:"p"},"Refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,a.yg)("p",null,"In this article, we will prepare a simple ",(0,a.yg)("inlineCode",{parentName:"p"},"job-posting")," application. We will also use the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine")," framework for the ",(0,a.yg)("strong",{parentName:"p"},"admin panel"),". The project will consist of two parts, api and admin."),(0,a.yg)("p",null,"All the steps described are in this ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog-job-posting"},"repo"),"."),(0,a.yg)("h2",{id:"intro"},"Intro"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/nestjs/nest"},"NestJS")," is a framework for building efficient, scalable Node.js server-side applications. With ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx/crud")," we can add CRUD functions quickly and effortlessly on this framework."),(0,a.yg)("h2",{id:"nestjs-rest-api"},"NestJS Rest Api"),(0,a.yg)("p",null,"To start playing with NestJS you should have node (>= 10.13.0, except for v13) and ",(0,a.yg)("a",{parentName:"p",href:"https://nodejs.org"},"npm")," installed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Create Project Folder")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir job-posting-app\ncd job-posting-app\n")),(0,a.yg)("p",null,"Setting up a new project is quite simple with the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.nestjs.com/cli/overview"},"Nest CLI"),". With npm installed, you can create a new Nest project with the following commands in your OS terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm i -g @nestjs/cli\nnest new api\n")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm"},"TypeORM")," is definitely the most mature ORM available in the node.js world. Since it's written in TypeScript, it works pretty well with the Nest framework. I chose mysql as database. TypeORM supports many databases (MySQL, MariaDB, Postgres etc.)"),(0,a.yg)("p",null,"To start with this library we have to install all required dependencies:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save @nestjs/typeorm @nestjs/config typeorm mysql2\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Create an ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/api/.env.example"},".env.example")," file. Here we will save the database information."),(0,a.yg)("li",{parentName:"ul"},"Create and configured a ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/api/docker-compose.yml"},"docker-compose")," file for MySQL."),(0,a.yg)("li",{parentName:"ul"},"Create a ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/api/ormconfig.ts"},"ormconfig.ts")," file for migrations."),(0,a.yg)("li",{parentName:"ul"},"Add the following scripts to the ",(0,a.yg)("inlineCode",{parentName:"li"},"package.json")," file for migrations.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",\n"db:migration:generate": "npm run typeorm -- migration:generate",\n"db:migration:run": "npm run typeorm -- migration:run",\n"db:migration:revert": "npm run typeorm -- migration:revert",\n"db:refresh": "npm run typeorm schema:drop && npm run db:migration:run"\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Import the ",(0,a.yg)("inlineCode",{parentName:"li"},"TypeOrmModule")," into the ",(0,a.yg)("inlineCode",{parentName:"li"},"app.module.ts"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Install nestjsx-crud"),"\nI used ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/nestjsx/crud"},"nestjsx-crud")," library because it makes crud functions easier."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @nestjsx/crud @nestjsx/crud-typeorm class-transformer class-validator\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Since the steps to create Entities Controllers, and services are very long, I do not explain step by step. You can check the ",(0,a.yg)("a",{parentName:"em",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app"},"repo")," for details.")),(0,a.yg)("p",null,"It created these end-points automatically with nestjsx/crud."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-admin-panel-with-nestjs/api.png",alt:"api"}),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"refine-admin-panel"},"Refine Admin Panel"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Now let's Refine the admin panel.")," With ",(0,a.yg)("a",{parentName:"p",href:"https://pankod.github.io/superplate/docs"},"Superplate"),", we can quickly create a ",(0,a.yg)("inlineCode",{parentName:"p"},"refine")," project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest admin -- -b v3\n")),(0,a.yg)("p",null,"Answer as below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u2714 Select your project type \u203a refine-react\n\u2714 What will be the name of your app \xb7 admin\n\u2714 Package manager: \xb7 Npm\n\u2714 Do you want to use a UI Framework? \xb7 Ant Design\n\u2714 Do you want a customized theme?: \xb7 Yes (Custom Variables)\n\u2714 Router Provider: \xb7 React Router v6\n\u2714 Data Provider: \xb7 nestjsx-crud\n\u2714 Auth Provider: \xb7 None\n\u2714 Do you want to add example pages? \xb7 Yes (Recommended)\n\u2714 Do you want a customized layout? \xb7 Yes\n\u2714 i18n - Internationalization: \xb7 No\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd admin\nnpm run dev\n")),(0,a.yg)("p",null,"Refine's sample application will welcome you."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-admin-panel-with-nestjs/refine_sample.png",alt:"refine_sample"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"Change api url in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine-hackathon/tree/main/job-posting-app/blob/master/admin/src/App.tsx"},"admin/src/App.tsx")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'const API_URL = "http://localhost:3000";\n')),(0,a.yg)("p",null,"Let's add the listing page in Refine for the ",(0,a.yg)("inlineCode",{parentName:"p"},"companies")," crud end-point."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/admin/src/pages/companies/list.tsx"',title:'"/admin/src/pages/companies/list.tsx"'},'import {\n  List,\n  Table,\n  TextField,\n  useTable,\n  IResourceComponentsProps,\n  getDefaultSortOrder,\n  Space,\n  EditButton,\n  DeleteButton,\n  TagField,\n  ShowButton,\n} from "@pankod/refine";\nimport { ICompany } from "interfaces";\n\nexport const CompanyList: React.FC<IResourceComponentsProps> = () => {\n  const { tableProps, sorter } = useTable<ICompany>({\n    sorters: {\n      initial: [\n        {\n          field: "id",\n          order: "desc",\n        },\n      ],\n    },\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column\n          dataIndex="id"\n          key="id"\n          title="ID"\n          render={(value) => <TextField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n          sorter\n        />\n        <Table.Column\n          dataIndex="name"\n          key="name"\n          title="Name"\n          render={(value) => <TextField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("name", sorter)}\n          sorter\n        />\n        <Table.Column\n          dataIndex="location"\n          key="location"\n          title="Location"\n          render={(value) => <TextField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("location", sorter)}\n          sorter\n        />\n        <Table.Column\n          dataIndex="isActive"\n          key="isActive"\n          title="Is Active"\n          render={(value) => <TagField value={value} />}\n          defaultSortOrder={getDefaultSortOrder("status", sorter)}\n          sorter\n        />\n        <Table.Column<ICompany>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n')),(0,a.yg)("p",null,"Similarly, let's add the create, edit and jobs crud pages under the pages folder."),(0,a.yg)("p",null,"Next, let's define the resources in ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," (App.tsx):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport nestjsxCrudDataProvider from "@refinedev/nestjsx-crud";\n\nimport "styles/antd.less";\n\nimport {\n    CompanyList,\n    CompanyShow,\n    CompanyCreate,\n    CompanyEdit,\n} from "./pages/companies";\nimport {\n    Title,\n    Header,\n    Sider,\n    Footer,\n    Layout,\n    OffLayoutArea,\n} from "components";\nimport { JobList, JobCreate, JobEdit } from "pages/jobs";\n\nfunction App() {\n    const API_URL = "http://localhost:3000";\n    const dataProvider = nestjsxCrudDataProvider(API_URL);\n\n    return (\n        <Refine\n            dataProvider={dataProvider}\n            Title={Title}\n            Header={Header}\n            Sider={Sider}\n            Footer={Footer}\n            Layout={Layout}\n            OffLayoutArea={OffLayoutArea}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "companies",\n                    list: CompanyList,\n                    create: CompanyCreate,\n                    edit: CompanyEdit,\n                    show: CompanyShow,\n                },\n                {\n                    name: "jobs",\n                    list: JobList,\n                    create: JobCreate,\n                    edit: JobEdit,\n                    show: CompanyShow,\n                },\n            ]}\n        />\n')),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2021-10-4-admin-panel-with-nestjs/refine_job.png",alt:"refine_job"}),(0,a.yg)("br",null))}g.isMDXComponent=!0}}]);