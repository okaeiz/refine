"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51354],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(u,".").concat(d)]||p[d]||g[d]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",slug:"javascript-variadic-currying",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-28-js-currying-functions/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-28-js-currying-functions/featured.png",hide_table_of_contents:!1},u=void 0,s={permalink:"/blog/javascript-variadic-currying",source:"@site/blog/2022-08-28-js-currying-functions.md",title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",date:"2022-08-28T00:00:00.000Z",formattedDate:"August 28, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:8.93,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Javascript Currying - Variadic Currying",description:"Deep dive into variadic currying in JavaScript with examples",slug:"javascript-variadic-currying",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-28-js-currying-functions/social.png",featured_image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-28-js-currying-functions/featured.png",hide_table_of_contents:!1},prevItem:{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid"},nextItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},relatedPosts:[{title:"How to Install and Use NVM?",description:"Guide to using NVM with Mac and Windows",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.415,date:"2022-11-09T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.02,date:"2022-11-03T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.515,date:"2021-12-27T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"February 2, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.92,date:"2024-02-02T00:00:00.000Z"},{title:"React useMemo Hook Guide with Examples",description:"Improve React app performance with the useMemo() hook.",permalink:"/blog/react-usememo",formattedDate:"January 17, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.885,date:"2024-01-17T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.925,date:"2022-10-10T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Variadic Partial Application",id:"variadic-partial-application",level:3},{value:"Using <code>Function.prototype</code> Methods",id:"using-functionprototype-methods",level:3},{value:"Variadic Currying with Termination",id:"variadic-currying-with-termination",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],g={toc:p},d="wrapper";function m(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(d,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In this post, we first look at the confusion around currying in JavaScript, especially with respect to polyadic partial application. We find out that we're not really doing currying in the real sense that it is implemented in Haskell, rather in a much limited capacity."),(0,a.yg)("p",null,"In the later part, we delve into variadic currying in a stricter sense with an example that returns unary accumulators."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#variadic-partial-application"},"Variadic Partial Application")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-functionprototype-methods"},"Using ",(0,a.yg)("inlineCode",{parentName:"a"},"Function.prototype")," Methods")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#variadic-currying-with-termination"},"Variadic Currying with Termination"))),(0,a.yg)("p",null,"This post is about variadic currying in JavaScript. It is the fifth part of the series titled ",(0,a.yg)("a",{parentName:"p",href:"https://dev.to/anewman15/curry-functions-in-javascript-4jpa"},"Curry Functions in JavaScript"),"."),(0,a.yg)("h3",{id:"variadic-partial-application"},"Variadic Partial Application"),(0,a.yg)("p",null,"In the previous article titled ",(0,a.yg)("a",{parentName:"p",href:"https://dev.to/anewman15/auto-currying-in-javascript-17il"},"Auto-currying in JavaScript"),", we focused on the ",(0,a.yg)("strong",{parentName:"p"},"unarity")," of curried functions, because that's what a curried function ought to be."),(0,a.yg)("p",null,"We defined two versions of the ",(0,a.yg)("inlineCode",{parentName:"p"},"curry()")," function. The first one maintains unarity of the accumulator function at every level of the recursive stack."),(0,a.yg)("p",null,"In the second definition of ",(0,a.yg)("inlineCode",{parentName:"p"},"curry()")," though, with the spread ",(0,a.yg)("inlineCode",{parentName:"p"},"...args")," arguments, we are introducing polyadic partial application to the first call of the curried function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(a) {\n      return curried(...args, a);\n    }\n  };\n}\n")),(0,a.yg)("p",null,"This is a good starting point to deviate from actual currying. So, now we can take an arbitrary number of arguments for our first call to the curried function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'function createMessage(greeting, name, message) {\n  return `${greeting}, ${name}! ${message}`;\n}\n\nconst curriedCreateMessage = curry(createMessage);\n\n// First accumulator is a variadic function\nconsole.log(curriedCreateMessage("Hi")("Haskell")("Whadup?")); // Hi, Haskell! Whadup?\nconsole.log(curriedCreateMessage("Hi", "Haskell", "Whadup?")); // Hi, Haskell! Whadup?\nconsole.log(\n  curriedCreateMessage(\n    "Hi",\n    "Haskell",\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\n\n// Subsequent accumulators are unary\nconsole.log(\n  curriedCreateMessage("Hi")(\n    "Haskell",\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// [Function: accumulator]\nconsole.log(\n  curriedCreateMessage("Hi")("Haskell")(\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\n')),(0,a.yg)("p",null,"Notice, we have opened only the first accumulator to accept any number of arguments. Subsequent calls maintain unarity of the accumulator with ",(0,a.yg)("inlineCode",{parentName:"p"},"accumulator(a)")," accepting only one argument."),(0,a.yg)("p",null,"We can deviate more and allow the accumulator to be polyadic with ",(0,a.yg)("inlineCode",{parentName:"p"},"...a"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(...a) {\n      return curried(...args, ...a);\n    }\n  };\n}\n")),(0,a.yg)("p",null,"Doing so allows ",(0,a.yg)("inlineCode",{parentName:"p"},"accumulator(...a)")," to be variadic at every level of the recursive stack. So, now we can take multiple arguments in the subsequent calls as well:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'console.log(\n  curriedCreateMessage("Hi")(\n    "Haskell",\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\nconsole.log(\n  curriedCreateMessage("Hi", "Haskell")(\n    "Whadup?",\n    "Say something",\n    `Let\'s talk.`,\n  ),\n);\n// Hi, Haskell! Whadup?\n')),(0,a.yg)("p",null,"Notice, the additional arguments are gracefully ignored by JavaScript."),(0,a.yg)("p",null,"So basically, what we've done is allow the accumulator to take multiple arguments per call. It ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"can be"))," unary, as well as polyadic. We've lost the essence of currying."),(0,a.yg)("p",null,"But now our ",(0,a.yg)("inlineCode",{parentName:"p"},"curry()")," function is much more powerful. We can pass any number of arguments to an accumulator, as long as that is returned. And it is common to implement this with native JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"Function.prototype")," methods."),(0,a.yg)("h3",{id:"using-functionprototype-methods"},"Using ",(0,a.yg)("inlineCode",{parentName:"h3"},"Function.prototype")," Methods"),(0,a.yg)("p",null,"We can re-write the ",(0,a.yg)("inlineCode",{parentName:"p"},"curry()")," function with ",(0,a.yg)("inlineCode",{parentName:"p"},"Function.prototype.apply"),", and with ",(0,a.yg)("inlineCode",{parentName:"p"},"Function.prototype.bind"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"// with Function.prototype.apply\nfunction curry(f) {\n  return function curried(...args) {\n    if (args.length >= f.length) return f(...args);\n    return accumulator;\n\n    function accumulator(...a) {\n      return curried.apply(this, [...args, ...a]);\n    }\n  };\n}\n\n// with Function.prototype.bind\nfunction curryBound(f) {\n  return function curried(...args) {\n    if (args.length < f.length) return curried.bind(null, ...args);\n    return f(...args);\n  };\n}\n")),(0,a.yg)("p",null,"Refactoring ",(0,a.yg)("inlineCode",{parentName:"p"},"curry()")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"Function.prototype.apply")," is not radically different in terms of the logic. We're just passing in the arguments ",(0,a.yg)("inlineCode",{parentName:"p"},"args")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"a")," as part of an array instead of a list."),(0,a.yg)("p",null,"However, with ",(0,a.yg)("inlineCode",{parentName:"p"},"Function.prototype.bind"),", we are returning a bound function that binds incoming arguments recursively to a copy of itself till we are able to receive all required arguments. So, inside ",(0,a.yg)("inlineCode",{parentName:"p"},"curryBound()"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"curried()")," function at a current execution context is a bound copy of the ",(0,a.yg)("inlineCode",{parentName:"p"},"curried()")," function called one level below it in the recursive stack with the arguments passed there."),(0,a.yg)("p",null,"To be semantically more accurate, we should rename ",(0,a.yg)("inlineCode",{parentName:"p"},"curryBound()")," to be ",(0,a.yg)("inlineCode",{parentName:"p"},"partialize()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"curried()")," to be ",(0,a.yg)("inlineCode",{parentName:"p"},"bound()"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function partialize(f) {\n  return function bound(...args) {\n    if (args.length < f.length) return bound.bind(null, ...args);\n    return f(...args);\n  };\n}\n")),(0,a.yg)("p",null,"This is because, ",(0,a.yg)("inlineCode",{parentName:"p"},"Function.prototype.bind")," applied here allows a variadic and more powerful partial application than unary currying. Really, this is nothing more than native JavaScript partial application with context binding and recursion."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The Stunner"),"\nOk, so what about invoking our original function, ",(0,a.yg)("inlineCode",{parentName:"p"},"f()"),", when we have all arguments available ?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"f(...args);\n")),(0,a.yg)("p",null,"We're just calling a polyadic function with all its required arguments. Is it currying ? To me, with ",(0,a.yg)("inlineCode",{parentName:"p"},"f(...args);")," we just embraced back what we wanted to avoid by accepting single arguments at a time. That is, we have not found a way around to call our original function, ",(0,a.yg)("inlineCode",{parentName:"p"},"f()"),", with single arguments sequentially."),(0,a.yg)("p",null,"In Haskell, currying does not involve calling the multary function with all arguments passed in collectively. In JavaScript, we are eventually calling it with all arguments together - and with the possibility of accepting additional ones. We're fooling around."),(0,a.yg)("p",null,"What we're actually doing is, generating a series of variadic accumulators returned in sequence - with good intentions, inspired by currying to begin with. This is probably what currying should idiomatically mean in the sphere of JavaScript."),(0,a.yg)("h2",{id:"variadic-currying-with-termination"},"Variadic Currying with Termination"),(0,a.yg)("p",null,"In a stricter sense, if we want to implement currying in JavaScript - at best - we can go as far as returning unary accumulators. Contrary to this, as we have seen above, variadic multary accumulators are also commonly returned."),(0,a.yg)("p",null,"However, we can go ahead and implement variadic currying by returning unary accumulators as well. This can be a case if our ",(0,a.yg)("inlineCode",{parentName:"p"},"f()")," is variadic itself. Below, we have modified our ",(0,a.yg)("inlineCode",{parentName:"p"},"createMessage()")," function to produce a message for a given arbitrary number of text strings."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'function createMessage(...texts) {\n  return texts.reduce(\n    (combinedText, currentText) => combinedText + currentText,\n    "",\n  );\n}\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Terminator"),"\nHere, we want to curry ",(0,a.yg)("inlineCode",{parentName:"p"},"createMessage()")," with unary accumulators. And we can keep receiving as many arguments we want, without stopping."),(0,a.yg)("p",null,"So, in order to produce a result from a curried variadic function, we have to decide on an arity for ",(0,a.yg)("inlineCode",{parentName:"p"},"f()")," at some point. After we fix an arity of our desire for ",(0,a.yg)("inlineCode",{parentName:"p"},"f()")," by passing in those arguments one at a time, we can terminate the accumulator."),(0,a.yg)("p",null,"The idea is to terminate the accumulator when we receive an empty (",(0,a.yg)("inlineCode",{parentName:"p"},"undefined"),") argument and invoke ",(0,a.yg)("inlineCode",{parentName:"p"},"f()")," with the available arguments. So, the empty parens, ",(0,a.yg)("inlineCode",{parentName:"p"},"()")," acts as the terminator in this case."),(0,a.yg)("p",null,"For a curried function, ",(0,a.yg)("inlineCode",{parentName:"p"},"vCurriedCreateMessage()"),", returned from ",(0,a.yg)("inlineCode",{parentName:"p"},"vCurry()")," by passing in ",(0,a.yg)("inlineCode",{parentName:"p"},"createMessage()"),", let's say we want to terminate the accumulator after 5 arguments. And we want to invoke ",(0,a.yg)("inlineCode",{parentName:"p"},"f()")," after that. It will look something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'const vCurriedCreateMessage = vCurry(createMessage);\nconst messageHaskell = vCurriedCreateMessage("Hi Haskell,")(\n  `I hope you\'re doing good!`,\n)(`We\'re discussing currying here. Do you wanna join in?`)("See you soon!")(\n  "Bye.",\n);\n\nmessageHaskell();\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The Plan"),"\nImplementing ",(0,a.yg)("inlineCode",{parentName:"p"},"vCurry()")," follows a slightly different logic, mostly due to the fact that we have to terminate the accumulator on demand with an empty argument, i.e. having a value of ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined"),". And since sometimes a variadic function can potentially take infinite number of arguments, it can lead to infinite currying. We'll talk about infinite currying in an upcoming article, but for such cases ",(0,a.yg)("inlineCode",{parentName:"p"},"f.length")," doesn't play an important role in the currying logic. Instead, length of the incoming arguments is the main point of focus."),(0,a.yg)("p",null,"If we have an incoming argument, we keep accumulating. When we receive none, we terminate and invoke ",(0,a.yg)("inlineCode",{parentName:"p"},"f()")," with accumulated arguments:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"function vCurry(f) {\n  function curried(args) {\n    return function accumulator(a) {\n      if (args.length === 0 || a) return curried([...args, a]);\n      return f(...args);\n    };\n  }\n\n  return curried([]);\n}\n")),(0,a.yg)("p",null,"So, now currying ",(0,a.yg)("inlineCode",{parentName:"p"},"createMessage()")," and invoking the curried function with 5 arguments and then invoking returned function with ",(0,a.yg)("inlineCode",{parentName:"p"},"()")," (empty argument) will produce the message string;"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"const vCurriedCreateMessage = vCurry(createMessage);\nconst messageHaskellShorter = vCurriedCreateMessage(\n  \"Hi Haskell,\\n\",\n  `You can't see this.`,\n)(`I hope you're doing good!\\n`)(\n  `We're discussing currying here. Do you wanna join in?`,\n  \"Bye\",\n);\nconst messageHaskell = vCurriedCreateMessage(\"Hi Haskell,\\n\")(\n  `I hope you're doing good!\\n`,\n)(`We're discussing currying here. Do you wanna join in?\\n`)(\"See you soon!\\n\")(\n  \"Bye.\",\n);\nconst messageHaskellLonger = messageHaskell(\"\\nAbdullah Numan\");\n\nconsole.log(messageHaskellShorter()); // Additional arguments ignored: `You can't see this.`\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\n*/\n\nconsole.log(messageHaskell()); // Additional arguments ignored:  'Bye'\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\nSee you soon!\nBye.\n*/\n\nconsole.log(messageHaskellLonger()); // Extended from messageHaskell()\n/*\nHi Haskell,\nI hope you're doing good!\nWe're discussing currying here. Do you wanna join in?\nSee you soon!\nBye.\nAbdullah Numan\n*/\n")),(0,a.yg)("p",null,"Notice the ",(0,a.yg)("inlineCode",{parentName:"p"},"messageHaskellLonger")," function. The curried function can be extended basing on that of a smaller arity to any arbitrary arity, before it gets terminated."),(0,a.yg)("p",null,"Notice also that since we focused on unary implementation of variadic currying, the accumulators ignore the second arguments passed."),(0,a.yg)("p",null,"Currying a variadic function is quite different from currying functions with fixed arity in terms of the logic, especially with respect to how termination is achieved by passing an empty argument. Without termination, it can take infinite number of arguments. In the next article, we'll see an example of infinitely curried function that does not require termination at all."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this post, we found out that deviating from unary currying in leads to variadic partial application in JavaScript, which turns out to be more powerful. We also saw how currying an existing variadic function follows a different logic than those with fixed arity with a unary implementation."),(0,a.yg)("br",null),(0,a.yg)("div",null,(0,a.yg)("a",{href:"https://discord.gg/refine"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,a.yg)("p",null,"Building CRUD applications involves many repetitive task consuming your precious development time. If you are starting from scratch, you also have to implement custom solutions for critical parts of your application like authentication, authorization, state management and networking."),(0,a.yg)("p",null,"Check out ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine"),", if you are interested in a headless framework with robust architecture and full of industry best practices for your next CRUD project."),(0,a.yg)("div",null,(0,a.yg)("a",{href:"https://github.com/refinedev/refine"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,a.yg)("br",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Refine")," is an open-source React-based framework for building CRUD applications ",(0,a.yg)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,a.yg)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,a.yg)("strong",{parentName:"p"},"styling"),", ",(0,a.yg)("strong",{parentName:"p"},"customization")," and ",(0,a.yg)("strong",{parentName:"p"},"project workflow.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Refine")," is headless by design and it connects ",(0,a.yg)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,a.yg)("p",null,"Visit ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine GitHub repository")," for more information, demos, tutorials, and example projects."))}m.isMDXComponent=!0}}]);