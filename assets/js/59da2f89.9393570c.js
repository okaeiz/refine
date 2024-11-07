"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60557],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},g),{},{components:n})):o.createElement(m,r({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",slug:"usenavigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-19-router-use-navigate/social-2.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/usenavigate-react-router-redirect",source:"@site/blog/2024-06-24-router-use-navigate.md",title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",date:"2024-06-24T00:00:00.000Z",formattedDate:"June 24, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.78,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",slug:"usenavigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-19-router-use-navigate/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},nextItem:{title:"NextAuth - Google And GitHub Authentications for Nextjs",permalink:"/blog/nextauth-google-github-authentication-nextjs"},relatedPosts:[{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.235,date:"2022-09-01T00:00:00.000Z"},{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with Refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.095,date:"2023-02-23T00:00:00.000Z"},{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"August 20, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:15.12,date:"2024-08-20T00:00:00.000Z"}],authorPosts:[{title:"How to Build a Web App in 10 steps in 2024",description:"In this article, we will explore some steps you can follow when building a web app.",permalink:"/blog/how-to-build-a-web-app",formattedDate:"December 26, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2023-12-26T00:00:00.000Z"},{title:"Building React admin panel with NextUI and Refine",description:"We will see how  to build a React admin panel using Refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.96,date:"2023-09-20T00:00:00.000Z"},{title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",permalink:"/blog/jwt-authentication",formattedDate:"March 11, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.77,date:"2024-03-11T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to set up React Router V6",id:"how-to-set-up-react-router-v6",level:2},{value:"Install React router",id:"install-react-router",level:3},{value:"Configure React router",id:"configure-react-router",level:3},{value:"Configure routes",id:"configure-routes",level:3},{value:"How to use the <code>useNavigate</code> hook",id:"how-to-use-the-usenavigate-hook",level:2},{value:"Path with optional second argument",id:"path-with-optional-second-argument",level:3},{value:"Modifying the history stack",id:"modifying-the-history-stack",level:3},{value:"When to Use the <code>useNavigate</code> Hook",id:"when-to-use-the-usenavigate-hook",level:2},{value:"Programmatic Navigation After Actions",id:"programmatic-navigation-after-actions",level:4},{value:"Conditional Navigation",id:"conditional-navigation",level:4},{value:"Manage Navigation in Event Handlers",id:"manage-navigation-in-event-handlers",level:4},{value:"Post-Authentication Redirection",id:"post-authentication-redirection",level:4},{value:"Navigating with State",id:"navigating-with-state",level:4},{value:"Moving Back or Forward",id:"moving-back-or-forward",level:4},{value:"Some common examples of how to use the <code>useNavigate</code> hook with real projects.",id:"some-common-examples-of-how-to-use-the-usenavigate-hook-with-real-projects",level:2},{value:"Example: Navigation with Conditional Display Depending on the Role of the User",id:"example-navigation-with-conditional-display-depending-on-the-role-of-the-user",level:3},{value:"Example: Redirection After Login",id:"example-redirection-after-login",level:3},{value:"Example: Error Page",id:"example-error-page",level:3},{value:"Example: Building a Custom Hook",id:"example-building-a-custom-hook",level:3},{value:"Example: Custom Hook with Parameters",id:"example-custom-hook-with-parameters",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},h="wrapper";function m(e){var{components:t}=e,n=r(e,["components"]);return(0,o.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"This article was last updated on Jun 24, 2024, to add new examples and use cases for React Router useNavigate hook")),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"React Router is a popular routing library for React. The latest version, React router version 6, shipped with several new features and improved compatibility with the latest version of React. Since hooks have become the preferred way of writing React code, React Router version 6 also heavily uses React hooks."),(0,o.yg)("p",null,"One such hook is the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook. The ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook lets you navigate programmatically within your React code. In this article, you will learn the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook and how to use it. We will also hint at when you might choose the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook over the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component."),(0,o.yg)("p",null,"Steps we'll cover:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-set-up-react-router-v6"},"How to set up React Router V6")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-use-the-usenavigate-hook"},"How to use the useNavigate hook"))),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("p",null,"To run the examples in this article, be sure to have some or all of the following."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The Node runtime environment. Install Node for your operating system from the ",(0,o.yg)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node downloads page"),"."),(0,o.yg)("li",{parentName:"ul"},"A working React project. Quickly create a React project using ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/pankod/superplate"},"superplate"),".")),(0,o.yg)("h2",{id:"how-to-set-up-react-router-v6"},"How to set up React Router V6"),(0,o.yg)("p",null,"If you have set up a React project, follow the steps below to start using React router. We will use React router version 6 throughout this article. This article assumes you are running React in the browser."),(0,o.yg)("h3",{id:"install-react-router"},"Install React router"),(0,o.yg)("p",null,"Install React router from the NPM package registry before using it. You can install it like so:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\n npm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,o.yg)("h3",{id:"configure-react-router"},"Configure React router"),(0,o.yg)("p",null,"Configure your app to start using React Router by importing the router and wrapping your root component in it. Since our goal is to run React router in the browser, we will use the top-level Component ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowserRouter"),". It is the recommended interface for running React router in the browser. Several other routers, like ",(0,o.yg)("inlineCode",{parentName:"p"},"NativeRouter")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"StaticRouter"),", have their use cases. Check the React router documentation to learn more about the other routers and their use cases."),(0,o.yg)("p",null,"According to the ",(0,o.yg)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"documentation"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," uses the HTML 5 history API internally to keep your application's UI in sync with the URL. The code below shows how to wrap the root component in ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," when working with React version 18."),(0,o.yg)("p",null,"You can copy and paste the code below into the ",(0,o.yg)("inlineCode",{parentName:"p"},"index.js")," file."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>,\n);\n')),(0,o.yg)("h3",{id:"configure-routes"},"Configure routes"),(0,o.yg)("p",null,"After installing and connecting your application like in the previous steps, configure the routes to start using React router. Since we are using React router version 6, we will import the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Route")," components.",(0,o.yg)("br",{parentName:"p"}),"\n","After that, you can set up the routes like in the example below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,o.yg)("p",null,"That is just about everything you need to do to start using React router version 6."),(0,o.yg)("h2",{id:"how-to-use-the-usenavigate-hook"},"How to use the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useNavigate")," hook"),(0,o.yg)("p",null,"As mentioned above, the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook became part of React router in version 6. It is useful when navigating programmatically in your React project. The ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook returns an imperative method that you can use for changing location."),(0,o.yg)("p",null,"You can use the function returned by the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook in two ways."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Pass the path you want to navigate as the first argument and an optional object as the second argument."),(0,o.yg)("li",{parentName:"ul"},"Pass the delta in the history stack to which you want to navigate as the only argument.")),(0,o.yg)("h3",{id:"path-with-optional-second-argument"},"Path with optional second argument"),(0,o.yg)("p",null,"If you choose to pass the path you want to navigate and the second optional argument, then you can do it like so:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst navigate = useNavigate();\n\nconst submitHandler = async (event) => {\n  event.preventDefault();\n\n  try {\n    await submitForm();\n    navigate("/success"); // Omit optional second argument\n  } catch (error) {\n    navigate("/error", { state: { message: "Failed to submit form" } }); // Pass optional second argument\n  }\n};\n')),(0,o.yg)("p",null,"In the example above, we navigate inside an event handler after submitting a form. Where we navigate depends on whether the form submission was successful or not."),(0,o.yg)("p",null,"The optional second argument looks like the object below. You can pass data as the value of the ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," property. If you set the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"true"),", React router will replace the current entry in the history stack instead of adding a new one. Both ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," fields are optional."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n  state: { message: "Failed to submit form" },\n  replace: false,\n}\n')),(0,o.yg)("p",null,"After navigation, the data you passed using ",(0,o.yg)("inlineCode",{parentName:"p"},"navigate")," is accessible inside the matching route's rendered component using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLocation")," hook."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const location = useLocation();\nconsole.log(location.state);\n// { message: 'Failed to submit form' }\n")),(0,o.yg)("h3",{id:"modifying-the-history-stack"},"Modifying the history stack"),(0,o.yg)("p",null,"If you choose to modify the history stack, you need to pass the delta in the history stack to which you want to go. For example, ",(0,o.yg)("inlineCode",{parentName:"p"},"navigate(-1)")," is equivalent to clicking the browser's back button."),(0,o.yg)("p",null,"Be aware that ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," is a hook. Therefore you cannot directly use it with ES6 classes. Use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component instead. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component uses ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," internally, and the two are functionally similar."),(0,o.yg)("p",null,"Similarly, while using the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook, you should remember the rules of React hooks. Do not invoke React hooks inside loops, conditions, or nested functions. Invoke them at the top level."),(0,o.yg)("h2",{id:"when-to-use-the-usenavigate-hook"},"When to Use the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useNavigate")," Hook"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook inside React Router V6 is, indeed, quite empowering for programmatic navigation. You will most probably feel like reaching out for it in the following common scenarios:"),(0,o.yg)("h4",{id:"programmatic-navigation-after-actions"},"Programmatic Navigation After Actions"),(0,o.yg)("p",null,"Use ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," to redirect users once they have acted, for example, a form submission, logging in, or completing a task."),(0,o.yg)("h4",{id:"conditional-navigation"},"Conditional Navigation"),(0,o.yg)("p",null,"Navigate users based on certain conditions, such as their roles or authentication status. This ensures users are directed to the appropriate sections of the application."),(0,o.yg)("h4",{id:"manage-navigation-in-event-handlers"},"Manage Navigation in Event Handlers"),(0,o.yg)("p",null,"This allows for the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," in event handlers to navigate a user based on their interactions, like a button click or another interaction."),(0,o.yg)("h4",{id:"post-authentication-redirection"},"Post-Authentication Redirection"),(0,o.yg)("p",null,"With an authentication flow, ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," should be able to redirect the user either after logging in or after logging out so that he is navigated directly to the appropriate section in the application."),(0,o.yg)("h4",{id:"navigating-with-state"},"Navigating with State"),(0,o.yg)("p",null,"Send extra information or context to the target component while navigating with state and the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,o.yg)("h4",{id:"moving-back-or-forward"},"Moving Back or Forward"),(0,o.yg)("p",null,"Programmatically navigate back and forth in the browser history; in other words, to make the programmatic equivalent of clicking back and forth in a browser. In other words, make use of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," whenever you must do navigation control from inside your React component programmatically, especially when an event should trigger it based on conditions. It makes the navigation logic in your component very dynamic and sensitive to states within the application."),(0,o.yg)("h2",{id:"some-common-examples-of-how-to-use-the-usenavigate-hook-with-real-projects"},"Some common examples of how to use the ",(0,o.yg)("inlineCode",{parentName:"h2"},"useNavigate")," hook with real projects."),(0,o.yg)("h3",{id:"example-navigation-with-conditional-display-depending-on-the-role-of-the-user"},"Example: Navigation with Conditional Display Depending on the Role of the User"),(0,o.yg)("p",null,"You can use ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," for navigating users based on their roles. For example, take them to an admin dashboard or a simple user dashboard."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst Dashboard = () => {\n  const navigate = useNavigate();\n  const user = getUser(); // Assume this function gets the user info\n\n  if (!user) {\n    navigate("/login");\n  } else if (user.role === "admin") {\n    navigate("/admin");\n  } else {\n    navigate("/user");\n  }\n\n  return (\n    <div>\n      <h1>Welcome to the Dashboard</h1>\n    </div>\n  );\n};\n')),(0,o.yg)("h3",{id:"example-redirection-after-login"},"Example: Redirection After Login"),(0,o.yg)("p",null,"You can redirect the user after successfully logging in to their dashboard by using ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate"),", or in the case of an error in the login process, throw that error to show some excellent and readable error messages."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst Login = () => {\n  const navigate = useNavigate();\n\n  const handleLogin = async () => {\n    const isAuthenticated = await authenticateUser(); // Assume this function authenticates the user\n\n    if (isAuthenticated) {\n      navigate("/dashboard");\n    } else {\n      navigate("/login", { state: { error: "Invalid credentials" } });\n    }\n  };\n\n  return <button onClick={handleLogin}>Login</button>;\n};\n')),(0,o.yg)("h3",{id:"example-error-page"},"Example: Error Page"),(0,o.yg)("p",null,"You can use ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," to send the user to an error page upon an error occurring and display a custom error message."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst SubmitForm = () => {\n  const navigate = useNavigate();\n\n  const handleSubmit = async (event) => {\n    event.preventDefault();\n\n    try {\n      await submitForm(); // Assume this function submits the form\n      navigate("/success");\n    } catch (error) {\n      navigate("/error", { state: { message: error.message } });\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n')),(0,o.yg)("p",null,"Some examples in the list indicate how the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook can be applied in varying cases to make an app more dynamic and responsive to user actions."),(0,o.yg)("p",null,"With a custom hook for navigation, you will be able to reuse the navigation logic across your app. This means you are writing an immaculate and maintainable code. Here's how you create and use custom hooks:."),(0,o.yg)("h3",{id:"example-building-a-custom-hook"},"Example: Building a Custom Hook"),(0,o.yg)("p",null,"Let's build a custom hook called ",(0,o.yg)("inlineCode",{parentName:"p"},"useAuthNavigate"),", that will share navigation functions for several authentication-related routes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst useAuthNavigate = () => {\n  const navigate = useNavigate();\n\n  const goToLogin = () => navigate("/login");\n  const goToLogout = () => navigate("/logout");\n  const goToDashboard = () => navigate("/dashboard");\n\n  return { goToLogin, goToLogout, goToDashboard };\n};\n\n// Usage in a component\nconst AuthButtons = () => {\n  const { goToLogin, goToLogout, goToDashboard } = useAuthNavigate();\n\n  return (\n    <div>\n      <button onClick={goToLogin}>Go to Login</button>\n      <button onClick={goToLogout}>Logout</button>\n      <button onClick={goToDashboard}>Go to Dashboard</button>\n    </div>\n  );\n};\n\nexport default AuthButtons;\n')),(0,o.yg)("p",null,"For example, ",(0,o.yg)("inlineCode",{parentName:"p"},"useAuthNavigate")," would wrap around the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook and provide three methods: ",(0,o.yg)("inlineCode",{parentName:"p"},"goToLogin"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"goToLogout"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"goToDashboard"),". We can use these methods in any component to go to the respective routes."),(0,o.yg)("h3",{id:"example-custom-hook-with-parameters"},"Example: Custom Hook with Parameters"),(0,o.yg)("p",null,"You may also make hooks accepting parameters to navigate to dynamic routes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const useUserNavigate = () => {\n  const navigate = useNavigate();\n\n  const goToUserProfile = (userId) => navigate(`/users/${userId}`);\n  const goToUserSettings = (userId) => navigate(`/users/${userId}/settings`);\n\n  return { goToUserProfile, goToUserSettings };\n};\n\n// Usage in a component\nconst UserActions = () => {\n  const { goToUserProfile, goToUserSettings } = useUserNavigate();\n  const userId = 123; // Assume this comes from props or context\n\n  return (\n    <div>\n      <button onClick={() => goToUserProfile(userId)}>View Profile</button>\n      <button onClick={() => goToUserSettings(userId)}>View Settings</button>\n    </div>\n  );\n};\n\nexport default UserActions;\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useUserNavigate")," in this example provides functions that accept ",(0,o.yg)("inlineCode",{parentName:"p"},"userId")," as an argument for going to the user's profile or settings page. Custom hooks for navigating can encapsulate navigation logic, making it easier to manage and reuse in other parts of your React application. Thus, components will stay clean and focus on their primary responsibilities with this approach."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook shipped with React Router version 6. It comes in handy if you want an imperative API for navigation and returns a function you can invoke in two ways. When invoking the function returned, you either pass the path you want to navigate to as the first argument and an optional object as the second argument or the delta you want to navigate in the history stack."),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"useNavigate"))," hook is functionally similar to the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component. Since you can't directly use hooks with ES6 classes, the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component comes in handy when working with class-based components."))}m.isMDXComponent=!0}}]);