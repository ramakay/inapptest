var fTwelve=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){e.exports={row:"_26ou5",error:"_1LtKg",log:"_2m5lQ",info:"_1JIMv",warn:"V11dV",output:"_1bkkn",timestamp:"yY_XX",outputText:"_1XaTW",block:"_3y5Jj",open:"_1vjYa",fileName:"_3Wpbj",prompt:"_10UzE",promptChar:"_1udxj",promptInput:"_1Uyei"}},function(e,n,t){e.exports={fTwelve:"_2NQFL",tab:"_2WhLL",content:"yt7l_"}},function(e,n,t){!function(){"use strict";var n,t,r=function(e,n){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n(t)},o=function(e,n){for(var t in e)n(t)},i=function(e,n,t){null!=e&&(t=t||{},Object.getOwnPropertyNames(e).forEach(function(e){t[e]||(n(e),t[e]=!0)}),i(Object.getPrototypeOf(e),n,t))};Object.defineProperty(Date.prototype,"toPrunedJSON",{value:Date.prototype.toJSON});var c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,a={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(e){return c.lastIndex=0,c.test(e)?'"'+e.replace(c,function(e){var n=a[e];return"string"==typeof n?n:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}var l=function(e,c,a){var l,f='"-pruned-"';if("object"==typeof c){var s=c;c=s.depthDecr,a=s.arrayMaxLength,t=s.iterator||r,s.allProperties?t=i:s.inheritedProperties&&(t=o),"prunedString"in s&&(f=s.prunedString),s.replacer&&(l=s.replacer)}else t=r;return n=[],a=a||50,function e(r,o,i){var c,s,p,d,y=o[r];switch(y&&"object"==typeof y&&"function"==typeof y.toPrunedJSON&&(y=y.toPrunedJSON(r)),y&&"function"==typeof y.toJSON&&(y=y.toJSON()),typeof y){case"string":return u(y);case"number":return isFinite(y)?String(y):"null";case"boolean":case"null":return String(y);case"object":if(!y)return"null";if(i<=0||-1!==n.indexOf(y)){if(l){var v=l(y,f,!0);return void 0===v?void 0:""+v}return f}if(n.push(y),d=[],"[object Array]"===Object.prototype.toString.apply(y)){for(p=Math.min(y.length,a),c=0;c<p;c+=1)d[c]=e(c,y,i-1)||"null";return s="["+d.join(",")+"]",l&&y.length>a?l(y,s,!1):s}return t(y,function(n){try{(s=e(n,y,i-1))&&d.push(u(n)+":"+s)}catch(e){}}),"{"+d.join(",")+"}";case"function":case"undefined":return l?l(y,void 0,!1):void 0}}("",{"":e},c=c||6)};l.log=function(){console.log.apply(console,Array.prototype.map.call(arguments,function(e){return JSON.parse(JSON.prune(e))}))},l.forEachProperty=i,e.exports=l}()},function(e,n){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,n){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},writable:!0,configurable:!0})},function(e,n,t){"use strict";t.r(n);t(3);function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){o(e,n,t[n])})}return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){for(var t=arguments.length,o=new Array(t>2?t-2:0),i=2;i<t;i++)o[i-2]=arguments[i];if("fragment"===e)return o;if("function"==typeof e)return c(e,r({},n,{children:o}));var u=document.createElement(e);return Object.assign(u,n),o.forEach(function(e){return a(u,e)}),n&&"function"==typeof n.ref&&n.ref(u),u}var c=function(e,n){var t=e(r({},n));return n&&"function"==typeof n.ref&&n.ref(t),t instanceof HTMLElement||Array.isArray(t)?t:t.el},a=function e(n,t){Array.isArray(t)?t.forEach(function(t){return e(n,t)}):"string"==typeof t?n.appendChild(document.createTextNode(t)):n.appendChild(t)},u=t(1),l=t.n(u),f=function(e){var n=e.label,t=e.onclick;return i("div",{className:l.a.tab,onclick:t},n)},s=function(e){var n=e.console,t=e.setContent;return i("fragment",null,i(f,{label:"Console",onclick:function(){return t(n)}}))},p=t(0),d=t.n(p),y=t(2),v=t.n(y);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b,w,h,g,O,j=function(){var e=i("div",{className:d.a.output});return{append:function(n){var t=n.verb,r=void 0===t?"log":t,o=n.args,i=n.stack,c=void 0===i?[]:i,a=document.createElement("div");a.className="".concat(d.a.row," ").concat(d.a[r]);var u=document.createElement("span"),l=6e4*(new Date).getTimezoneOffset();u.className=d.a.timestamp,u.textContent=new Date(Date.now()-l).toISOString().slice(11,23),a.appendChild(u);var f=c&&c[0]||{},s=document.createElement("a");s.className=d.a.fileName,s.textContent=f.fileName&&f.lineNumber?"".concat(f.fileName,":").concat(f.lineNumber):f.fileName||"",s.title=c.map(function(e){return e.path}).join("\n"),s.href=f.url,a.appendChild(s),Object.keys(o).forEach(function(e){var n=o[e],t=document.createElement("span");t.className=d.a.outputText,"object"===m(n)?t.innerHTML=n&&n.constructor&&n.constructor.name&&n.constructor.name.indexOf("Error")>-1?n.stack:JSON.stringify(JSON.parse(v()(n,S)),null,2):t.innerHTML=n,t.textContent.indexOf("\n")>-1&&(t.classList.add(d.a.block),t.onclick=function(){return N(t)}),a.appendChild(t)}),e.appendChild(a),a.scrollIntoView&&a.scrollIntoView()},pruneOptions:S,el:e}},N=function(e){e.classList.contains(d.a.open)?e.classList.remove(d.a.open):e.classList.add(d.a.open)},S={depthDecr:10,replacer:function(e,n,t){return t?'"-circular-"':void 0===e?'"-undefined-"':Array.isArray(e)?'"-array('+e.length+')-"':n}},x=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.inputRef,r=n.exec,o=n.getHistory,c=-1,a="",u=function(n){c=-1,a=e.value},l=function(n){r(n),c=-1,a="",e.value=""},f=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=o();c=n?Math.max(--c,-1):Math.min(++c,t.length-1),e.value=-1===c?a:t[c]||""},s=i("div",{className:d.a.prompt},i("div",{className:d.a.promptChar},"›"),i("input",{className:d.a.promptInput,onchange:u,oninput:u,onkeydown:function(n){"Enter"===n.key&&e.value?l(e.value):"ArrowUp"===n.key||"Up"===n.key?f():"ArrowDown"!==n.key&&"Down"!==n.key||f(!0)},onpaste:u,ref:function(n){return e=n}}));return"function"==typeof t&&t(e),s},E=function e(n){if((n=n.trim()).match(/^".*"$/)||n.match(/^'.*'$/))return n.slice(1,-1);var t=n.split(/\s*=\s*/);return t.shift().replace(/(?=\[)/g,".").split(".").reduce(function(n,r,o,i){var c=r.match(/^\[([^\]]*)]$/),a=c?c[1].replace(/^["']|["']$/g,""):r;return t.length>0&&o===i.length-1&&((n||{})[a]=e(t.join("="))),(n||{})[a]},window)},k=Object.assign({},window.console),C=window.onerror&&"function"==typeof window.onerror?window.onerror.bind({}):null,_=function(){var e,n=function(){return window.localStorage?JSON.parse(window.localStorage.getItem("fTwelve.history"))||[]:o||[]},t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;o.unshift(e),o.splice(n),window.localStorage&&window.localStorage.setItem("fTwelve.history",JSON.stringify(o))},r=function(e){t(e),console.log(e);try{console.log(E(e))}catch(e){console.error(e)}},o=n();return{exec:r,getHistory:n,overrideWindowConsole:function(){["log","warn","error","info"].forEach(function(n){window.console[n]=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=1===r.length&&r[0]instanceof Error,c=(Error().stack||"").split("\n").splice(2).join("\n"),a=function(e){return e.split("\n").map(function(e){return{path:(e.match(/^( *at )(.*)/)||[])[2],url:(e.match(/(http:\/\/.*?):\d+:\d+/)||[])[1],fileName:(e.match(/.+[\\\/(](.*?\.\w+)/)||[])[1],lineNumber:(e.split(":").slice(-2,-1)||[])[0],columnNumber:(e.split(":").slice(-1)[0].match(/\d+/)||[])[0]}}).filter(function(e){return e.path})}(i?r[0].stack:c);return e.append({verb:n,args:r,stack:a}),k[n]&&k[n].apply(window.console,r)}})},overrideWindowOnError:function(){window.onerror=function(e,n,t,r,o){return C&&"function"==typeof C&&C.call(void 0,e,n,t,r,o),console.error(o),!0}},restoreWindowConsole:function(){window.console=Object.assign({},k)},restoreWindowOnError:function(){window.onerror=C?C.bind({}):null},setHistory:t,el:i("div",{className:l.a.content},i(j,{ref:function(n){return e=n}}),i(x,{exec:r,getHistory:n}))}},P=function(e){var n,t,r=e.id,o=_();return{console:o,el:i("div",{className:l.a.fTwelve,id:r},i(s,{console:o.el,setContent:function(e){t&&n.removeChild(t),e.isSameNode(t)?t=void 0:(n.appendChild(e),t=e)}}),i("div",{ref:function(e){return n=e}}))}}({id:"f-twelve"}),T=P.el,L=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).show;O=!0,(void 0===e||e)&&J(),M(),P.console.overrideWindowConsole(),P.console.overrideWindowOnError()},J=function(){!0!==g&&!0===O&&(document.getElementsByTagName("body")[0].appendChild(T),g=!0,"function"==typeof b&&b())},A=function(){!0===g&&(T.parentNode.removeChild(T),g=!1,"function"==typeof w&&w())},M=function(){h="",document.addEventListener("keydown",D),document.addEventListener("keyup",I)},W=function(){document.removeEventListener("keydown",D),document.removeEventListener("keyup",I)},D=function(e){h+=e.key,"F12"!==e.key&&"F12"===h.toUpperCase()&&(g?A():J())},I=function(){h=""};L({show:!1});n.default=Object.freeze({enable:L,disable:function(){O=!1,A(),W(),P.console.restoreWindowConsole(),P.console.restoreWindowOnError()},hide:A,show:J,onHide:function(e){return w=e},onShow:function(e){return b=e}})}]).default;
