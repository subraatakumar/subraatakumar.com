(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:n,objectFit:a}){let o=r?40*r:e,s=i?40*i:t,l=o&&s?`viewBox='0 0 ${o} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},87690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return o}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let i=e.r(43369),n=e.r(88143),a=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:d=!1,preload:c=!1,loading:u,className:p,quality:f,width:g,height:m,fill:h=!1,style:b,overrideSrc:w,onLoad:x,onLoadingComplete:v,placeholder:y="empty",blurDataURL:j,fetchPriority:_,decoding:P="async",layout:S,objectFit:E,objectPosition:O,lazyBoundary:C,lazyRoot:k,...z},R){var N;let I,M,$,{imgConf:T,showAltText:q,blurComplete:D,defaultLoader:A}=R,B=T||a.imageConfigDefault;if("allSizes"in B)I=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t),r=B.qualities?.sort((e,t)=>e-t);I={...B,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===A)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let L=z.loader||A;delete z.loader,delete z.srcSet;let U="__next_img_default"in L;if(U){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(b={...b,...e});let r={responsive:"100vw",fill:"100vw"}[S];r&&!t&&(t=r)}let G="",W=l(g),F=l(m);if((N=e)&&"object"==typeof N&&(s(N)||void 0!==N.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(M=t.blurWidth,$=t.blurHeight,j=j||t.blurDataURL,G=t.src,!h)if(W||F){if(W&&!F){let e=W/t.width;F=Math.round(t.height*e)}else if(!W&&F){let e=F/t.height;W=Math.round(t.width*e)}}else W=t.width,F=t.height}let V=!d&&!c&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:G)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,V=!1),I.unoptimized&&(r=!0),U&&!I.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let X=l(f),H=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},q?{}:{color:"transparent"},b),Q=D||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:W,heightInt:F,blurWidth:M,blurHeight:$,blurDataURL:j||"",objectFit:H.objectFit})}")`:`url("${y}")`,J=o.includes(H.objectFit)?"fill"===H.objectFit?"100% 100%":"cover":H.objectFit,K=Q?{backgroundSize:J,backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q}:{},Y=function({config:e,src:t,unoptimized:r,width:n,quality:a,sizes:o,loader:s}){if(r){let e=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let r=t.includes("?")?"&":"?";t=`${t}${r}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(i);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,o),c=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((r,i)=>`${s({config:e,src:t,quality:a,width:r})} ${"w"===d?r:i+1}${d}`).join(", "),src:s({config:e,src:t,quality:a,width:l[c]})}}({config:I,src:e,unoptimized:r,width:W,quality:X,sizes:t,loader:L}),Z=V?"lazy":u;return{props:{...z,loading:Z,fetchPriority:_,width:W,height:F,decoding:P,className:p,style:{...H,...K},sizes:Y.sizes,srcSet:Y.srcSet,src:w||Y.src},meta:{unoptimized:r,preload:c||d,placeholder:y,fill:h}}}},98879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let i=e.r(71645),n="u"<typeof window,a=n?()=>{}:i.useLayoutEffect,o=n?()=>{}:i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return m},defaultHead:function(){return u}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(55682),o=e.r(90809),s=e.r(43476),l=o._(e.r(71645)),d=a._(e.r(98879)),c=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function g(e){let t,r,i,n;return e.reduce(p,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,i=new Set,n={},e=>{let a=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=f.length;t<r;t++){let r=f[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?a=!1:i.add(r);else{let t=e.props[r],i=n[r]||new Set;("name"!==r||!o)&&i.has(t)?a=!1:(i.add(t),n[r]=i)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:g,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let i=e.r(55682)._(e.r(71645)),n=e.r(87690),a=i.default.createContext(n.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let i=e.r(70965),n=e.r(43369);function a({config:e,src:t,width:r,quality:a}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,i.findClosestQuality)(a,e),s=(0,n.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}a.__next_img_default=!0;let o=a},5500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return v}});let i=e.r(55682),n=e.r(90809),a=e.r(43476),o=n._(e.r(71645)),s=i._(e.r(74080)),l=i._(e.r(25633)),d=e.r(8927),c=e.r(87690),u=e.r(18556);e.r(33525);let p=e.r(65856),f=i._(e.r(1948)),g=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,n,a,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function b(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let w=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:n,decoding:s,className:l,style:d,fetchPriority:c,placeholder:u,loading:p,unoptimized:f,fill:m,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:y,sizesInput:j,onLoad:_,onError:P,...S},E)=>{let O=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&h(e,u,w,x,v,f,j))},[e,u,w,x,v,P,f,j]),C=(0,g.useMergedRef)(E,O);return(0,a.jsx)("img",{...S,...b(c),loading:p,width:n,height:i,decoding:s,"data-nimg":m?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:C,onLoad:e=>{h(e.currentTarget,u,w,x,v,f,j)},onError:e=>{y(!0),"empty"!==u&&v(!0),P&&P(e)}})});function x({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),i=(0,o.useContext)(u.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=m||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:s,onLoadingComplete:l}=e,g=(0,o.useRef)(s);(0,o.useEffect)(()=>{g.current=s},[s]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[b,v]=(0,o.useState)(!1),[y,j]=(0,o.useState)(!1),{props:_,meta:P}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:b,showAltText:y});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),P.preload?(0,a.jsx)(x,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return c},getImageProps:function(){return d}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(55682),o=e.r(8927),s=e.r(5500),l=a._(e.r(1948));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},64364,e=>{"use strict";var t=e.i(71645);function r(e,r){let[i,n]=(0,t.useState)(r??e[0]??"");return(0,t.useEffect)(()=>{if(!e.length)return;let t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>!!e);if(!t.length)return;let r=t[0].id;for(let e of t)if(e.getBoundingClientRect().top-120<=0)r=e.id;else break;n(e=>e===r?e:r)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),{activeSection:i,jumpTo:e=>{n(e),document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}}}e.s(["useWaterTrackerScrollSpy",()=>r])},44095,e=>{"use strict";var t=e.i(43476),r=e.i(57688),i=e.i(22016),n=e.i(64364);function a({sections:e,faq:a}){let{activeSection:o,jumpTo:s}=(0,n.useWaterTrackerScrollSpy)(e.map(e=>e.id),e[0]?.id);return(0,t.jsxs)("article",{children:[(0,t.jsx)("style",{children:`
        .wtg-header {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: var(--wt-card);
          padding: 30px;
          margin-bottom: 18px;
        }
        .wtg-header h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.4rem);
          letter-spacing: -0.03em;
          color: var(--wt-navy-900);
        }
        .wtg-header p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.75;
          max-width: 840px;
          font-size: 1rem;
        }
        .wtg-mobile-jumps {
          display: none;
        }
        .wtg-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wtg-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wtg-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wtg-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wtg-nav-btn {
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
        }
        .wtg-nav-btn:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wtg-nav-btn.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wtg-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 14px;
        }
        .wtg-section {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 20px;
          padding: 24px;
          scroll-margin-top: 95px;
        }
        .wtg-section h2 {
          margin: 0;
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
          font-size: clamp(1.25rem, 2.4vw, 1.8rem);
        }
        .wtg-section p {
          margin: 10px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wtg-steps {
          margin-top: 15px;
          display: grid;
          gap: 8px;
        }
        .wtg-step {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 10px;
          background: rgba(79, 136, 255, 0.06);
          border: 1px solid rgba(79, 136, 255, 0.12);
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wtg-step-n {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wtg-shot {
          margin-top: 14px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 14px;
          padding: 10px;
          background: #fff;
        }
        .wtg-shot figure {
          margin: 0;
        }
        .wtg-shot img {
          border-radius: 10px;
          width: 100%;
          height: auto;
        }
        .wtg-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wtg-faq-wrap {
          margin-top: 6px;
          background: #fff;
          border: 1px solid rgba(16, 36, 79, 0.1);
          border-radius: 16px;
          padding: 16px;
        }
        .wtg-faq-wrap h2 {
          margin: 0 0 10px;
          color: var(--wt-navy-900);
          font-size: 1.2rem;
        }
        .wtg-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
        }
        .wtg-faq-item + .wtg-faq-item {
          margin-top: 8px;
        }
        .wtg-faq-item b {
          color: #17386f;
          display: block;
          margin-bottom: 4px;
        }
        .wtg-faq-item p {
          margin: 0;
          color: #4d5f86;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtg-actions {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wtg-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 10px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
        }
        .wtg-btn-primary {
          background: #3f82ff;
          color: #fff;
        }
        .wtg-btn-ghost {
          border-color: rgba(16, 36, 79, 0.2);
          color: #17386f;
          background: #fff;
        }
        @media (max-width: 860px) {
          .wtg-header { padding: 22px 16px; }
          .wtg-layout { flex-direction: column; }
          .wtg-sidebar { display: none; }
          .wtg-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            margin-bottom: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wtg-mobile-jumps::-webkit-scrollbar { display: none; }
          .wtg-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.16);
            background: rgba(255, 255, 255, 0.8);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wtg-section { padding: 20px 14px; }
        }
      `}),(0,t.jsxs)("div",{className:"wtg-header",children:[(0,t.jsx)("h1",{className:"wt-font-display",children:"WaterTracker Setup and Usage Guide"}),(0,t.jsx)("p",{children:"This guide mirrors the real WaterTracker app flow: setup goal, configure reminders, manage drinks, log intake, monitor trends, and secure/backup your data."})]}),(0,t.jsx)("div",{className:"wtg-mobile-jumps","aria-label":"Guide section jumps",children:e.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>s(e.id),children:e.title},e.id))}),(0,t.jsxs)("div",{className:"wtg-layout",children:[(0,t.jsxs)("aside",{className:"wtg-sidebar","aria-label":"Guide sections",children:[(0,t.jsx)("p",{className:"wtg-sidebar-title",children:"Guide Sections"}),(0,t.jsx)("div",{className:"wtg-nav-list",children:e.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>s(e.id),className:`wtg-nav-btn ${o===e.id?"active":""}`,children:e.title},e.id))})]}),(0,t.jsxs)("div",{className:"wtg-content",children:[e.map(e=>(0,t.jsxs)("section",{id:e.id,className:"wtg-section",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:e.title}),(0,t.jsx)("p",{children:e.intro}),(0,t.jsx)("div",{className:"wtg-steps",role:"list","aria-label":`${e.title} steps`,children:e.steps.map((e,r)=>(0,t.jsxs)("div",{className:"wtg-step",role:"listitem",children:[(0,t.jsx)("span",{className:"wtg-step-n",children:r+1}),(0,t.jsx)("span",{children:e})]},e))}),e.image?(0,t.jsx)("div",{className:"wtg-shot",children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(r.default,{src:e.image.src,alt:e.image.alt,width:1242,height:2688,sizes:"(max-width: 860px) 100vw, 720px"}),(0,t.jsx)("figcaption",{children:e.image.caption})]})}):null]},e.id)),(0,t.jsxs)("div",{className:"wtg-faq-wrap",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:"Quick FAQ"}),a.map(e=>(0,t.jsxs)("div",{className:"wtg-faq-item",children:[(0,t.jsx)("b",{children:e.q}),(0,t.jsx)("p",{children:e.a})]},e.q)),(0,t.jsxs)("div",{className:"wtg-actions",children:[(0,t.jsx)(i.default,{href:"/watertracker",className:"wtg-btn wtg-btn-primary",children:"Back To Overview"}),(0,t.jsx)(i.default,{href:"/watertracker/benefits",className:"wtg-btn wtg-btn-ghost",children:"Hydration Benefits"}),(0,t.jsx)(i.default,{href:"/contact",className:"wtg-btn wtg-btn-ghost",children:"Contact Support"})]})]})]})]})]})}e.s(["default",()=>a])}]);