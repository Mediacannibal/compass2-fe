(window.webpackJsonp=window.webpackJsonp||[]).push([[27,35],{1021:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(11);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a(-1),i=function(){var t=o(Object(r.b)(u),2);return{ActiveInstance:t[0],setActiveInstance:t[1]}}},1022:function(t,e,n){"use strict";var r=n(5),o=n(20);function a(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("api/v1/appdata/text/create/",e,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();e.a=u},1023:function(t,e,n){"use strict";var r=n(5),o=n(20);function a(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.put("api/v1/appdata/text/update/".concat(e,"/"),n,{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();e.a=u},1024:function(t,e,n){"use strict";var r=n(5);e.a=function(){r.a.get("api/v1/appdata/export_game_xls/",{headers:{"Content-Type":"application/ms-excel"},responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download","gamedata_report.xls"),document.body.appendChild(n),n.click()}))}},1025:function(t,e,n){"use strict";var r=n(5);e.a=function(){r.a.get("api/v1/appdata/export_profile_xls/",{headers:{"Content-Type":"application/ms-excel"},responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=e,n.setAttribute("download","userdata_report.xls"),document.body.appendChild(n),n.click()}))}},1033:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(11),o=n(5),a=n(20);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var i=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/sublevel/info/?instance_id=".concat(e,"&level_id=").concat(n),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();function c(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var s=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("api/v1/appdata/sublevel/info/",e,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){c(a,r,o,u,i,"next",t)}function i(t){c(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}();function l(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var f=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("api/v1/appdata/sublevel/".concat(e,"/"),n,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){l(a,r,o,u,i,"next",t)}function i(t){l(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();function p(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var v=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("api/v1/appdata/sublevel/".concat(e,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){p(a,r,o,u,i,"next",t)}function i(t){p(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),d=n(262),h=n(19);function m(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||w(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){g(a,r,o,u,i,"next",t)}function i(t){g(a,r,o,u,i,"throw",t)}u(void 0)}))}}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||w(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var R=new r.a(!1),S=new r.a(!1),j=function(){var t=b(Object(r.b)(R),2),e=t[0],n=t[1],o=b(Object(r.b)(S),2),a=o[0],u=o[1];return{sublevel:e,setsublevel:n,sublevel1:a,setsublevel1:u,loadsublevel:function(){return y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("","").then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(h.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadsublevelwithid:function(t,e){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i(t,e).then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(h.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},postsublevel:function(t){return y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t).then((function(t){console.log(t),n((function(e){return[].concat(m(e),[t.data])}))})).catch((function(t){console.log(t),Object(h.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},editsublevel:function(t,e){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(t,e).then((function(r){console.log(r),n((function(n){return n&&n.map((function(n){var r;return String(n.id)===String(t)?((r=n).instance_id=e.instance_id,r.level_id=e.level_id,r.sl_types=e.sl_types,r.sl_icon=e.sl_icon,r.sl_title=e.sl_title,r.sl_stitle=e.sl_stitle,r.sl_body=e.sl_body,r.sl_bodytype=e.sl_bodytype,r.sl_bodyoptions=e.sl_bodyoptions,r.sl_misc=e.sl_misc,r.sl_media=e.sl_media,r):n}))}))})).catch((function(t){console.log(t),Object(h.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},deletesublevel:function(t){return y(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(t).then((function(r){console.log(r),n(e&&e.filter((function(e){return e.id!==t})))})).catch((function(t){console.log(t),Object(h.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},loadsublevel1_data_byid:function(t){return y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(t).then((function(t){u(t.data.results)})).catch((function(t){console.log(t),Object(h.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()}}}},1045:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(11),o=n(5),a=n(20);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var i=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/gamedatalog/?instance=".concat(e,"&level_sublevel=").concat(n,"&username=").concat(r),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t,n,r){return e.apply(this,arguments)}}(),c=n(19);function s(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){s(a,r,o,u,i,"next",t)}function i(t){s(a,r,o,u,i,"throw",t)}u(void 0)}))}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var v=new r.a(!1),d=function(){var t=f(Object(r.b)(v),2),e=t[0],n=t[1];return{Gamedatalog:e,setGamedatalog:n,loadGamedatalog:function(){return l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("","","").then((function(t){n(t.data)})).catch((function(t){Object(c.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadGamedatalogfilter:function(t,e,r){return l(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i(t,e,r).then((function(t){n(t.data)})).catch((function(t){Object(c.e)(t,t.response)}));case 2:case"end":return o.stop()}}),o)})))()},loadGamedatalogfilter_withcallback:function(t){return l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("","","").then((function(e){n(e.data),t(e.data)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}},628:function(t,e,n){"use strict";n.d(e,"a",(function(){return R}));var r=n(11),o=n(5),a=n(20);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var i=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/instancelogo/info/?instance_id=".concat(e),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();function c(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var s=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.put("api/v1/appdata/instance/logo/".concat(e,"/"),n,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){c(a,r,o,u,i,"next",t)}function i(t){c(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();function l(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var f=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("api/v1/appdata/instancelogo/info/",e,{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){l(a,r,o,u,i,"next",t)}function i(t){l(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}();function p(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var v=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("api/v1/appdata/instance/logo/".concat(e,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){p(a,r,o,u,i,"next",t)}function i(t){p(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),d=n(19);function h(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){m(a,r,o,u,i,"next",t)}function i(t){m(a,r,o,u,i,"throw",t)}u(void 0)}))}}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var x=new r.a(!1),R=function(){var t=y(Object(r.b)(x),2),e=t[0],n=t[1];return{logo:e,setlogo:n,loadlogo:function(){return g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i("").then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogowithcallback:function(t){return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("").then((function(e){t(e.data.results),n(e.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},loadlogowithid:function(t){return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t).then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},postlogo:function(t){return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t).then((function(t){n((function(e){return[].concat(h(e),[t.data])}))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()},editlogo:function(t,e){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s(t,e).then((function(r){n((function(n){return n&&n.map((function(n){var r;return String(n.id)===String(t)?((r=n).instance_id=e.instance_id,r.i_logo=e.i_logo,r.position=e.position,r.section=e.section,r):n}))}))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()},deletelogo:function(t){return g(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(t).then((function(r){n(e&&e.filter((function(e){return e.id!==t})))})).catch((function(t){console.log(t),Object(d.e)(t,t.response)}));case 2:case"end":return r.stop()}}),r)})))()}}}},644:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(11),o=n(645),a=n(19);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=new r.a(!1),l=function(){var t=i(Object(r.b)(s),2),e=t[0],n=t[1];return{leveldetails:e,setleveldetails:n,loadleveldetails:function(){return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)().then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(a.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))})();var t}}}},645:function(t,e,n){"use strict";var r=n(5),o=n(20);function a(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var u=function(){var t,e=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("api/v1/appdata/level/list/",{headers:Object(o.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function i(t){a(u,r,o,i,c,"next",t)}function c(t){a(u,r,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();e.a=u},692:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(11),o=n(5),a=n(20);function u(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var i=function(){var t,e=(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/instance/logo/position/",{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();function c(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}var s=function(){var t,e=(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("api/v1/appdata/instance/logo/position/".concat(e,"/"),{headers:Object(a.a)(String(localStorage.getItem("AuthToken")))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){c(a,r,o,u,i,"next",t)}function i(t){c(a,r,o,u,i,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}(),l=n(19);function f(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function u(t){f(a,r,o,u,i,"next",t)}function i(t){f(a,r,o,u,i,"throw",t)}u(void 0)}))}}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);u=!0);}catch(t){i=!0,o=t}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=new r.a(!1),m=function(){var t=v(Object(r.b)(h),2),e=t[0],n=t[1];return{logoposition:e,setlogoposition:n,loadlogo_arrayposition:function(){return p(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(l.e)(t,t.response)}));case 2:case"end":return t.stop()}}),t)})))()},loadlogo_arrayposition_iid:function(t){return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t).then((function(t){n(t.data.results)})).catch((function(t){console.log(t),Object(l.e)(t,t.response)}));case 2:case"end":return e.stop()}}),e)})))()}}}}}]);
//# sourceMappingURL=27.b7d85b045878ba2dfaf0.js.map