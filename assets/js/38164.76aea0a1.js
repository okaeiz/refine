"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38164],{28368:(e,t,n)=>{n.d(t,{p:()=>D});var r,l=n(67294),o=n(32984),a=n(12351),i=n(23784),u=n(19946),s=n(61363),c=n(64103),d=n(16567),f=n(14157),p=n(15466),m=n(73781);let v=null!=(r=l.startTransition)?r:function(e){e()};var h,g=((h=g||{})[h.Open=0]="Open",h[h.Closed=1]="Closed",h),E=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(E||{});let b={0:e=>({...e,disclosureState:(0,o.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},y=(0,l.createContext)(null);function S(e){let t=(0,l.useContext)(y);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return t}y.displayName="DisclosureContext";let w=(0,l.createContext)(null);function T(e){let t=(0,l.useContext)(w);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}w.displayName="DisclosureAPIContext";let P=(0,l.createContext)(null);function C(e,t){return(0,o.E)(t.type,b,e,t)}P.displayName="DisclosurePanelContext";let O=l.Fragment;let k=a.AN.RenderStrategy|a.AN.Static;let R=(0,a.yV)((function(e,t){let{defaultOpen:n=!1,...r}=e,u=(0,l.useRef)(null),s=(0,i.T)(t,(0,i.h)((e=>{u.current=e}),void 0===e.as||e.as===l.Fragment)),c=(0,l.useRef)(null),f=(0,l.useRef)(null),v=(0,l.useReducer)(C,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:g},E]=v,b=(0,m.z)((e=>{E({type:1});let t=(0,p.r)(u);if(!t||!g)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==n||n.focus()})),S=(0,l.useMemo)((()=>({close:b})),[b]),T=(0,l.useMemo)((()=>({open:0===h,close:b})),[h,b]),P={ref:s};return l.createElement(y.Provider,{value:v},l.createElement(w.Provider,{value:S},l.createElement(d.up,{value:(0,o.E)(h,{0:d.ZM.Open,1:d.ZM.Closed})},(0,a.sY)({ourProps:P,theirProps:r,slot:T,defaultTag:O,name:"Disclosure"}))))})),F=(0,a.yV)((function(e,t){let n=(0,u.M)(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[d,p]=S("Disclosure.Button"),v=(0,l.useContext)(P),h=null!==v&&v===d.panelId,g=(0,l.useRef)(null),E=(0,i.T)(g,t,h?null:d.buttonRef);(0,l.useEffect)((()=>{if(!h)return p({type:2,buttonId:r}),()=>{p({type:2,buttonId:null})}}),[r,p,h]);let b=(0,m.z)((e=>{var t;if(h){if(1===d.disclosureState)return;switch(e.key){case s.R.Space:case s.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:0}),null==(t=d.buttonRef.current)||t.focus()}}else switch(e.key){case s.R.Space:case s.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:0})}})),y=(0,m.z)((e=>{if(e.key===s.R.Space)e.preventDefault()})),w=(0,m.z)((t=>{var n;(0,c.P)(t.currentTarget)||e.disabled||(h?(p({type:0}),null==(n=d.buttonRef.current)||n.focus()):p({type:0}))})),T=(0,l.useMemo)((()=>({open:0===d.disclosureState})),[d]),C=(0,f.f)(e,g),O=h?{ref:E,type:C,onKeyDown:b,onClick:w}:{ref:E,id:r,type:C,"aria-expanded":e.disabled?void 0:0===d.disclosureState,"aria-controls":d.linkedPanel?d.panelId:void 0,onKeyDown:b,onKeyUp:y,onClick:w};return(0,a.sY)({ourProps:O,theirProps:o,slot:T,defaultTag:"button",name:"Disclosure.Button"})})),I=(0,a.yV)((function(e,t){let n=(0,u.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[s,c]=S("Disclosure.Panel"),{close:f}=T("Disclosure.Panel"),p=(0,i.T)(t,s.panelRef,(e=>{v((()=>c({type:e?4:5})))}));(0,l.useEffect)((()=>(c({type:3,panelId:r}),()=>{c({type:3,panelId:null})})),[r,c]);let m=(0,d.oJ)(),h=null!==m?(m&d.ZM.Open)===d.ZM.Open:0===s.disclosureState,g=(0,l.useMemo)((()=>({open:0===s.disclosureState,close:f})),[s,f]),E={ref:p,id:r};return l.createElement(P.Provider,{value:s.panelId},(0,a.sY)({ourProps:E,theirProps:o,slot:g,defaultTag:"div",features:k,visible:h,name:"Disclosure.Panel"}))})),D=Object.assign(R,{Button:F,Panel:I})},61363:(e,t,n)=>{n.d(t,{R:()=>l});var r,l=((r=l||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},44080:(e,t,n)=>{n.d(t,{u:()=>L});var r=n(67294),l=n(12351),o=n(16567),a=n(32984),i=n(14879),u=n(16723),s=n(3855),c=n(82180),d=n(23784);var f=n(9362);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,n,r){let l=n?"enter":"leave",o=(0,f.k)(),i=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===l&&(e.removeAttribute("hidden"),e.style.display="");let u=(0,a.E)(l,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,a.E)(l,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,a.E)(l,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return m(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),p(e,...u,...c),o.nextFrame((()=>{m(e,...c),p(e,...s),function(e,t){let n=(0,f.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[o,a]=[r,l].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),i=o+a;if(0!==i){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),i),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(m(e,...u),p(e,...t.entered),i())))})),o.dispose}var h=n(94192);var g=n(73781),E=n(44067);function b(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let y=(0,r.createContext)(null);y.displayName="TransitionContext";var S,w=((S=w||{}).Visible="visible",S.Hidden="hidden",S);let T=(0,r.createContext)(null);function P(e){return"children"in e?P(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function C(e,t){let n=(0,s.E)(e),o=(0,r.useRef)([]),u=(0,i.t)(),c=(0,h.G)(),d=(0,g.z)(((e,t=l.l4.Hidden)=>{let r=o.current.findIndex((({el:t})=>t===e));-1!==r&&((0,a.E)(t,{[l.l4.Unmount](){o.current.splice(r,1)},[l.l4.Hidden](){o.current[r].state="hidden"}}),c.microTask((()=>{var e;!P(o)&&u.current&&(null==(e=n.current)||e.call(n))})))})),f=(0,g.z)((e=>{let t=o.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):o.current.push({el:e,state:"visible"}),()=>d(e,l.l4.Unmount)})),p=(0,r.useRef)([]),m=(0,r.useRef)(Promise.resolve()),v=(0,r.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)(((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{p.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(v.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?m.current=m.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),b=(0,g.z)(((e,t,n)=>{Promise.all(v.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=p.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:o,register:f,unregister:d,onStart:E,onStop:b,wait:m,chains:v})),[f,d,o,E,b,v,m])}function O(){}T.displayName="NestingContext";let k=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function R(e){var t;let n={};for(let r of k)n[r]=null!=(t=e[r])?t:O;return n}let F=l.AN.RenderStrategy;let I=(0,l.yV)((function(e,t){let{show:n,appear:a=!1,unmount:i,...s}=e,f=(0,r.useRef)(null),p=(0,d.T)(f,t);(0,c.H)();let m=(0,o.oJ)();if(void 0===n&&null!==m&&(n=(m&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,r.useState)(n?"visible":"hidden"),E=C((()=>{h("hidden")})),[b,S]=(0,r.useState)(!0),w=(0,r.useRef)([n]);(0,u.e)((()=>{!1!==b&&w.current[w.current.length-1]!==n&&(w.current.push(n),S(!1))}),[w,n]);let O=(0,r.useMemo)((()=>({show:n,appear:a,initial:b})),[n,a,b]);(0,r.useEffect)((()=>{if(n)h("visible");else if(P(E)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,E]);let k={unmount:i},R=(0,g.z)((()=>{var t;b&&S(!1),null==(t=e.beforeEnter)||t.call(e)})),I=(0,g.z)((()=>{var t;b&&S(!1),null==(t=e.beforeLeave)||t.call(e)}));return r.createElement(T.Provider,{value:E},r.createElement(y.Provider,{value:O},(0,l.sY)({ourProps:{...k,as:r.Fragment,children:r.createElement(D,{ref:p,...k,...s,beforeEnter:R,beforeLeave:I})},theirProps:{},defaultTag:r.Fragment,features:F,visible:"visible"===v,name:"Transition"})))})),D=(0,l.yV)((function(e,t){let{beforeEnter:n,afterEnter:p,beforeLeave:m,afterLeave:S,enter:w,enterFrom:O,enterTo:k,entered:I,leave:D,leaveFrom:A,leaveTo:L,...M}=e,N=(0,r.useRef)(null),x=(0,d.T)(N,t),j=M.unmount?l.l4.Unmount:l.l4.Hidden,{show:H,appear:z,initial:B}=function(){let e=(0,r.useContext)(y);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[Z,U]=(0,r.useState)(H?"visible":"hidden"),V=function(){let e=(0,r.useContext)(T);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:$,unregister:Y}=V,q=(0,r.useRef)(null);(0,r.useEffect)((()=>$(N)),[$,N]),(0,r.useEffect)((()=>{if(j===l.l4.Hidden&&N.current)return H&&"visible"!==Z?void U("visible"):(0,a.E)(Z,{hidden:()=>Y(N),visible:()=>$(N)})}),[Z,N,$,Y,H,j]);let J=(0,s.E)({enter:b(w),enterFrom:b(O),enterTo:b(k),entered:b(I),leave:b(D),leaveFrom:b(A),leaveTo:b(L)}),G=function(e){let t=(0,r.useRef)(R(e));return(0,r.useEffect)((()=>{t.current=R(e)}),[e]),t}({beforeEnter:n,afterEnter:p,beforeLeave:m,afterLeave:S}),K=(0,c.H)();(0,r.useEffect)((()=>{if(K&&"visible"===Z&&null===N.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[N,Z,K]);let W=B&&!z,Q=!K||W||q.current===H?"idle":H?"enter":"leave",X=function(e=0){let[t,n]=(0,r.useState)(e),l=(0,i.t)(),o=(0,r.useCallback)((e=>{l.current&&n((t=>t|e))}),[t,l]),a=(0,r.useCallback)((e=>Boolean(t&e)),[t]),u=(0,r.useCallback)((e=>{l.current&&n((t=>t&~e))}),[n,l]),s=(0,r.useCallback)((e=>{l.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:o,hasFlag:a,removeFlag:u,toggleFlag:s}}(0),_=(0,g.z)((e=>(0,a.E)(e,{enter:()=>{X.addFlag(o.ZM.Opening),G.current.beforeEnter()},leave:()=>{X.addFlag(o.ZM.Closing),G.current.beforeLeave()},idle:()=>{}}))),ee=(0,g.z)((e=>(0,a.E)(e,{enter:()=>{X.removeFlag(o.ZM.Opening),G.current.afterEnter()},leave:()=>{X.removeFlag(o.ZM.Closing),G.current.afterLeave()},idle:()=>{}}))),te=C((()=>{U("hidden"),Y(N)}),V);(function({container:e,direction:t,classes:n,onStart:r,onStop:l}){let o=(0,i.t)(),a=(0,h.G)(),c=(0,s.E)(t);(0,u.e)((()=>{let t=(0,f.k)();a.add(t.dispose);let i=e.current;if(i&&"idle"!==c.current&&o.current)return t.dispose(),r.current(c.current),t.add(v(i,n.current,"enter"===c.current,(()=>{t.dispose(),l.current(c.current)}))),t.dispose}),[t])})({container:N,classes:J,direction:Q,onStart:(0,s.E)((e=>{te.onStart(N,e,_)})),onStop:(0,s.E)((e=>{te.onStop(N,e,ee),"leave"===e&&!P(te)&&(U("hidden"),Y(N))}))}),(0,r.useEffect)((()=>{W&&(j===l.l4.Hidden?q.current=null:q.current=H)}),[H,W,Z]);let ne=M,re={ref:x};return z&&H&&B&&(ne={...ne,className:(0,E.A)(M.className,...J.current.enter,...J.current.enterFrom)}),r.createElement(T.Provider,{value:te},r.createElement(o.up,{value:(0,a.E)(Z,{visible:o.ZM.Open,hidden:o.ZM.Closed})|X.flags},(0,l.sY)({ourProps:re,theirProps:ne,defaultTag:"div",features:F,visible:"visible"===Z,name:"Transition.Child"})))})),A=(0,l.yV)((function(e,t){let n=null!==(0,r.useContext)(y),l=null!==(0,o.oJ)();return r.createElement(r.Fragment,null,!n&&l?r.createElement(I,{ref:t,...e}):r.createElement(D,{ref:t,...e}))})),L=Object.assign(I,{Child:A,Root:I})},94192:(e,t,n)=>{n.d(t,{G:()=>o});var r=n(67294),l=n(9362);function o(){let[e]=(0,r.useState)(l.k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},73781:(e,t,n)=>{n.d(t,{z:()=>o});var r=n(67294),l=n(3855);let o=function(e){let t=(0,l.E)(e);return r.useCallback(((...e)=>t.current(...e)),[t])}},19946:(e,t,n)=>{n.d(t,{M:()=>u});var r,l=n(67294),o=n(16723),a=n(82180),i=n(77896);let u=null!=(r=l.useId)?r:function(){let e=(0,a.H)(),[t,n]=l.useState(e?()=>i.O.nextId():null);return(0,o.e)((()=>{null===t&&n(i.O.nextId())}),[t]),null!=t?""+t:void 0}},14879:(e,t,n)=>{n.d(t,{t:()=>o});var r=n(67294),l=n(16723);function o(){let e=(0,r.useRef)(!1);return(0,l.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},16723:(e,t,n)=>{n.d(t,{e:()=>o});var r=n(67294),l=n(77896);let o=(e,t)=>{l.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:(e,t,n)=>{n.d(t,{E:()=>o});var r=n(67294),l=n(16723);function o(e){let t=(0,r.useRef)(e);return(0,l.e)((()=>{t.current=e}),[e]),t}},14157:(e,t,n)=>{n.d(t,{f:()=>a});var r=n(67294),l=n(16723);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function a(e,t){let[n,a]=(0,r.useState)((()=>o(e)));return(0,l.e)((()=>{a(o(e))}),[e.type,e.as]),(0,l.e)((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[n,t]),n}},82180:(e,t,n)=>{n.d(t,{H:()=>o});var r=n(67294),l=n(77896);function o(){let[e,t]=(0,r.useState)(l.O.isHandoffComplete);return e&&!1===l.O.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>l.O.handoff()),[]),e}},23784:(e,t,n)=>{n.d(t,{T:()=>i,h:()=>a});var r=n(67294),l=n(73781);let o=Symbol();function a(e,t=!0){return Object.assign(e,{[o]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,l.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[o])))?void 0:n}},16567:(e,t,n)=>{n.d(t,{ZM:()=>a,oJ:()=>i,up:()=>u});var r=n(67294);let l=(0,r.createContext)(null);l.displayName="OpenClosedContext";var o,a=((o=a||{})[o.Open=1]="Open",o[o.Closed=2]="Closed",o[o.Closing=4]="Closing",o[o.Opening=8]="Opening",o);function i(){return(0,r.useContext)(l)}function u({value:e,children:t}){return r.createElement(l.Provider,{value:e},t)}},64103:(e,t,n)=>{function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:()=>r})},44067:(e,t,n)=>{function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:()=>r})},9362:(e,t,n)=>{n.d(t,{k:()=>l});var r=n(81021);function l(){let e=[],t={addEventListener:(e,n,r,l)=>(e.addEventListener(n,r,l),t.add((()=>e.removeEventListener(n,r,l)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return(0,r.Y)((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=l();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},77896:(e,t,n)=>{n.d(t,{O:()=>o});var r=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let o=new class{constructor(){l(this,"current",this.detect()),l(this,"handoffState","pending"),l(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32984:(e,t,n)=>{function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}n.d(t,{E:()=>r})},81021:(e,t,n)=>{function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:()=>r})},15466:(e,t,n)=>{n.d(t,{r:()=>l});var r=n(77896);function l(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:(e,t,n)=>{n.d(t,{AN:()=>u,l4:()=>s,sY:()=>c,yV:()=>p});var r,l,o=n(67294),a=n(44067),i=n(32984),u=((l=u||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),s=((r=s||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:o=!0,name:a}){let u=f(t,e);if(o)return d(u,n,r,a);let s=null!=l?l:0;if(2&s){let{static:e=!1,...t}=u;if(e)return d(t,n,r,a)}if(1&s){let{unmount:e=!0,...t}=u;return(0,i.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,a)})}return d(u,n,r,a)}function d(e,t={},n,r){let{as:l=n,children:i,refName:u="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof i?i(t):i;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(l===o.Fragment&&Object.keys(m(s)).length>0){if(!(0,o.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,a.A)(null==e?void 0:e.className(...t),s.className):(0,a.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,o.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),n))}return(0,o.createElement)(l,Object.assign({},v(s,["ref"]),l!==o.Fragment&&c,l!==o.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let l=n[r];for(let n of l){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function p(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}}}]);