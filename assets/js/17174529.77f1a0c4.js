"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54737],{58860:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var n=a(37953);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},59263:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(37953);var n=a(58860);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",slug:"what-is-vite-vs-webpack",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/what-is-vite-vs-webpack",source:"@site/blog/2023-05-15-vite-js.md",title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",date:"2023-05-15T00:00:00.000Z",formattedDate:"May 15, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.01,hasTruncateMarker:!1,authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],frontMatter:{title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",slug:"what-is-vite-vs-webpack",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/social.png",hide_table_of_contents:!1},prevItem:{title:"How Next.js Redirects Work",permalink:"/blog/next-js-redirect"},nextItem:{title:"git diff - Comparing Changes in Git",permalink:"/blog/git-diff-command"},relatedPosts:[{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",permalink:"/blog/docker-copy",formattedDate:"December 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.1,date:"2022-12-28T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.36,date:"2024-01-26T00:00:00.000Z"},{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",permalink:"/blog/javascript-try-catch-finally",formattedDate:"January 30, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.415,date:"2024-01-30T00:00:00.000Z"}],authorPosts:[{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"May 29, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:12.045,date:"2023-05-29T00:00:00.000Z"},{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.335,date:"2023-06-04T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Vite.js?",id:"what-is-vitejs",level:2},{value:"How does Vite.js Address Performance Challenges?",id:"how-does-vitejs-address-performance-challenges",level:3},{value:"Key Features of Vite",id:"key-features-of-vite",level:2},{value:"Vite vs Webpack",id:"vite-vs-webpack",level:2},{value:"Migrating from Webpack to Vite",id:"migrating-from-webpack-to-vite",level:2},{value:"Using Vite.js in practice",id:"using-vitejs-in-practice",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d},g="wrapper";function m(e){var{components:t}=e,a=r(e,["components"]);return(0,n.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"We'll talk about the history of vite and the importance of using Vite, we'll also deep dive into developer experience with Vite and why you want to start using Vite."),(0,n.yg)("p",null,"In this section, we'll be talking about ES modules and the evolution of bundling Javascript code.\nIn the ever-evolving landscape of web development, speed and efficiency are crucial factors that can make or break a project. As developers, we constantly seek tools that can streamline our workflow and deliver optimal performance."),(0,n.yg)("p",null,"The problem of bundling has been as old as developers finding a way to organize their code in a modular fashion. ES modules which became a solution to the problem, allowed developers to have a better developer experience by allowing code to be grouped by modules and allowing module variables to be accessible to other modules if need be."),(0,n.yg)("p",null,"Using ",(0,n.yg)("a",{parentName:"p",href:"https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"},"ES module specifications")," or webpack, which allowed ESM for unsupported browsers, soon began to pose a problem. As developers build large-scale applications, there are thousands of modules these large applications depend on, making the building process extremely slow and a pain for developers."),(0,n.yg)("p",null,"It is this very problem that has brought about the creation of ",(0,n.yg)("strong",{parentName:"p"},"Vite!.")," ",(0,n.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite.js")," was created by ",(0,n.yg)("a",{parentName:"p",href:"https://evanyou.me/"},"Evan You")," the creator of ",(0,n.yg)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js"),", a very popular Javascript framework. Vite was created as a way to both simplify and speed up the frontend development build cycle."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-vitejs"},"What is Vite.js?"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#how-does-vitejs-address-performance-challenges"},"How does Vite.js Address Performance Challenges?")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#key-features-of-vite"},"Key Features of Vite")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#vite-vs-webpack"},"Vite vs Webpack")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#migrating-from-webpack-to-vite"},"Migrating from Webpack to Vite")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#using-vitejs-in-practice"},"Using Vite.js in practice"))),(0,n.yg)("h2",{id:"what-is-vitejs"},"What is Vite.js?"),(0,n.yg)("p",null,"Javascript build tools can be a pain to developers, especially when all you want to do is focus on development. Developers want a simplified way of building and developing their applications and ",(0,n.yg)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite.js")," is one of the popular tools that solves this problem. We'll be talking about Vite.js and its key features in this tutorial."),(0,n.yg)("p",null,"We'll talk about how Vite was built fundamentally and how it addresses performance challenges in web development. Fundamentally, at the core, Vite.js does two main things, and does it really well:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Serve code locally during development"),(0,n.yg)("li",{parentName:"ol"},"Bundle all your frontend assets (HTML, CSS, JS etc.) for production.")),(0,n.yg)("p",null,"Vite leverages native ES modules in the browser. This will help to load your code instantly, no matter how large your module dependencies are or how large the application code has become. Vite also uses Hot Module Replacement (HMR). HMR accounts for the fast and effective part of Vite, as it watches for state changes in the application and adds and/or removes modules while the application is running without prompting a full reload of the application. What this means for the developers is you can see the changes you make to your code instantly right in your browser as you're coding. Cool right?!."),(0,n.yg)("h3",{id:"how-does-vitejs-address-performance-challenges"},"How does Vite.js Address Performance Challenges?"),(0,n.yg)("p",null,"In this section, let's take a look at how Vite addresses some of the performance challenges in front-end web development."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Native ES Modules Support:")," Vite.js fully embraces native ES modules. Native ES modules are supported in modern browsers. Instead of bundling modules during development, Vite.js leverages the native capabilities of browsers to directly load ES modules as separate files. This adoption eliminates the need for bundling and enables faster startup times and better cacheability. It also ensures that the browser results in improved overall performance."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Blazing-Fast Build Process"),': Vite.js leverages the "esbuild" bundler, known for its exceptional speed. During the production build process, Vite.js uses "esbuild" to generate optimized and minified code bundles. The "esbuild" rapid bundling capabilities significantly reduces build times compared to traditional bundlers. This leads to improved and faster deployment and developer productivity.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Code Splitting and Lazy Loading"),": Vite.js supports code splitting and lazy loading out of the box. By breaking down the codebase into smaller chunks, Vite.js enables more efficient loading and execution of JavaScript. Only the necessary modules are loaded when required, reducing initial load times and improving performance. Lazy loading allows developers to load specific parts of an application on-demand, further optimizing the loading process and improving the user experience.")),(0,n.yg)("h2",{id:"key-features-of-vite"},"Key Features of Vite"),(0,n.yg)("p",null,"In this section, we'll be talking about the key features Vite has to offer and why you should get started using it. Vite.js, being a modern front-end development build tool, offers several key features that differentiate it from traditional bundlers. Here are some of the features:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Lightning-Fast Development Server"),": Vite.js introduces a highly optimized development server that leverages native ES module imports in modern browsers. It employs an on-demand compilation approach, allowing for near-instantaneous hot module replacement (HMR) and rapid page reloads. This significantly speeds up the development workflow, providing faster feedback loops and enhancing developer productivity."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Native ES Modules Support"),": Vite.js fully embraces native ES modules, which are natively supported in modern browsers. During development, Vite.js leverages the browser's ability to load ES modules as separate files without the need for bundling. This approach eliminates the overhead of bundling during development, resulting in faster startup times and better cacheability. It also allows the browser to parallelize module loading, leading to improved overall performance."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Blazing-Fast Production Builds"),': Vite.js utilizes the "esbuild" bundler, known for its exceptional speed, during the production build process. "esbuild" generates optimized and minified code bundles, resulting in significantly reduced build times compared to traditional bundlers. This swift bundling process enhances developer efficiency and allows for faster deployment cycles.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Zero Configuration"),": Vite.js follows a zero-configuration philosophy, providing a seamless out-of-the-box experience. By minimizing the need for manual configuration, developers can quickly set up new projects without spending time on complex configuration setups. However, Vite.js also offers a flexible configuration file (vite.config.js) for advanced customization when needed."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Devtool Integration"),": Vite.js seamlessly integrates with popular browser developer tools. It provides an enhanced debugging experience by mapping original source code to the browser, enabling developers to directly debug their code without any additional setup or tooling."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Plugin Ecosystem"),": Vite.js has a growing ecosystem of plugins that extend its functionality and integrate with popular frontend frameworks like Vue.js, React, and Preact. These plugins enhance the development experience and offer additional features, optimizations, and integrations with tools and libraries.")),(0,n.yg)("h2",{id:"vite-vs-webpack"},"Vite vs Webpack"),(0,n.yg)("p",null,"In this section, we'll be doing a comparison between Vite and Webpack. There are similar bundling tools like ",(0,n.yg)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," for example ",(0,n.yg)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup")," and ",(0,n.yg)("a",{parentName:"p",href:"https://parceljs.org/"},"Parcel"),". The major difference between these tools is Vite uses a native ES module dev server, while webpack uses a bundle based dev server. Below is a picture of how modules are bundled with native ESM:"),(0,n.yg)("br",null),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/comparing-vite.png",alt:"vite vs webpack"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"With this setup, unnecessary bundling during development is avoided and build time is greatly reduced and significantly faster"),(0,n.yg)("p",null,"Here is an image of a typical webpack dev server:"),(0,n.yg)("br",null),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/comparing-vite-2.png",alt:"vite vs webpack"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"Vite.js follows a simplified and opinionated configuration approach. The configuration file is minimal, making it easier to set up and get started quickly.\nVite.js has a growing ecosystem of plugins that integrate seamlessly with popular frontend frameworks such as Vue.js, React, and Preact, while webpack is known for its extensive configuration options, allowing developers to fine-tune every aspect of the bundling process. Its vast ecosystem provides a wide range of plugins and loaders, making it highly versatile and adaptable to different project requirements."),(0,n.yg)("p",null,"Here is an image of a time benchmark test between webpack and Vite:"),(0,n.yg)("br",null),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/benchmark.png",alt:"vite vs webpack"})),(0,n.yg)("br",null),(0,n.yg)("p",null,"From the image we can see how fast Vite is in comparison to webpack."),(0,n.yg)("h2",{id:"migrating-from-webpack-to-vite"},"Migrating from Webpack to Vite"),(0,n.yg)("p",null,"In this section we'll look at how we can migrate our application using webpack to Vite. Here are some steps and things to note:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"First install Vite and all its plugins. You can check the getting started guide ",(0,n.yg)("a",{parentName:"li",href:"https://vitejs.dev/guide/"},"here")),(0,n.yg)("li",{parentName:"ul"},"Make sure your project is using ES modules. You can do that by going to your ",(0,n.yg)("inlineCode",{parentName:"li"},"package.json")," file and pasting")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'"type": "module",\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Remove all webpack configuration files, like ",(0,n.yg)("inlineCode",{parentName:"li"},"webpack.config.js"),", and replace it with a ",(0,n.yg)("inlineCode",{parentName:"li"},"vite.config.js")," file. Also in your scripts, you'll need to update with this:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'"build": "vite build",\n"dev": "vite serve",\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Make sure to remove webpack loaders and plugins that are no longer in use and test your application, so everything is working as it should")),(0,n.yg)("h2",{id:"using-vitejs-in-practice"},"Using Vite.js in practice"),(0,n.yg)("p",null,"In this section, we will talk about how we can get started using Vite in practice and also demonstrate with some example code."),(0,n.yg)("p",null,"To scaffold a react project with vite, paste:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"# npm 6.x\nnpm create vite@latest my-react-app --template react\n\n# npm 7+, extra double-dash is needed:\nnpm create vite@latest my-react-app -- --template react\n")),(0,n.yg)("p",null,"You can now change into the project directory, run ",(0,n.yg)("inlineCode",{parentName:"p"},"npm install")," and start our development server."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"cd react-vite\nnpm install\nnpm run dev\n")),(0,n.yg)("p",null,"In the scripts file we have our commands for building for production and creating a local preview."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n  "scripts": {\n   "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`\n   "build": "vite build", // build for production\n   "preview": "vite preview"// locally preview production build\n  }\n}\n')),(0,n.yg)("br",null),(0,n.yg)("div",null,(0,n.yg)("a",{href:"https://discord.gg/refine"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"Finally, we have come to the end of the tutorial, and we have been able to learn how Vite.js revolutionizes frontend development with its lightning-fast development server, native ES modules support, and blazing-fast production builds. You can check it out for yourself. Happy coding!."))}m.isMDXComponent=!0}}]);