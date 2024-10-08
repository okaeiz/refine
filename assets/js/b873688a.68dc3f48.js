"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66612],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var o=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||r;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(37953);var o=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",slug:"navigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-29-router-navigate-component/social-3.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/navigate-react-router-redirect",source:"@site/blog/2024-06-14-router-navigate-component.md",title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",date:"2024-06-14T00:00:00.000Z",formattedDate:"June 14, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:9.735,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",slug:"navigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-29-router-navigate-component/social-3.png",hide_table_of_contents:!1},prevItem:{title:"Framer Motion React Animations",permalink:"/blog/framer-motion"},nextItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},relatedPosts:[{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.04,date:"2021-11-12T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",description:"We'll discover the Material UI AutoComplete component with examples",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"July 3, 2024",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:18.83,date:"2024-07-03T00:00:00.000Z"},{title:"Creating Polished Content with React Markdown",description:"We will explore the process of integrating the markdown editor into a Refine application",permalink:"/blog/react-markdown",formattedDate:"August 16, 2024",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:16.745,date:"2024-08-16T00:00:00.000Z"}],authorPosts:[{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a Refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"August 9, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:14.655,date:"2024-08-09T00:00:00.000Z"},{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",permalink:"/blog/react-hook-form-vs-formik",formattedDate:"July 23, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.68,date:"2024-07-23T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"May 14, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.02,date:"2024-05-14T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started with React router",id:"getting-started-with-react-router",level:2},{value:"Installing React router",id:"installing-react-router",level:3},{value:"Setting up React router",id:"setting-up-react-router",level:3},{value:"Setting up routes",id:"setting-up-routes",level:3},{value:"How to use the <code>Navigate</code> component",id:"how-to-use-the-navigate-component",level:2},{value:"Features of React Router V6",id:"features-of-react-router-v6",level:2},{value:"Lazy Loading Routes",id:"lazy-loading-routes",level:3},{value:"Code Splitting",id:"code-splitting",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Memoization with React Router",id:"memoization-with-react-router",level:3},{value:"Optimizing Route Matching",id:"optimizing-route-matching",level:3},{value:"React Router Testing",id:"react-router-testing",level:2},{value:"Routes Unit Testing",id:"routes-unit-testing",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c},g="wrapper";function d(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(g,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"This article was last updated on Jun 14, 2024, to add performance optimization, testing and additional features for React Router")),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"React Router version 6 shipped recently with several new features and improvements. One such feature is the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component. It is the component equivalent of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,o.yg)("p",null,"This article will take a deep dive into the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component."),(0,o.yg)("p",null,"Steps we'll cover:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#getting-started-with-react-router"},"Getting started with React router")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#how-to-use-the-navigate-component"},"How to use the ",(0,o.yg)("inlineCode",{parentName:"a"},"Navigate")," component")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#features-of-react-router-v6"},"Features of React Router V6")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#performance-optimization"},"Performance Optimization")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#react-router-testing"},"React Router Testing"))),(0,o.yg)("h2",{id:"getting-started-with-react-router"},"Getting started with React router"),(0,o.yg)("p",null,"In this section, you will learn how to set up React router in an existing React project."),(0,o.yg)("h3",{id:"installing-react-router"},"Installing React router"),(0,o.yg)("p",null,"Depending on your package manager, install React router from the NPM package registry using one of the commands below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\n npm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,o.yg)("h3",{id:"setting-up-react-router"},"Setting up React router"),(0,o.yg)("p",null,"Before using React router in the browser environment, import one of the top-level Components and wrap your root Component in it. We will use ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," since we want to run React router in the browser. It is the recommended way for running React router in the browser."),(0,o.yg)("p",null,"If you are using React router version 6, wrap your root component in ",(0,o.yg)("inlineCode",{parentName:"p"},"BrowserRouter")," as in the example below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>,\n);\n')),(0,o.yg)("h3",{id:"setting-up-routes"},"Setting up routes"),(0,o.yg)("p",null,"In React router version 6, you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Route")," Components to set up the routes in your application. You can import and use them like so:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components";\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,o.yg)("h2",{id:"how-to-use-the-navigate-component"},"How to use the ",(0,o.yg)("inlineCode",{parentName:"h2"},"Navigate")," component"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component is one of the several built-in components in React router version 6. It is a wrapper for the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook, and the current location changes when you render it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Navigate } from "react-router-dom";\n')),(0,o.yg)("p",null,"Import ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," from ",(0,o.yg)("inlineCode",{parentName:"p"},"react-router-dom")," to start using it. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component takes up to three ",(0,o.yg)("inlineCode",{parentName:"p"},"props"),", only one of which is required. The other two are optional."),(0,o.yg)("p",null,"Below are the explanations for these three ",(0,o.yg)("inlineCode",{parentName:"p"},"props"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'<Navigate to="/dashboard" state={{ todos: [] }} replace={true} />\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"to")," - A required prop. Its value should be the path which you want to navigate."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"replace")," - An optional boolean prop. Setting its value to ",(0,o.yg)("inlineCode",{parentName:"li"},"true")," will replace the current entry in the history stack."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"state")," - An optional prop. You can use it to pass data from the component that renders ",(0,o.yg)("inlineCode",{parentName:"li"},"Navigate"),".")),(0,o.yg)("p",null,"The code below illustrates how you can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component for navigation. We are rendering it conditionally after a state update and using the ",(0,o.yg)("inlineCode",{parentName:"p"},"state")," prop to pass a route state."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const App = () => {\n  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });\n  const [user, setUser] = useState(null);\n\n  const changeHandler = (e) => {\n    const { name, value } = e.target;\n    setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));\n  };\n\n  const submitHandler = async (e) => {\n    e.preventDefault();\n    const user = await loginUser(loginDetails);\n    setUser(user);\n  };\n\n  return (\n    <div>\n      <form onSubmit={submitHandler}>\n        <label>\n          Email:\n          <input\n            type="email"\n            name="email"\n            value={loginDetails.email}\n            onChange={changeHandler}\n            required\n          />\n        </label>\n        <label>\n          Password:\n          <input\n            type="password"\n            name="password"\n            value={loginDetails.password}\n            onChange={changeHandler}\n            required\n          />\n        </label>\n        <button type="submit"> Login </button>\n      </form>\n      {user && <Navigate to="/dashboard" state={user} replace={true} />}\n    </div>\n  );\n};\n')),(0,o.yg)("p",null,"After navigation, the component rendered by the matching route can access the state prop passed to ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," using the ",(0,o.yg)("inlineCode",{parentName:"p"},"useLocation")," hook like so:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},"const location = useLocation();\nconsole.log(location.state);\n// The default value of location.state is null if you don't pass any data.\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"props")," you pass to the ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component are the same as the arguments required by the function returned by the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,o.yg)("h2",{id:"features-of-react-router-v6"},"Features of React Router V6"),(0,o.yg)("h3",{id:"lazy-loading-routes"},"Lazy Loading Routes"),(0,o.yg)("p",null,"Loading routes is necessary for better app performance; that way, you do not have to load all the components simultaneously, but, based on user navigation, you load them\u2014hence decreasing the initial load time and making your app so much faster."),(0,o.yg)("p",null,"This is how lazy loading can be done in React Router v6:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React, { Suspense, lazy } from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\n// Lazy load components\nconst Home = lazy(() => import("./components/Home"));\nconst Blog = lazy(() => import("./components/Blog"));\n\nfunction App() {\n  return (\n    <Router>\n      <Suspense fallback={<div>Loading...</div>}>\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/blog" element={<Blog />} />\n        </Routes>\n      </Suspense>\n    </Router>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("p",null,"In this case, the ",(0,o.yg)("inlineCode",{parentName:"p"},"Home")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Blog")," components are lazy-loaded only when the user navigates to their respective routes. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Suspense")," component works more like a placeholder or fallback UI, such as a loading spinner, until the components are loaded."),(0,o.yg)("h3",{id:"code-splitting"},"Code Splitting"),(0,o.yg)("p",null,"Code splitting is an approach in which the code for an app is split into little bundles. Instead of everything being one huge file, many small files load just in time. This dramatically optimizes performance and reduces code that has to be downloaded upfront when your app is first opened."),(0,o.yg)("p",null,"Here is how you might do this with React Router V6, for example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React, { Suspense, lazy } from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\n// Lazy load components\nconst Home = lazy(() => import("./components/Home"));\nconst Blog = lazy(() => import("./components/Blog"));\nconst Contact = lazy(() => import("./components/Contact"));\n\nfunction App() {\n  return (\n    <Router>\n      <Suspense fallback={<div>Loading...</div>}>\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/blog" element={<Blog />} />\n          <Route path="/contact" element={<Contact />} />\n        </Routes>\n      </Suspense>\n    </Router>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("p",null,"In this example, ",(0,o.yg)("inlineCode",{parentName:"p"},"Home"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"Blog"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"Contact")," components are split into separate bundles and are loaded only when the user navigates to their respective routes. This ensures that the initial load time is minimized, and only the required code is loaded when needed."),(0,o.yg)("p",null,"By using lazy loading and code splitting, you can significantly enhance the performance and user experience of your React application."),(0,o.yg)("h2",{id:"performance-optimization"},"Performance Optimization"),(0,o.yg)("h3",{id:"memoization-with-react-router"},"Memoization with React Router"),(0,o.yg)("p",null,"Memoization is a performance optimization technique that is used to cache the results of function calls that are usually expensive. In React, you can use React.memo for memoizing components to avoid unnecessary re-renders."),(0,o.yg)("p",null,"Here's an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\nconst Home = React.memo(() => {\n  console.log("Home component rendered");\n  return <h1>Home Page</h1>;\n});\n\nconst Blog = React.memo(() => {\n  console.log("Blog component rendered");\n  return <h1>Blog Page</h1>;\n});\n\nfunction App() {\n  return (\n    <Router>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </Router>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("p",null,"In this example, the Home and Blog components will be memoized; they only change their status if the props get changed, which will further optimize the performance since it does not allow any type of unnecessary re-renders."),(0,o.yg)("h3",{id:"optimizing-route-matching"},"Optimizing Route Matching"),(0,o.yg)("p",null,"Route matching optimization makes many time savings to be found and displayed by the suitable component corresponding to the route. The Routes component in React Router strives to match only one route, thus helping in optimizing performance."),(0,o.yg)("p",null,"Here's an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\nconst Home = React.memo(() => <h1>Home Page</h1>);\nconst Blog = React.memo(() => <h1>Blog Page</h1>);\nconst About = React.memo(() => <h1>About Page</h1>);\n\nfunction App() {\n  return (\n    <Router>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </Router>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("p",null,"In that sample above, what a Routes component does ensure is to match and render only one route at once, efficiently, not more than one."),(0,o.yg)("p",null,"You may enhance performance even more with dynamic imports and lazy loading for significant components or extensive routes that are rarely active."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React, { Suspense, lazy } from "react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\n\nconst Home = React.memo(() => <h1>Home Page</h1>);\nconst Blog = React.memo(() => <h1>Blog Page</h1>);\nconst About = lazy(() => import("./About"));\n\nfunction App() {\n  return (\n    <Router>\n      <Suspense fallback={<div>Loading...</div>}>\n        <Routes>\n          <Route path="/" element={<Home />} />\n          <Route path="/blog" element={<Blog />} />\n          <Route path="/about" element={<About />} />\n        </Routes>\n      </Suspense>\n    </Router>\n  );\n}\n\nexport default App;\n')),(0,o.yg)("p",null,"In this use case, the ",(0,o.yg)("inlineCode",{parentName:"p"},"<About>")," component is loaded lazily; it will be loaded only when the user navigates to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/about")," route. It has a significant meaning when related to the significance of reducing initial load time and, hence, improving performance. Optimize and drastically improve your application's performance using React Router memoization with optimized route matching."),(0,o.yg)("h2",{id:"react-router-testing"},"React Router Testing"),(0,o.yg)("h3",{id:"routes-unit-testing"},"Routes Unit Testing"),(0,o.yg)("p",null,"Unit testing for routes: You can test all route components to ensure each component renders its route. For instance, you are using the React Testing Library with Jest."),(0,o.yg)("p",null,"The code example is shown below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { render } from "@testing-library/react";\nimport { BrowserRouter as Router, Routes, Route } from "react-router-dom";\nimport "@testing-library/jest-dom/extend-expect";\n\nconst Home = () => <h1>Home Page</h1>;\nconst Blog = () => <h1>Blog Page</h1>;\n\ntest("should render Home component for / route", () => {\n  const { getByText } = render(\n    <Router>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </Router>,\n  );\n  expect(getByText("Home Page")).toBeInTheDocument();\n});\n\ntest("renders Blog component for /blog route", () => {\n  window.history.pushState({}, "Blog Page", "/blog");\n  const { getByText } = render(\n    <Router>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </Router>,\n  );\n  expect(getByText("Blog Page")).toBeInTheDocument();\n});\n')),(0,o.yg)("p",null,"For this, we use ",(0,o.yg)("inlineCode",{parentName:"p"},"render")," from the React Testing Library to render the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," component and make assertions about the following:"),(0,o.yg)("p",null,"Integration Testing Navigation\nImplementation testing means that you can go all the way through your app's flow from the very beginning to the final state, including navigating between these states. This essentially means that your application behaves as such under normal conditions when the user is using it."),(0,o.yg)("p",null,"Navigation is tested in this way through integration testing:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { render, fireEvent } from "@testing-library/react";\nimport { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";\nimport "@testing-library/jest-dom/extend-expect";\n\nconst Home = () => (\n  <div>\n    <h1>Home Page</h1>\n    <Link to="/blog">Go to Blog</Link>\n  </div>\n);\nconst Blog = () => (\n  <div>\n    <h1>Blog Page</h1>\n    <Link to="/">Go to Home</Link>\n  </div>\n);\n\ntest("Goes from Home to Blog and back", async () => {\n  const { getByText } = render(\n    <Router>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </Router>,\n  );\n\n  // Verify the basic route\n  expect(getByText("Home Page")).toBeInTheDocument();\n\n  // Head to blog\n  fireEvent.click(getByText("Go to Blog"));\n  expect(getByText("Blog Page")).toBeInTheDocument();\n\n  // Home Page\n  fireEvent.click(getByText("Go to Home"));\n  expect(getByText("Home Page")).toBeInTheDocument();\n});\n')),(0,o.yg)("p",null,"In the following example, we will use ",(0,o.yg)("inlineCode",{parentName:"p"},"fireEvent")," to make user interactions: click links and assert that proper components are being rendered after each navigation. Both unit and integration testing can give you surety that your React Router application works and the same when other users interact with it."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," component is one of the built-in components that shipped with React router version 6. It is a React component equivalent of the ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," hook. It uses ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," internally. The props you pass to ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," are the same as the arguments you pass to the function returned by ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate"),"."),(0,o.yg)("p",null,"Unlike functional components in React, ES6 classes do not support hooks. Therefore, ",(0,o.yg)("inlineCode",{parentName:"p"},"Navigate")," is a handy equivalent of ",(0,o.yg)("inlineCode",{parentName:"p"},"useNavigate")," when working with class-based React components."))}d.isMDXComponent=!0}}]);