(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63059,75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...i,width:a,height:a,stroke:e,strokeWidth:s?24*Number(n)/Number(a):n,className:r("lucide",o),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),s=(e,i)=>{let s=(0,t.forwardRef)(({className:s,...o},l)=>(0,t.createElement)(n,{ref:l,iconNode:i,className:r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...o}));return s.displayName=a(e),s};e.s(["default",()=>s],75254);let o=s("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",()=>o],63059)},27927,e=>{"use strict";let t=(0,e.i(75254).default)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);e.s(["Cloud",()=>t],27927)},26707,e=>{"use strict";let t=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>t],26707)},30267,e=>{"use strict";let t=(0,e.i(75254).default)("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);e.s(["LineChart",()=>t],30267)},88143,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:i,objectFit:n}){let s=r?40*r:e,o=a?40*a:t,l=s&&o?`viewBox='0 0 ${s} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return s}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let a=e.r(43369),i=e.r(88143),n=e.r(87690),s=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:c=!1,loading:p,className:u,quality:h,width:f,height:g,fill:m=!1,style:w,overrideSrc:x,onLoad:b,onLoadingComplete:y,placeholder:v="empty",blurDataURL:j,fetchPriority:k,decoding:_="async",layout:C,objectFit:N,objectPosition:z,lazyBoundary:P,lazyRoot:S,...E},O){var R;let I,M,T,{imgConf:$,showAltText:D,blurComplete:A,defaultLoader:W}=O,q=$||n.imageConfigDefault;if("allSizes"in q)I=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t),r=q.qualities?.sort((e,t)=>e-t);I={...q,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===W)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=E.loader||W;delete E.loader,delete E.srcSet;let L="__next_img_default"in B;if(L){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...a}=t;return e(a)}}if(C){"fill"===C&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let F="",G=l(f),H=l(g);if((R=e)&&"object"==typeof R&&(o(R)||void 0!==R.src)){let t=o(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=t.blurWidth,T=t.blurHeight,j=j||t.blurDataURL,F=t.src,!m)if(G||H){if(G&&!H){let e=G/t.width;H=Math.round(t.height*e)}else if(!G&&H){let e=H/t.height;G=Math.round(t.width*e)}}else G=t.width,H=t.height}let U=!d&&!c&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,U=!1),I.unoptimized&&(r=!0),L&&!I.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let V=l(h),Y=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:z}:{},D?{}:{color:"transparent"},w),X=A||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:M,blurHeight:T,blurDataURL:j||"",objectFit:Y.objectFit})}")`:`url("${v}")`,J=s.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,Q=X?{backgroundSize:J,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:n,sizes:s,loader:o}){if(r){let e=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(a);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,s),c=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((r,a)=>`${o({config:e,src:t,quality:n,width:r})} ${"w"===d?r:a+1}${d}`).join(", "),src:o({config:e,src:t,quality:n,width:l[c]})}}({config:I,src:e,unoptimized:r,width:G,quality:V,sizes:t,loader:B}),K=U?"lazy":p;return{props:{...E,loading:K,fetchPriority:k,width:G,height:H,decoding:_,className:u,style:{...Y,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:r,preload:c||d,placeholder:v,fill:m}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let a=e.r(71645),i="u"<typeof window,n=i?()=>{}:a.useLayoutEffect,s=i?()=>{}:a.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),o()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},defaultHead:function(){return p}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),s=e.r(90809),o=e.r(43476),l=s._(e.r(71645)),d=n._(e.r(98879)),c=e.r(42732);function p(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,r,a,i;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let n=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!s)&&a.has(t)?n=!1:(a.add(t),i[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(55682)._(e.r(71645)),i=e.r(87690),n=a.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(70965),i=e.r(43369);function n({config:e,src:t,width:r,quality:n}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,a.findClosestQuality)(n,e),o=(0,i.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&o?`&dpl=${o}`:""}`}n.__next_img_default=!0;let s=n},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return y}});let a=e.r(55682),i=e.r(90809),n=e.r(43476),s=i._(e.r(71645)),o=a._(e.r(74080)),l=a._(e.r(25633)),d=e.r(8927),c=e.r(87690),p=e.r(18556);e.r(33525);let u=e.r(65856),h=a._(e.r(1948)),f=e.r(18581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,a,i,n,s){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function w(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,s.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:i,decoding:o,className:l,style:d,fetchPriority:c,placeholder:p,loading:u,unoptimized:h,fill:g,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:v,sizesInput:j,onLoad:k,onError:_,...C},N)=>{let z=(0,s.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&m(e,p,x,b,y,h,j))},[e,p,x,b,y,_,h,j]),P=(0,f.useMergedRef)(N,z);return(0,n.jsx)("img",{...C,...w(c),loading:u,width:i,height:a,decoding:o,"data-nimg":g?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:P,onLoad:e=>{m(e.currentTarget,p,x,b,y,h,j)},onError:e=>{v(!0),"empty"!==p&&y(!0),_&&_(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...w(t.fetchPriority)};return e&&o.default.preload?(o.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let y=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(u.RouterContext),a=(0,s.useContext)(p.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=g||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:o,onLoadingComplete:l}=e,f=(0,s.useRef)(o);(0,s.useEffect)(()=>{f.current=o},[o]);let m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let[w,y]=(0,s.useState)(!1),[v,j]=(0,s.useState)(!1),{props:k,meta:_}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:w,showAltText:v});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{...k,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:m,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.preload?(0,n.jsx)(b,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),s=e.r(8927),o=e.r(5500),l=n._(e.r(1948));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=o.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},64364,e=>{"use strict";var t=e.i(71645);function r(e,r){let[a,i]=(0,t.useState)(r??e[0]??"");return(0,t.useEffect)(()=>{if(!e.length)return;let t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>!!e);if(!t.length)return;let r=t[0].id;for(let e of t)if(e.getBoundingClientRect().top-120<=0)r=e.id;else break;i(e=>e===r?e:r)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),{activeSection:a,jumpTo:e=>{i(e),document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}}}e.s(["useWaterTrackerScrollSpy",()=>r])},43772,e=>{"use strict";var t=e.i(43476),r=e.i(57688),a=e.i(22016),i=e.i(30267);let n=(0,e.i(75254).default)("paintbrush-vertical",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]]);var s=e.i(27927),o=e.i(26707),l=e.i(63059),d=e.i(64364);let c=[{id:"daily-tracking",title:"Track Intake In Seconds",summary:"Quick-add logging keeps hydration tracking fast. Switch between ml and oz anytime and see progress update instantly.",bullets:["One-tap drink entry for daily consistency","Supports ml and oz without resetting your data","Clear progress view to stay on target"],image:{src:"/watertrackerimages/5.png",alt:"Water Tracker home dashboard with hydration progress",caption:"Home dashboard with quick logging and unit toggle"}},{id:"reminders",title:"Reminder Schedule That Fits Your Day",summary:"Set reminder times, lead-time nudges, and optional follow-up alerts to build a reliable hydration routine.",bullets:["Custom reminder time slots","Lead-time and follow-up reminder options","Sound and silent reminder modes"],image:{src:"/watertrackerimages/4.png",alt:"Hydration reminder schedule screen in Water Tracker",caption:"Hydration goal and reminders on your schedule"}},{id:"drink-management",title:"Your Drinks, Your Volumes",summary:"Create and manage drink types with custom volume, icon, and color so logging matches what you actually drink.",bullets:["Manage drink types list","Custom icon and color per drink","Volume controls for realistic tracking"],image:{src:"/watertrackerimages/7.png",alt:"Manage drink types list in Water Tracker",caption:"Manage and personalize your drink list"}},{id:"insights",title:"Trend Insights, Not Guesswork",summary:"Visual trends help you understand consistency and daily performance so you can improve hydration habits over time.",bullets:["Daily consumption vs goal visualization","History for habit review","Actionable progress patterns"],image:{src:"/watertrackerimages/9.png",alt:"Hydration trend chart screen in Water Tracker",caption:"Trend charts to measure consistency"}},{id:"privacy",title:"Privacy-First By Default",summary:"No mandatory account. Hydration logs stay on-device with optional local protection like PIN and biometric unlock.",bullets:["No login required for core tracking","Local-first data model","PIN and biometric protection options"],image:{src:"/watertrackerimages/1.png",alt:"Water Tracker privacy message screen",caption:"Built around local data privacy"}},{id:"backup-widgets",title:"Backup, Widgets, and Personalization",summary:"Backup and restore support, fluid widgets, and appearance themes make the app practical for long-term daily use.",bullets:["Backup and restore tools","Fluid intake widget support","Appearance themes and customization"],image:{src:"/watertrackerimages/2.png",alt:"Backup and restore screen in Water Tracker",caption:"Backup and restore support for safer continuity"}}];function p({iosUrl:e,androidUrl:p}){let{activeSection:u,jumpTo:h}=(0,d.useWaterTrackerScrollSpy)(c.map(e=>e.id),c[0].id);return(0,t.jsxs)("section",{children:[(0,t.jsx)("style",{children:`
        .wth-hero {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          border: none;
          background:
            linear-gradient(106deg, rgba(3, 18, 48, 0.12) 12%, rgba(4, 24, 66, 0.42) 40%, rgba(8, 39, 92, 0.74) 68%, rgba(10, 51, 114, 0.86) 100%),
            url("/watertrackerimages/home_page_img1.png");
          background-size: cover;
          background-position: center;
          min-height: calc(100vh - 68px);
          padding: clamp(22px, 4vw, 42px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-top: -26px;
          margin-bottom: 26px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .wth-hero-panel {
          width: min(530px, 100%);
          border: 1px solid rgba(228, 242, 255, 0.3);
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(6, 26, 66, 0.72) 0%, rgba(9, 45, 106, 0.84) 100%);
          box-shadow: 0 18px 42px rgba(6, 20, 48, 0.34);
          padding: clamp(18px, 3vw, 30px);
          color: #eff8ff;
          margin-left: clamp(12px, 5vw, 110px);
        }
        .wth-hero-title {
          margin: 0;
          font-size: clamp(1.7rem, 3.8vw, 3rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .wth-feature-ribbon {
          margin-top: 16px;
          display: block;
        }
        .wth-feature-badges {
          display: flex;
          gap: 8px;
          width: 100%;
          justify-content: space-between;
        }
        .wth-feature-badge-row {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 0;
          min-width: 0;
          min-height: clamp(100px, 10vw, 136px);
          padding: 8px 10px;
        }
        .wth-feature-badge-row::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/images/png-tree-award.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: clamp(120px, 100vw, 195px) auto;
          opacity: 0.95;
          filter: drop-shadow(0 5px 12px rgba(5, 19, 44, 0.42));
          pointer-events: none;
        }
        .wth-feature-badge {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          background: transparent;
          padding: 0;
          color: #e7f5ff;
          text-align: center;
          text-shadow: 0 2px 8px rgba(4, 22, 54, 0.74);
        }
        .wth-store-row {
          margin-top: 18px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .wth-store-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 calc((100% - 10px) / 2);
          min-width: 0;
          width: calc((100% - 10px) / 2);
          height: 64px;
          border-radius: 12px;
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .wth-store-link:hover {
          transform: translateY(-1px);
          filter: brightness(1.04);
        }
        .wth-store-button {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .wth-store-button-play {
          transform: scale(1.5);
          transform-origin: center;
        }
        .wth-cta-row {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wth-btn {
          text-decoration: none;
          min-height: 44px;
          border-radius: 12px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid transparent;
        }
        .wth-btn-primary {
          background: #b7e8ff;
          color: #0f326b;
          box-shadow: 0 8px 20px rgba(8, 17, 42, 0.32);
        }
        .wth-btn-secondary {
          background: transparent;
          color: #eaf7ff;
          border-color: rgba(234, 247, 255, 0.4);
        }
        .wth-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wth-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wth-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wth-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wth-nav-item {
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          padding: 9px 13px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          color: var(--wt-muted);
          background: transparent;
          transition: 0.2s ease;
        }
        .wth-nav-item:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wth-nav-item.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wth-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 16px;
        }
        .wth-card {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 8px 24px rgba(16, 36, 79, 0.05);
          scroll-margin-top: 95px;
        }
        .wth-card h2 {
          margin: 0;
          font-size: clamp(1.35rem, 2.6vw, 2rem);
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
        }
        .wth-card p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wth-feature-list {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wth-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          flex-shrink: 0;
        }
        .wth-shot {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 16px;
          padding: 10px;
          background: #fff;
        }
        .wth-shot figure {
          margin: 0;
        }
        .wth-shot img {
          border-radius: 12px;
          width: 100%;
          height: auto;
        }
        .wth-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wth-faq {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 14px;
          background: #f8fcff;
          padding: 14px;
        }
        .wth-faq h3 {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--wt-navy-900);
        }
        .wth-faq p {
          margin: 0;
          font-size: 14px;
        }
        .wth-bottom-cta {
          margin-top: 4px;
          background: linear-gradient(140deg, var(--wt-navy-900) 0%, var(--wt-navy-700) 100%);
          border-radius: 22px;
          padding: 30px;
          color: #fff;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
        }
        .wth-bottom-cta h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(1.3rem, 2.4vw, 1.9rem);
        }
        .wth-bottom-cta p {
          margin: 7px 0 0;
          color: #d6edff;
          max-width: 620px;
        }
        .wth-mobile-jumps {
          display: none;
        }
        @media (max-width: 860px) {
          .wth-hero {
            justify-content: center;
            min-height: calc(100vh - 56px);
          }
          .wth-hero-panel {
            width: min(96%, 520px);
            margin-left: -70px;
            background: transparent;
            border-color: transparent;
            box-shadow: none;
            margin-top: -30px;
          }
          .wth-feature-ribbon {
            margin-top: 14px;
            margin-left: -40px;
          }
          .wth-feature-badges {
            display: grid;
            gap: 10px;
            justify-items: start;
            width: auto;
          }
          .wth-feature-badge-row {
            width: clamp(220px, 58vw, 290px);
            min-height: clamp(132px, 34vw, 188px);
            justify-self: start;
            justify-content: center;
          }
          .wth-feature-badge-row::before {
            inset: 0;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: 100% auto;
          }
          .wth-feature-badge {
            font-size: 11px;
            width: 62%;
            margin: 0 auto;
            line-height: 1.28;
          }
          .wth-store-row {
            flex-direction: column;
            align-items: stretch;
          }
          .wth-store-link {
            justify-content: center;
            width: 210px;
            height: 62px;
            flex: 0 0 auto;
          }
          .wth-store-button-play {
            transform: scale(1.33);
            transform-origin: center;
          }
          .wth-layout { flex-direction: column; }
          .wth-sidebar { display: none; }
          .wth-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wth-mobile-jumps::-webkit-scrollbar { display: none; }
          .wth-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.15);
            background: rgba(255, 255, 255, 0.78);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wth-card { padding: 22px 16px; }
        }
        @media (max-width: 760px) {
          .wth-hero {
            margin-top: -22px;
          }
          .wth-store-link {
            width: 196px;
            height: 58px;
          }
        }
      `}),(0,t.jsx)("div",{className:"wth-hero",children:(0,t.jsxs)("div",{className:"wth-hero-panel",children:[(0,t.jsx)("h1",{className:"wt-font-display wth-hero-title",children:"Water Tracker N Reminder"}),(0,t.jsx)("div",{className:"wth-feature-ribbon","aria-label":"Water Tracker core features",children:(0,t.jsxs)("div",{className:"wth-feature-badges",children:[(0,t.jsx)("div",{className:"wth-feature-badge-row",children:(0,t.jsxs)("span",{className:"wth-feature-badge",children:[(0,t.jsx)("span",{children:"Offline"}),(0,t.jsx)("span",{children:"No Login"}),(0,t.jsx)("span",{children:"Private"})]})}),(0,t.jsx)("div",{className:"wth-feature-badge-row",children:(0,t.jsxs)("span",{className:"wth-feature-badge",children:[(0,t.jsx)("span",{children:"Smart"}),(0,t.jsx)("span",{children:"Reminders"})]})}),(0,t.jsx)("div",{className:"wth-feature-badge-row",children:(0,t.jsxs)("span",{className:"wth-feature-badge",children:[(0,t.jsx)("span",{children:"Insightful"}),(0,t.jsx)("span",{children:"Trend"}),(0,t.jsx)("span",{children:"Charts"})]})})]})}),(0,t.jsxs)("div",{className:"wth-store-row",children:[e?(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"wth-store-link","aria-label":"Download on the App Store",children:(0,t.jsx)(r.default,{src:"/images/appstore-button-download.svg",alt:"Download on the App Store",width:240,height:80,className:"wth-store-button"})}):null,p?(0,t.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"wth-store-link","aria-label":"Get it on Google Play",children:(0,t.jsx)(r.default,{src:"/images/playstore-button-download.png",alt:"Get it on Google Play",width:646,height:250,className:"wth-store-button wth-store-button-play"})}):null]})]})}),(0,t.jsx)("div",{className:"wth-mobile-jumps","aria-label":"Jump to sections",children:c.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>h(e.id),children:e.title},e.id))}),(0,t.jsxs)("div",{className:"wth-layout",children:[(0,t.jsxs)("aside",{className:"wth-sidebar","aria-label":"Water tracker sections",children:[(0,t.jsx)("p",{className:"wth-sidebar-title",children:"Explore"}),(0,t.jsx)("div",{className:"wth-nav-list",children:c.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>h(e.id),className:`wth-nav-item ${u===e.id?"active":""}`,children:e.title},e.id))})]}),(0,t.jsxs)("div",{className:"wth-content",children:[c.map(e=>(0,t.jsxs)("article",{id:e.id,className:"wth-card",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:e.title}),(0,t.jsx)("p",{children:e.summary}),(0,t.jsx)("div",{className:"wth-feature-list",role:"list","aria-label":`${e.title} highlights`,children:e.bullets.map(e=>(0,t.jsxs)("div",{className:"wth-feature-item",role:"listitem",children:[(0,t.jsx)("span",{className:"wth-dot","aria-hidden":"true"}),(0,t.jsx)("span",{children:e})]},e))}),e.image?(0,t.jsx)("div",{className:"wth-shot",children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(r.default,{src:e.image.src,alt:e.image.alt,width:1242,height:2688,sizes:"(max-width: 860px) 100vw, 720px"}),(0,t.jsx)("figcaption",{children:e.image.caption})]})}):null]},e.id)),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"Is this a good water reminder app for daily use?"}),(0,t.jsx)("p",{children:"Yes. It is built for practical daily tracking with quick drink logging, schedule-based hydration reminders, and privacy-first local storage."})]}),(0,t.jsxs)("div",{className:"wth-bottom-cta",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"wt-font-display",children:"Ready To Build Better Hydration Habits?"}),(0,t.jsx)("p",{children:"Open the full guide for setup steps, then review hydration benefits to make your intake plan sustainable."})]}),(0,t.jsxs)("div",{className:"wth-cta-row",style:{marginTop:0},children:[(0,t.jsxs)(a.default,{href:"/watertracker/guide",className:"wth-btn wth-btn-primary",children:["Open Guide ",(0,t.jsx)(l.ChevronRight,{size:14})]}),(0,t.jsx)(a.default,{href:"/watertracker/benefits",className:"wth-btn wth-btn-secondary",children:"Read Benefits"})]})]}),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"How is this different from a basic water tracker app?"}),(0,t.jsx)("p",{children:"Water Tracker N Reminder combines reminders, custom drinks, trend insights, backup support, widgets, and on-device privacy controls in one app flow."})]}),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"Need implementation-level walkthrough?"}),(0,t.jsxs)("p",{children:["See the complete ",(0,t.jsx)(a.default,{href:"/watertracker/guide",style:{color:"var(--wt-navy-700)",fontWeight:800},children:"WaterTracker guide"})," to set goals, reminders, drink types, and backup options from start to finish."]})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(o.Smartphone,{size:16}),(0,t.jsxs)("p",{style:{margin:0},children:["Looking for balanced hydration science? Read ",(0,t.jsx)(a.default,{href:"/watertracker/benefits",style:{color:"var(--wt-navy-700)",fontWeight:800},children:"Benefits of Balanced Drinking"}),"."]})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(s.Cloud,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"For backup and restore details, open the guide section dedicated to recovery flow and safe device migration."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(n,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Personalization includes themes and appearance controls to match your routine and preference."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(i.LineChart,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Trend charts turn logs into insights, helping you see consistency and improve over time."})]})]})]})]})}e.s(["default",()=>p],43772)}]);