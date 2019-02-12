!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SubState=e():t.SubState=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=i(r(1));r(4);var u=i(r(5));function i(t){return t&&t.__esModule?t:{default:t}}var a="UPDATE_STATE",c=function(t){function e(t,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),o=t||{};return n.name=o.name||"SubStateInstance",n.currentState=o.currentState||0,n.stateStorage=o.stateStorage||[],n.defaultDeep=o.defaultDeep||!1,o.state&&n.stateStorage.push(o.state),n.init(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.default),n(e,[{key:"init",value:function(){this.on(a,this.updateState.bind(this))}},{key:"getState",value:function(t){return this.stateStorage[t]}},{key:"getCurrentState",value:function(t){return this.getState(this.currentState)}},{key:"getProp",value:function(t){return this.getCurrentState().byString(t)}},{key:"changeState",value:function(t){this.currentState=t.requestedState,this.emit(t.$type||"STATE_CHANGED",this.getCurrentState())}},{key:"resetState",value:function(){this.currentState=0,this.stateStorage=[this.stateStorage[0]],this.emit("STATE_RESET")}},{key:"pushState",value:function(t){this.stateStorage.push(t),this.currentState=this.stateStorage.length-1}},{key:"updateState",value:function(t){var e=void 0;for(var r in e=actions.$deep||this.defaultDeep?(0,o.default)(this.getCurrentState()):Object.assign({},this.getCurrentState()),t)t.hasOwnProperty(r)&&e.byString(r,t[r]);e.$deep=!1,t.$type||(e.$type=a),this.pushState(e),this.emit(t.$type||"STATE_UPDATED",this.getCurrentState())}}]),e}();e.default=c},function(t,e,r){(function(t,r){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",b="[object Set]",v="[object String]",d="[object Symbol]",_="[object ArrayBuffer]",g="[object DataView]",j="[object Float32Array]",S="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",m="[object Int32Array]",P="[object Uint8Array]",x="[object Uint8ClampedArray]",A="[object Uint16Array]",k="[object Uint32Array]",E=/\w*$/,T=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,M={};M[i]=M["[object Array]"]=M[_]=M[g]=M[a]=M[c]=M[j]=M[S]=M[w]=M[O]=M[m]=M[l]=M[p]=M[h]=M[y]=M[b]=M[v]=M[d]=M[P]=M[x]=M[A]=M[k]=!0,M["[object Error]"]=M[f]=M["[object WeakMap]"]=!1;var C="object"==typeof t&&t&&t.Object===Object&&t,D="object"==typeof self&&self&&self.Object===Object&&self,I=C||D||Function("return this")(),F="object"==typeof e&&e&&!e.nodeType&&e,U=F&&"object"==typeof r&&r&&!r.nodeType&&r,B=U&&U.exports===F;function R(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,u=t?t.length:0;for(n&&u&&(r=t[++o]);++o<u;)r=e(r,t[o],o,t);return r}function G(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function N(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,H=Array.prototype,J=Function.prototype,K=Object.prototype,Q=I["__core-js_shared__"],X=(q=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=B?I.Buffer:void 0,nt=I.Symbol,ot=I.Uint8Array,ut=N(Object.getPrototypeOf,Object),it=Object.create,at=K.propertyIsEnumerable,ct=H.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=N(Object.keys,Object),pt=Ut(I,"DataView"),ht=Ut(I,"Map"),yt=Ut(I,"Promise"),bt=Ut(I,"Set"),vt=Ut(I,"WeakMap"),dt=Ut(Object,"create"),_t=Gt(pt),gt=Gt(ht),jt=Gt(yt),St=Gt(bt),wt=Gt(vt),Ot=nt?nt.prototype:void 0,mt=Ot?Ot.valueOf:void 0;function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new xt(t)}function Et(t,e){var r=Nt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Wt(u,n))||r.push(u);return r}function Tt(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function $t(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function Mt(t,e,r,n,o,u,T){var $;if(n&&($=u?n(t,o,u,T):n(t)),void 0!==$)return $;if(!Jt(t))return t;var C=Nt(t);if(C){if($=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,$)}else{var D=Rt(t),I=D==f||D==s;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(D==h||D==i||I&&!u){if(G(t))return u?t:{};if($=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ut(t),Jt(e)?it(e):{});var e}(I?{}:t),!e)return function(t,e){return It(t,Bt(t),e)}(t,function(t,e){return t&&It(e,Kt(e),t)}($,t))}else{if(!M[D])return u?t:{};$=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Dt(t);case a:case c:return new o(+t);case g:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case S:case w:case O:case m:case P:case x:case A:case k:return function(t,e){var r=e?Dt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return z(e?r(L(t),!0):L(t),R,new t.constructor)}(t,n,r);case p:case v:return new o(t);case y:return(f=new(i=t).constructor(i.source,E.exec(i))).lastIndex=i.lastIndex,f;case b:return function(t,e,r){return z(e?r(V(t),!0):V(t),W,new t.constructor)}(t,n,r);case d:return u=t,mt?Object(mt.call(u)):{}}var u;var i,f}(t,D,Mt,e)}}T||(T=new kt);var F=T.get(t);if(F)return F;if(T.set(t,$),!C)var U=r?function(t){return function(t,e,r){var n=e(t);return Nt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Kt,Bt)}(t):Kt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,function(o,u){U&&(o=t[u=o]),Tt($,u,Mt(o,e,r,n,u,t,T))}),$}function Ct(t){return!(!Jt(t)||X&&X in t)&&(Ht(t)||G(t)?et:T).test(Gt(t))}function Dt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function It(t,e,r,n){r||(r={});for(var o=-1,u=e.length;++o<u;){var i=e[o],a=n?n(r[i],t[i],i,r,t):void 0;Tt(r,i,void 0===a?t[i]:a)}return r}function Ft(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(r)?r:void 0}Pt.prototype.clear=function(){this.__data__=dt?dt(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},Pt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},Pt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=$t(e,t);return!(r<0||(r==e.length-1?e.pop():ct.call(e,r,1),0))},xt.prototype.get=function(t){var e=this.__data__,r=$t(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return $t(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=$t(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new Pt,map:new(ht||xt),string:new Pt}},At.prototype.delete=function(t){return Ft(this,t).delete(t)},At.prototype.get=function(t){return Ft(this,t).get(t)},At.prototype.has=function(t){return Ft(this,t).has(t)},At.prototype.set=function(t,e){return Ft(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new xt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var Bt=ft?N(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Gt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Rt(new pt(new ArrayBuffer(1)))!=g||ht&&Rt(new ht)!=l||yt&&"[object Promise]"!=Rt(yt.resolve())||bt&&Rt(new bt)!=b||vt&&"[object WeakMap]"!=Rt(new vt))&&(Rt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Gt(r):void 0;if(n)switch(n){case _t:return g;case gt:return l;case jt:return"[object Promise]";case St:return b;case wt:return"[object WeakMap]"}return e});var Nt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Ht(t)}var qt=st||function(){return!1};function Ht(t){var e=Jt(t)?tt.call(t):"";return e==f||e==s}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return Vt(t)?Et(t):function(t){if(!zt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}r.exports=function(t){return Mt(t,!0,!0)}}).call(this,r(2),r(3)(t))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){Object.prototype.byString||Object.defineProperty(Object.prototype,"byString",{enumerable:!1,configurable:!1,writable:!1,value:function(t,e,r){for(var n=r||this,o=(t=(t=t.toString().replace(/\[(\w+)\]/g,".$1")).toString().replace(/^\./,"")).split("."),u=0;u<o.length;++u){var i=o[u];i in n?n.hasOwnProperty(i)&&(void 0!==e&&u===o.length-1&&(n[i]=e),n=n[i]):n[i]=e}return n}})}])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={}}return n(t,[{key:"on",value:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)}},{key:"off",value:function(t,e){if(this.events[t])for(var r=0;r<this.events[t].length;r++)if(this.events[t][r]===e){this.events[t].splice(r,1);break}}},{key:"emit",value:function(t,e){this.events[t]&&this.events[t].forEach(function(t,r){t(e)})}}]),t}();e.default=o}]).default});