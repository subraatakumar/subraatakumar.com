(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63059,75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...i,width:a,height:a,stroke:e,strokeWidth:s?24*Number(n)/Number(a):n,className:r("lucide",o),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),s=(e,i)=>{let s=(0,t.forwardRef)(({className:s,...o},l)=>(0,t.createElement)(n,{ref:l,iconNode:i,className:r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...o}));return s.displayName=a(e),s};e.s(["default",()=>s],75254);let o=s("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",()=>o],63059)},27927,e=>{"use strict";let t=(0,e.i(75254).default)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);e.s(["Cloud",()=>t],27927)},26707,e=>{"use strict";let t=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>t],26707)},39544,e=>{"use strict";let t=(0,e.i(75254).default)("droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);e.s(["Droplets",()=>t],39544)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],81418)},73705,30267,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("bell-ring",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);e.s(["BellRing",()=>r],73705);let a=(0,t.default)("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);e.s(["LineChart",()=>a],30267)},88143,(e,t,r)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:i,objectFit:n}){let s=r?40*r:e,o=a?40*a:t,l=s&&o?`viewBox='0 0 ${s} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return s}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let a=e.r(43369),i=e.r(88143),n=e.r(87690),s=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:c=!1,loading:p,className:u,quality:h,width:f,height:m,fill:g=!1,style:w,overrideSrc:y,onLoad:b,onLoadingComplete:x,placeholder:v="empty",blurDataURL:j,fetchPriority:k,decoding:_="async",layout:C,objectFit:S,objectPosition:z,lazyBoundary:P,lazyRoot:N,...E},O){var R;let M,I,T,{imgConf:A,showAltText:$,blurComplete:B,defaultLoader:D}=O,W=A||n.imageConfigDefault;if("allSizes"in W)M=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),r=W.qualities?.sort((e,t)=>e-t);M={...W,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=E.loader||D;delete E.loader,delete E.srcSet;let q="__next_img_default"in L;if(q){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...a}=t;return e(a)}}if(C){"fill"===C&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let F="",H=l(f),U=l(m);if((R=e)&&"object"==typeof R&&(o(R)||void 0!==R.src)){let t=o(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(I=t.blurWidth,T=t.blurHeight,j=j||t.blurDataURL,F=t.src,!g)if(H||U){if(H&&!U){let e=H/t.width;U=Math.round(t.height*e)}else if(!H&&U){let e=U/t.height;H=Math.round(t.width*e)}}else H=t.width,U=t.height}let G=!d&&!c&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,G=!1),M.unoptimized&&(r=!0),q&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let V=l(h),X=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:z}:{},$?{}:{color:"transparent"},w),Y=B||"empty"===v?null:"blur"===v?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:H,heightInt:U,blurWidth:I,blurHeight:T,blurDataURL:j||"",objectFit:X.objectFit})}")`:`url("${v}")`,J=s.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,Q=Y?{backgroundSize:J,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:n,sizes:s,loader:o}){if(r){let e=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,a){if(a){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(a);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,s),c=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((r,a)=>`${o({config:e,src:t,quality:n,width:r})} ${"w"===d?r:a+1}${d}`).join(", "),src:o({config:e,src:t,quality:n,width:l[c]})}}({config:M,src:e,unoptimized:r,width:H,quality:V,sizes:t,loader:L}),K=G?"lazy":p;return{props:{...E,loading:K,fetchPriority:k,width:H,height:U,decoding:_,className:u,style:{...X,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:y||Z.src},meta:{unoptimized:r,preload:c||d,placeholder:v,fill:g}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let a=e.r(71645),i="u"<typeof window,n=i?()=>{}:a.useLayoutEffect,s=i?()=>{}:a.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),o()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return m},defaultHead:function(){return p}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),s=e.r(90809),o=e.r(43476),l=s._(e.r(71645)),d=n._(e.r(98879)),c=e.r(42732);function p(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let h=["name","httpEquiv","charSet","itemProp"];function f(e){let t,r,a,i;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,r=new Set,a=new Set,i={},e=>{let n=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=h.length;t<r;t++){let r=h[t];if(e.props.hasOwnProperty(r))if("charSet"===r)a.has(r)?n=!1:a.add(r);else{let t=e.props[r],a=i[r]||new Set;("name"!==r||!s)&&a.has(t)?n=!1:(a.add(t),i[r]=a)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(55682)._(e.r(71645)),i=e.r(87690),n=a.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function a(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let a=e.r(70965),i=e.r(43369);function n({config:e,src:t,width:r,quality:n}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,a.findClosestQuality)(n,e),o=(0,i.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&o?`&dpl=${o}`:""}`}n.__next_img_default=!0;let s=n},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return x}});let a=e.r(55682),i=e.r(90809),n=e.r(43476),s=i._(e.r(71645)),o=a._(e.r(74080)),l=a._(e.r(25633)),d=e.r(8927),c=e.r(87690),p=e.r(18556);e.r(33525);let u=e.r(65856),h=a._(e.r(1948)),f=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,a,i,n,s){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function w(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,s.forwardRef)(({src:e,srcSet:t,sizes:r,height:a,width:i,decoding:o,className:l,style:d,fetchPriority:c,placeholder:p,loading:u,unoptimized:h,fill:m,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:v,sizesInput:j,onLoad:k,onError:_,...C},S)=>{let z=(0,s.useCallback)(e=>{e&&(_&&(e.src=e.src),e.complete&&g(e,p,y,b,x,h,j))},[e,p,y,b,x,_,h,j]),P=(0,f.useMergedRef)(S,z);return(0,n.jsx)("img",{...C,...w(c),loading:u,width:i,height:a,decoding:o,"data-nimg":m?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:P,onLoad:e=>{g(e.currentTarget,p,y,b,x,h,j)},onError:e=>{v(!0),"empty"!==p&&x(!0),_&&_(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...w(t.fetchPriority)};return e&&o.default.preload?(o.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(u.RouterContext),a=(0,s.useContext)(p.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=m||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:o,onLoadingComplete:l}=e,f=(0,s.useRef)(o);(0,s.useEffect)(()=>{f.current=o},[o]);let g=(0,s.useRef)(l);(0,s.useEffect)(()=>{g.current=l},[l]);let[w,x]=(0,s.useState)(!1),[v,j]=(0,s.useState)(!1),{props:k,meta:_}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:i,blurComplete:w,showAltText:v});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{...k,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:f,onLoadingCompleteRef:g,setBlurComplete:x,setShowAltText:j,sizesInput:e.sizes,ref:t}),_.preload?(0,n.jsx)(b,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(55682),s=e.r(8927),o=e.r(5500),l=n._(e.r(1948));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=o.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},64364,e=>{"use strict";var t=e.i(71645);function r(e,r){let[a,i]=(0,t.useState)(r??e[0]??"");return(0,t.useEffect)(()=>{if(!e.length)return;let t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>!!e);if(!t.length)return;let r=t[0].id;for(let e of t)if(e.getBoundingClientRect().top-120<=0)r=e.id;else break;i(e=>e===r?e:r)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),{activeSection:a,jumpTo:e=>{i(e),document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}}}e.s(["useWaterTrackerScrollSpy",()=>r])},43772,e=>{"use strict";var t=e.i(43476),r=e.i(57688),a=e.i(22016),i=e.i(39544),n=e.i(81418),s=e.i(73705),o=e.i(30267);let l=(0,e.i(75254).default)("paintbrush-vertical",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]]);var d=e.i(27927),c=e.i(26707),p=e.i(63059),u=e.i(64364);let h=[{id:"daily-tracking",title:"Track Intake In Seconds",summary:"Quick-add logging keeps hydration tracking fast. Switch between ml and oz anytime and see progress update instantly.",bullets:["One-tap drink entry for daily consistency","Supports ml and oz without resetting your data","Clear progress view to stay on target"],image:{src:"/watertrackerimages/5.png",alt:"Water Tracker home dashboard with hydration progress",caption:"Home dashboard with quick logging and unit toggle"}},{id:"reminders",title:"Reminder Schedule That Fits Your Day",summary:"Set reminder times, lead-time nudges, and optional follow-up alerts to build a reliable hydration routine.",bullets:["Custom reminder time slots","Lead-time and follow-up reminder options","Sound and silent reminder modes"],image:{src:"/watertrackerimages/4.png",alt:"Hydration reminder schedule screen in Water Tracker",caption:"Hydration goal and reminders on your schedule"}},{id:"drink-management",title:"Your Drinks, Your Volumes",summary:"Create and manage drink types with custom volume, icon, and color so logging matches what you actually drink.",bullets:["Manage drink types list","Custom icon and color per drink","Volume controls for realistic tracking"],image:{src:"/watertrackerimages/7.png",alt:"Manage drink types list in Water Tracker",caption:"Manage and personalize your drink list"}},{id:"insights",title:"Trend Insights, Not Guesswork",summary:"Visual trends help you understand consistency and daily performance so you can improve hydration habits over time.",bullets:["Daily consumption vs goal visualization","History for habit review","Actionable progress patterns"],image:{src:"/watertrackerimages/9.png",alt:"Hydration trend chart screen in Water Tracker",caption:"Trend charts to measure consistency"}},{id:"privacy",title:"Privacy-First By Default",summary:"No mandatory account. Hydration logs stay on-device with optional local protection like PIN and biometric unlock.",bullets:["No login required for core tracking","Local-first data model","PIN and biometric protection options"],image:{src:"/watertrackerimages/1.png",alt:"Water Tracker privacy message screen",caption:"Built around local data privacy"}},{id:"backup-widgets",title:"Backup, Widgets, and Personalization",summary:"Backup and restore support, fluid widgets, and appearance themes make the app practical for long-term daily use.",bullets:["Backup and restore tools","Fluid intake widget support","Appearance themes and customization"],image:{src:"/watertrackerimages/2.png",alt:"Backup and restore screen in Water Tracker",caption:"Backup and restore support for safer continuity"}}];function f({iosUrl:e,androidUrl:f}){let{activeSection:m,jumpTo:g}=(0,u.useWaterTrackerScrollSpy)(h.map(e=>e.id),h[0].id);return(0,t.jsxs)("section",{children:[(0,t.jsx)("style",{children:`
        .wth-hero {
          border-radius: 26px;
          border: 1px solid rgba(16, 36, 79, 0.12);
          background:
            radial-gradient(circle at 7% 8%, rgba(111, 192, 255, 0.26), transparent 36%),
            radial-gradient(circle at 92% 84%, rgba(98, 201, 255, 0.24), transparent 34%),
            linear-gradient(145deg, #0e2a66 0%, #1a4a98 46%, #2d73d1 100%);
          padding: 38px;
          color: #eaf7ff;
          margin-bottom: 26px;
        }
        .wth-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .wth-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(234, 247, 255, 0.36);
          border-radius: 999px;
          background: rgba(234, 247, 255, 0.12);
          padding: 6px 10px;
        }
        .wth-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4.8vw, 3.9rem);
          letter-spacing: -0.03em;
          line-height: 1.03;
        }
        .wth-hero p {
          margin: 14px 0 0;
          color: #cce9ff;
          line-height: 1.7;
          max-width: 760px;
          font-size: 1.03rem;
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
          .wth-hero { padding: 28px 18px; }
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
      `}),(0,t.jsxs)("div",{className:"wth-hero",children:[(0,t.jsxs)("div",{className:"wth-badges","aria-label":"Water tracker highlights",children:[(0,t.jsxs)("span",{className:"wth-badge",children:[(0,t.jsx)(i.Droplets,{size:12})," Privacy-First"]}),(0,t.jsxs)("span",{className:"wth-badge",children:[(0,t.jsx)(s.BellRing,{size:12})," Smart Reminders"]}),(0,t.jsxs)("span",{className:"wth-badge",children:[(0,t.jsx)(n.ShieldCheck,{size:12})," Local-First Logs"]})]}),(0,t.jsx)("h1",{className:"wt-font-display",children:"Best Water Tracker App For Daily Hydration Consistency"}),(0,t.jsx)("p",{children:"Water Tracker N Reminder helps you log intake fast, set reminder schedules, and keep control of hydration data. No mandatory account, flexible ml/oz units, and practical tools for reminders, trends, backups, and personalization."}),(0,t.jsxs)("div",{className:"wth-cta-row",children:[e?(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"wth-btn wth-btn-primary",children:"Download on App Store"}):(0,t.jsx)("span",{className:"wth-btn wth-btn-secondary",children:"App Store Link Pending"}),f?(0,t.jsx)("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"wth-btn wth-btn-secondary",children:"Get it on Play Store"}):(0,t.jsx)("span",{className:"wth-btn wth-btn-secondary",children:"Play Store Under Review"}),(0,t.jsx)(a.default,{href:"/watertracker/guide",className:"wth-btn wth-btn-secondary",children:"How To Use"}),(0,t.jsx)(a.default,{href:"/watertracker/benefits",className:"wth-btn wth-btn-secondary",children:"Hydration Benefits"})]})]}),(0,t.jsx)("div",{className:"wth-mobile-jumps","aria-label":"Jump to sections",children:h.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>g(e.id),children:e.title},e.id))}),(0,t.jsxs)("div",{className:"wth-layout",children:[(0,t.jsxs)("aside",{className:"wth-sidebar","aria-label":"Water tracker sections",children:[(0,t.jsx)("p",{className:"wth-sidebar-title",children:"Explore"}),(0,t.jsx)("div",{className:"wth-nav-list",children:h.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>g(e.id),className:`wth-nav-item ${m===e.id?"active":""}`,children:e.title},e.id))})]}),(0,t.jsxs)("div",{className:"wth-content",children:[h.map(e=>(0,t.jsxs)("article",{id:e.id,className:"wth-card",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:e.title}),(0,t.jsx)("p",{children:e.summary}),(0,t.jsx)("div",{className:"wth-feature-list",role:"list","aria-label":`${e.title} highlights`,children:e.bullets.map(e=>(0,t.jsxs)("div",{className:"wth-feature-item",role:"listitem",children:[(0,t.jsx)("span",{className:"wth-dot","aria-hidden":"true"}),(0,t.jsx)("span",{children:e})]},e))}),e.image?(0,t.jsx)("div",{className:"wth-shot",children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(r.default,{src:e.image.src,alt:e.image.alt,width:1242,height:2688,sizes:"(max-width: 860px) 100vw, 720px"}),(0,t.jsx)("figcaption",{children:e.image.caption})]})}):null]},e.id)),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"Is this a good water reminder app for daily use?"}),(0,t.jsx)("p",{children:"Yes. It is built for practical daily tracking with quick drink logging, schedule-based hydration reminders, and privacy-first local storage."})]}),(0,t.jsxs)("div",{className:"wth-bottom-cta",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"wt-font-display",children:"Ready To Build Better Hydration Habits?"}),(0,t.jsx)("p",{children:"Open the full guide for setup steps, then review hydration benefits to make your intake plan sustainable."})]}),(0,t.jsxs)("div",{className:"wth-cta-row",style:{marginTop:0},children:[(0,t.jsxs)(a.default,{href:"/watertracker/guide",className:"wth-btn wth-btn-primary",children:["Open Guide ",(0,t.jsx)(p.ChevronRight,{size:14})]}),(0,t.jsx)(a.default,{href:"/watertracker/benefits",className:"wth-btn wth-btn-secondary",children:"Read Benefits"})]})]}),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"How is this different from a basic water tracker app?"}),(0,t.jsx)("p",{children:"Water Tracker N Reminder combines reminders, custom drinks, trend insights, backup support, widgets, and on-device privacy controls in one app flow."})]}),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"Need implementation-level walkthrough?"}),(0,t.jsxs)("p",{children:["See the complete ",(0,t.jsx)(a.default,{href:"/watertracker/guide",style:{color:"var(--wt-navy-700)",fontWeight:800},children:"WaterTracker guide"})," to set goals, reminders, drink types, and backup options from start to finish."]})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(c.Smartphone,{size:16}),(0,t.jsxs)("p",{style:{margin:0},children:["Looking for balanced hydration science? Read ",(0,t.jsx)(a.default,{href:"/watertracker/benefits",style:{color:"var(--wt-navy-700)",fontWeight:800},children:"Benefits of Balanced Drinking"}),"."]})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(d.Cloud,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"For backup and restore details, open the guide section dedicated to recovery flow and safe device migration."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(l,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Personalization includes themes and appearance controls to match your routine and preference."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(o.LineChart,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Trend charts turn logs into insights, helping you see consistency and improve over time."})]})]})]})]})}e.s(["default",()=>f],43772)}]);