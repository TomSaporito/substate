!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SubState=e():t.SubState=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=a(n(1));n(4);var u=a(n(5));function a(t){return t&&t.__esModule?t:{default:t}}var i="UPDATE_STATE",c=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));console.warn("\n        \"Yoooo. You are using a Development version of SubState (npm substate, etc.).\n    /( '0')/\n        ");var o=t||{};return r.name=o.name||"SubStateInstance",r.currentState=o.currentState||0,r.stateStorage=o.stateStorage||[],r.defaultDeep=o.defaultDeep||!1,o.state&&r.stateStorage.push(o.state),r.init(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.default),r(e,[{key:"init",value:function(){if(this.on(i,this.updateState.bind(this)),this.on("UPDATE_CHUNK",this.updateChunk.bind(this)),this.pullFromLocal&&window.localStorage[this.name]){var t=JSON.parse(window.localStorage.getItem(this.name));this.currentState=t.currentState,this.stateStorage=t.stateStorage,this.emit("PULLED_FROM_LOCAL")}}},{key:"getState",value:function(t){return this.stateStorage[t]}},{key:"getCurrentState",value:function(t){return this.getState(this.currentState)}},{key:"getProp",value:function(t){return this.getCurrentState().byString(t)}},{key:"changeState",value:function(t){this.currentState=t.requestedState,this.emit(t.$type||"STATE_CHANGED",this.getCurrentState())}},{key:"saveState",value:function(){var t={currentState:this.currentState,stateStorage:this.stateStorage};window.localStorage.setItem(this.name,JSON.stringify(t)),this.emit("STATE_SAVED",this.getCurrentState())}},{key:"removeSavedState",value:function(){window.localStorage.removeItem(this.name),this.emit("STATE_REMOVED_SAVED_STATE")}},{key:"resetState",value:function(){this.currentState=0,this.stateStorage=[this.stateStorage[0]],this.emit("STATE_RESET")}},{key:"pushState",value:function(t){this.stateStorage.push(t),this.currentState=this.stateStorage.length-1,console.log("State Pushed")}},{key:"updateState",value:function(t){var e=void 0;for(var n in e=actions.$deep||this.defaultDeep?(0,o.default)(this.getCurrentState()):Object.assign({},this.getCurrentState()),t)console.log("replacing key ",n),t.hasOwnProperty(n)&&e.byString(n,t[n]);e.$deep=!1,console.log("New State: ",e),t.$type||(e.$type=i),this.pushState(e),this.emit(t.$type||"STATE_UPDATED",this.getCurrentState()),this.saveOnChange&&this.saveState()}}]),e}();e.default=c},function(t,e,n){(function(t,n){var r=200,o="__lodash_hash_undefined__",u=9007199254740991,a="[object Arguments]",i="[object Boolean]",c="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",v="[object Set]",b="[object String]",d="[object Symbol]",_="[object ArrayBuffer]",g="[object DataView]",S="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",m="[object Int32Array]",A="[object Uint8Array]",P="[object Uint8ClampedArray]",E="[object Uint16Array]",x="[object Uint32Array]",k=/\w*$/,T=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,D={};D[a]=D["[object Array]"]=D[_]=D[g]=D[i]=D[c]=D[S]=D[j]=D[w]=D[O]=D[m]=D[l]=D[p]=D[h]=D[y]=D[v]=D[b]=D[d]=D[A]=D[P]=D[E]=D[x]=!0,D["[object Error]"]=D[s]=D["[object WeakMap]"]=!1;var M="object"==typeof t&&t&&t.Object===Object&&t,$="object"==typeof self&&self&&self.Object===Object&&self,I=M||$||Function("return this")(),U="object"==typeof e&&e&&!e.nodeType&&e,F=U&&"object"==typeof n&&n&&!n.nodeType&&n,L=F&&F.exports===U;function R(t,e){return t.set(e[0],e[1]),t}function N(t,e){return t.add(e),t}function B(t,e,n,r){var o=-1,u=t?t.length:0;for(r&&u&&(n=t[++o]);++o<u;)n=e(n,t[o],o,t);return n}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function W(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function z(t,e){return function(n){return t(e(n))}}function G(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var H=Array.prototype,J=Function.prototype,Y=Object.prototype,q=I["__core-js_shared__"],K=function(){var t=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Q=J.toString,X=Y.hasOwnProperty,Z=Y.toString,tt=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=L?I.Buffer:void 0,nt=I.Symbol,rt=I.Uint8Array,ot=z(Object.getPrototypeOf,Object),ut=Object.create,at=Y.propertyIsEnumerable,it=H.splice,ct=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ft=z(Object.keys,Object),lt=Ut(I,"DataView"),pt=Ut(I,"Map"),ht=Ut(I,"Promise"),yt=Ut(I,"Set"),vt=Ut(I,"WeakMap"),bt=Ut(Object,"create"),dt=Bt(lt),_t=Bt(pt),gt=Bt(ht),St=Bt(yt),jt=Bt(vt),wt=nt?nt.prototype:void 0,Ot=wt?wt.valueOf:void 0;function mt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){this.__data__=new At(t)}function xt(t,e){var n=Wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&X.call(t,"callee")&&(!at.call(t,"callee")||Z.call(t)==a)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!X.call(t,u)||o&&("length"==u||Rt(u,r))||n.push(u);return n}function kt(t,e,n){var r=t[e];X.call(t,e)&&Vt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Tt(t,e){for(var n=t.length;n--;)if(Vt(t[n][0],e))return n;return-1}function Ct(t,e,n,r,o,u,T){var C;if(r&&(C=u?r(t,o,u,T):r(t)),void 0!==C)return C;if(!Jt(t))return t;var M=Wt(t);if(M){if(C=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&X.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,C)}else{var $=Lt(t),I=$==s||$==f;if(Gt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if($==h||$==a||I&&!u){if(V(t))return u?t:{};if(C=function(t){return"function"!=typeof t.constructor||Nt(t)?{}:function(t){return Jt(t)?ut(t):{}}(ot(t))}(I?{}:t),!e)return function(t,e){return $t(t,Ft(t),e)}(t,function(t,e){return t&&$t(e,Yt(e),t)}(C,t))}else{if(!D[$])return u?t:{};C=function(t,e,n,r){var o=t.constructor;switch(e){case _:return Mt(t);case i:case c:return new o(+t);case g:return function(t,e){var n=e?Mt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case S:case j:case w:case O:case m:case A:case P:case E:case x:return function(t,e){var n=e?Mt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case l:return function(t,e,n){return B(e?n(W(t),!0):W(t),R,new t.constructor)}(t,r,n);case p:case b:return new o(t);case y:return function(t){var e=new t.constructor(t.source,k.exec(t));return e.lastIndex=t.lastIndex,e}(t);case v:return function(t,e,n){return B(e?n(G(t),!0):G(t),N,new t.constructor)}(t,r,n);case d:return function(t){return Ot?Object(Ot.call(t)):{}}(t)}}(t,$,Ct,e)}}T||(T=new Et);var U=T.get(t);if(U)return U;if(T.set(t,C),!M)var F=n?function(t){return function(t,e,n){var r=e(t);return Wt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Yt,Ft)}(t):Yt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(F||t,function(o,u){F&&(o=t[u=o]),kt(C,u,Ct(o,e,n,r,u,t,T))}),C}function Dt(t){return!(!Jt(t)||function(t){return!!K&&K in t}(t))&&(Ht(t)||V(t)?tt:T).test(Bt(t))}function Mt(t){var e=new t.constructor(t.byteLength);return new rt(e).set(new rt(t)),e}function $t(t,e,n,r){n||(n={});for(var o=-1,u=e.length;++o<u;){var a=e[o],i=r?r(n[a],t[a],a,n,t):void 0;kt(n,a,void 0===i?t[a]:i)}return n}function It(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function Ut(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(n)?n:void 0}mt.prototype.clear=function(){this.__data__=bt?bt(null):{}},mt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},mt.prototype.get=function(t){var e=this.__data__;if(bt){var n=e[t];return n===o?void 0:n}return X.call(e,t)?e[t]:void 0},mt.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:X.call(e,t)},mt.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,n=Tt(e,t);return!(n<0||(n==e.length-1?e.pop():it.call(e,n,1),0))},At.prototype.get=function(t){var e=this.__data__,n=Tt(e,t);return n<0?void 0:e[n][1]},At.prototype.has=function(t){return Tt(this.__data__,t)>-1},At.prototype.set=function(t,e){var n=this.__data__,r=Tt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Pt.prototype.clear=function(){this.__data__={hash:new mt,map:new(pt||At),string:new mt}},Pt.prototype.delete=function(t){return It(this,t).delete(t)},Pt.prototype.get=function(t){return It(this,t).get(t)},Pt.prototype.has=function(t){return It(this,t).has(t)},Pt.prototype.set=function(t,e){return It(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new At},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!pt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Pt(o)}return n.set(t,e),this};var Ft=ct?z(ct,Object):function(){return[]},Lt=function(t){return Z.call(t)};function Rt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function Nt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Y)}function Bt(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,e){return t===e||t!=t&&e!=e}(lt&&Lt(new lt(new ArrayBuffer(1)))!=g||pt&&Lt(new pt)!=l||ht&&"[object Promise]"!=Lt(ht.resolve())||yt&&Lt(new yt)!=v||vt&&"[object WeakMap]"!=Lt(new vt))&&(Lt=function(t){var e=Z.call(t),n=e==h?t.constructor:void 0,r=n?Bt(n):void 0;if(r)switch(r){case dt:return g;case _t:return l;case gt:return"[object Promise]";case St:return v;case jt:return"[object WeakMap]"}return e});var Wt=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!Ht(t)}var Gt=st||function(){return!1};function Ht(t){var e=Jt(t)?Z.call(t):"";return e==s||e==f}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Yt(t){return zt(t)?xt(t):function(t){if(!Nt(t))return ft(t);var e=[];for(var n in Object(t))X.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}n.exports=function(t){return Ct(t,!0,!0)}}).call(this,n(2),n(3)(t))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e){Object.prototype.byString||Object.defineProperty(Object.prototype,"byString",{enumerable:!1,configurable:!1,writable:!1,value:function(t,e,n){for(var r=n||this,o=(t=(t=t.toString().replace(/\[(\w+)\]/g,".$1")).toString().replace(/^\./,"")).split("."),u=0;u<o.length;++u){var a=o[u];a in r?r.hasOwnProperty(a)&&(void 0!==e&&u===o.length-1&&(r[a]=e),r=r[a]):r[a]=e}return r}})}])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={}}return r(t,[{key:"on",value:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)}},{key:"off",value:function(t,e){if(this.events[t])for(var n=0;n<this.events[t].length;n++)if(this.events[t][n]===e){this.events[t].splice(n,1);break}}},{key:"emit",value:function(t,e){console.log("in emit: ",e),this.events[t]&&this.events[t].forEach(function(n,r){console.log(r,t,e),n(e)})}}]),t}();e.default=o}]).default});