(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{622:function(n,t,e){"use strict";e.d(t,"a",(function(){return R}));var r=e(16),o=e(5),a=e(19);function u(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var i=function(){var n,t=(n=regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("api/v1/appdata/instancelogo/info/?instance_id=".concat(t),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){u(a,r,o,i,c,"next",n)}function c(n){u(a,r,o,i,c,"throw",n)}i(void 0)}))});return function(n){return t.apply(this,arguments)}}();function c(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var s=function(){var n,t=(n=regeneratorRuntime.mark((function n(t,e){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.put("api/v1/appdata/instance/logo/".concat(t,"/"),e,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(n){c(a,r,o,u,i,"next",n)}function i(n){c(a,r,o,u,i,"throw",n)}u(void 0)}))});return function(n,e){return t.apply(this,arguments)}}();function f(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var l=function(){var n,t=(n=regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.post("api/v1/appdata/instancelogo/info/",t,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(n){f(a,r,o,u,i,"next",n)}function i(n){f(a,r,o,u,i,"throw",n)}u(void 0)}))});return function(n){return t.apply(this,arguments)}}();function p(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var v=function(){var n,t=(n=regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.delete("api/v1/appdata/instance/logo/".concat(t,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(n){p(a,r,o,u,i,"next",n)}function i(n){p(a,r,o,u,i,"throw",n)}u(void 0)}))});return function(n){return t.apply(this,arguments)}}(),h=e(17);function d(n){return function(n){if(Array.isArray(n))return b(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||w(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function g(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(n){m(a,r,o,u,i,"next",n)}function i(n){m(a,r,o,u,i,"throw",n)}u(void 0)}))}}function y(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,a=[],u=!0,i=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(n){i=!0,o=n}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(n,t)||w(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,t){if(n){if("string"==typeof n)return b(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?b(n,t):void 0}}function b(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var x=new r.a(!1),R=function(){var n=y(Object(r.b)(x),2),t=n[0],e=n[1];return{logo:t,setlogo:e,loadlogo:function(){return g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i("").then((function(n){e(n.data.results)})).catch((function(n){console.log(n),Object(h.e)(n,n.response)}));case 2:case"end":return n.stop()}}),n)})))()},loadlogowithcallback:function(n){return g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("").then((function(t){n(t.data.results),e(t.data.results)})).catch((function(n){console.log(n),Object(h.e)(n,n.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogowithid:function(n){return g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i(n).then((function(n){e(n.data.results)})).catch((function(n){console.log(n),Object(h.e)(n,n.response)}));case 2:case"end":return t.stop()}}),t)})))()},postlogo:function(n){return g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(n).then((function(n){e((function(t){return[].concat(d(t),[n.data])}))})).catch((function(n){console.log(n),Object(h.e)(n,n.response)}));case 2:case"end":return t.stop()}}),t)})))()},editlogo:function(n,t){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s(n,t).then((function(r){e((function(e){return e&&e.map((function(e){var r;return String(e.id)===String(n)?((r=e).instance_id=t.instance_id,r.i_logo=t.i_logo,r.position=t.position,r.section=t.section,r):e}))}))})).catch((function(n){console.log(n),Object(h.e)(n,n.response)}));case 2:case"end":return r.stop()}}),r)})))()},deletelogo:function(n){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(n).then((function(r){e(t&&t.filter((function(t){return t.id!==n})))})).catch((function(n){console.log(n),Object(h.e)(n,n.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}},639:function(n,t,e){"use strict";var r=e(5),o=e(19);function a(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var u=function(){var n,t=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.get("api/v1/appdata/level/list/",{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var u=n.apply(t,e);function i(n){a(u,r,o,i,c,"next",n)}function c(n){a(u,r,o,i,c,"throw",n)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();t.a=u},686:function(n,t,e){"use strict";e.d(t,"a",(function(){return m}));var r=e(16),o=e(5),a=e(19);function u(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var i=function(){var n,t=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("api/v1/appdata/instance/logo/position/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){u(a,r,o,i,c,"next",n)}function c(n){u(a,r,o,i,c,"throw",n)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();function c(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var s=function(){var n,t=(n=regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.get("api/v1/appdata/instance/logo/position/".concat(t,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(n){c(a,r,o,u,i,"next",n)}function i(n){c(a,r,o,u,i,"throw",n)}u(void 0)}))});return function(n){return t.apply(this,arguments)}}(),f=e(17);function l(n,t,e,r,o,a,u){try{var i=n[a](u),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function p(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function u(n){l(a,r,o,u,i,"next",n)}function i(n){l(a,r,o,u,i,"throw",n)}u(void 0)}))}}function v(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,a=[],u=!0,i=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(n){i=!0,o=n}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var d=new r.a(!1),m=function(){var n=v(Object(r.b)(d),2),t=n[0],e=n[1];return{logoposition:t,setlogoposition:e,loadlogo_arrayposition:function(){return p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().then((function(n){e(n.data.results)})).catch((function(n){console.log(n),Object(f.e)(n,n.response)}));case 2:case"end":return n.stop()}}),n)})))()},loadlogo_arrayposition_iid:function(n){return p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(n).then((function(n){e(n.data.results)})).catch((function(n){console.log(n),Object(f.e)(n,n.response)}));case 2:case"end":return t.stop()}}),t)})))()}}}}}]);
//# sourceMappingURL=34.84a1330a117f76dd4081.js.map